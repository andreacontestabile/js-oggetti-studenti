/* 1. Creare un oggetto che descriva uno studente con le seguenti proprietà:
nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà. */

// Creo un nuovo oggetto studente:
var unoStudente = {
  "nome": "Luca",
  "cognome": "Messina",
  "eta": 23
}

// Ciclo all'interno dell'oggetto, stampando ognuna delle sue proprietà
for (var key in unoStudente) {
  console.log(key + " : " + unoStudente[key]);
}



/* 2. Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno nome e cognome */

// Creo un array che contiene diversi oggetti studente
var alcuniStudenti = [
  {
    "nome": "Sara",
    "cognome": "Longo",
    "eta": 21
  },
  {
    "nome": "Andrea",
    "cognome": "Rossi",
    "eta": 22
  }, {
    "nome": "Franco",
    "cognome": "Giurato",
    "eta": 25
  },
  {
    "nome": "Laura",
    "cognome": "Ferrari",
    "eta": 23
  },
  {
    "nome": "Alessandro",
    "cognome": "Testa",
    "eta": 22
  }
];

// Ciclo all'interno dell'array e per ognuno degli oggetti, stampo nome e cognome
for (var i = 0; i < alcuniStudenti.length; i++) {
  var studente = alcuniStudenti[i];
  console.log(studente.nome + " " + studente.cognome);
}
