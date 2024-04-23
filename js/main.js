'use strict';
//

//Inserisci il nome
let nome = prompt("Inserisci il tuo nome:");
console.log("Nome: " + nome);

//Inserisci il cognome
let cognome = prompt("Inserisci il tuo cognome:");
console.log("Cognome: " + cognome);

//Inserisci il tuo colore preferito
let colorePreferito = prompt("Inserisci il tuo colore preferito:");
console.log("Colore preferito: " + colorePreferito);

//Creiamo la password
const password = (`${nome}${cognome}${colorePreferito}21`);
console.log(password);

//Visualizziamo la password sulla pagina
document.getElementById("password").innerHTML = password;