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

//Creiamo la password combinando gli input con un numero random tra 0 e 100
const password = (`${nome}${cognome}${colorePreferito}${Math.floor(Math.random() * 101)}`);
console.log(password);

//Visualizziamo la password sulla pagina
document.getElementById("password").innerHTML = password;