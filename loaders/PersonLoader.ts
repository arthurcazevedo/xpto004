import { ResultSet, createClient }  from "https://esm.sh/@libsql/client@0.7.0";
import { load }                     from "https://deno.land/std@0.224.0/dotenv/mod.ts";
//import  action                      from "site/actions/PersonTransform.ts"

export type rs = ResultSet;

const env = await load();

export interface Props {
 /**
   * @format integer between 1 and 100.000
   * @description id of the profile.
   * @default 1
   */
 id?: string;
}

export const turso = createClient({
  url: env["TURSO_DATABASE_URL"],
  authToken: env["TURSO_AUTH_TOKEN"],
});

export default async function loader(props: Props,_req: Request,): Promise<rs>
{
  let erro:rs;
  try {
    const retorno = await turso.execute({sql: "SELECT * FROM person where id=?", args: [props.id ?? 1]});
    erro = retorno;
    return (
      retorno.json()
    );
  } catch (error) {
    console.error(`\nErro ao acessar o banco de dados: ${env["TURSO_DATABASE_URL"]}\n${error}\n${erro}`)
  }
}
