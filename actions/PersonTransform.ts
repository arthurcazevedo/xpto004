import { ResultSet } from "https://esm.sh/@libsql/client@0.6.0/web";

export interface iregistro {
  tipo: string,
  tamanho: string,
  nome: string,
  valor: string,
}

export type person = iregistro[];

export type persons = person[] ;

export default function action(resultado: ResultSet):persons {
  const retorno:persons = [];
  resultado.rows?.forEach(row => {
    let pos = 0;
    if (row === undefined) {
      return undefined;
    }
    Object(row).forEach((value: string) => {
      const name = resultado.columns[pos];
      const type_size = resultado.columnTypes[pos].split('(');
      const type = type_size[0];
      const size = type_size[1];
      const person:iregistro = {nome: name, tamanho: size, tipo: type, valor: value}
      retorno.push([person]);
      pos++;
    });
  });
  return retorno;
};
