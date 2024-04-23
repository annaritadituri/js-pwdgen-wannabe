'use strict';
//

//Inserisci il nome
let nome = prompt("Inserisci il tuo nome:");

//Inserisci il cognome
let cognome = prompt("Inserisci il tuo cognome:");

//Inserisci il tuo colore preferito
let colorePreferito = prompt("Inserisci il tuo colore preferito:");

//Creiamo la password
const password = (`${nome}${cognome}${colorePreferito}21`);

//Visualizziamo la password sulla pagina
document.getElementById("password").innerHTML = password;