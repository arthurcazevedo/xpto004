import { ResultSet, Row }      from "https://esm.sh/@libsql/client@0.6.0/web";
import { rs as RS } from "site/loaders/PersonLoader.ts"

export interface Props {
  /**
   * @format integer between 1 and 100.000
   * @description id of the profile.
   * @default 1
   */
  //id?: string;
  /**
   * @format structure of lists
   * @description profiles.
   * @default 
   */
  rs?: RS;
}

export default function Section(props: Props) {

  if (props.rs === undefined ) {
    return <p>Você deve fornecer um id de um perfil</p>
  }
  return (
    <div
      id="Person"
      class="container py-10 flex flex-col h-screen w-full items-center justify-center gap-16"
    >
      <p>{ (props.rs as ResultSet).rows.map((row:Row) => {row.GIVENNAME})}</p>
    </div>
  );
}
