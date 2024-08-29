// 2. Reversión de cadena: Dada una frase y luego muestra la misma frase pero con las palabras en orden inverso.
const text2 = "Hola mundo";
const palabras = text2.split(" ");
const palabrasInvertidas = palabras.reverse();
const frase = palabrasInvertidas.join(" ");
console.log("2. La frase '"+text2+"' invertida es '"+frase+"'");