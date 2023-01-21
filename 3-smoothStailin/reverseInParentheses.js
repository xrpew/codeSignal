function solution(s) {
  // Utilizar un bucle infinito
  while (true) {
    // Buscar el próximo paréntesis de cierre ")" en la cadena de entrada
    let c = s.indexOf(")");
    // Si no se encuentra el paréntesis de cierre, salir del bucle infinito
    if (c === -1) {
      break;
    }
    // Buscar el paréntesis de apertura correspondiente "(" antes del paréntesis de cierre
    let o = s.substring(0, c).lastIndexOf("(");
    // Separar la cadena de entrada en tres partes: antes del paréntesis de apertura, entre los paréntesis y después del paréntesis de cierre.
    let start = s.substring(0, o);
    let middle = s
      .substring(o + 1, c)
      .split("")
      .reverse()
      .join("");
    let end = s.substring(c + 1, s.length);
    // Concatenar las tres partes de nuevo y guardarlo en la variable s
    s = start + middle + end;
  }
  //Devolver la cadena modificada
  return s;
}
console.log(solution("hola(hel(lo))"));
