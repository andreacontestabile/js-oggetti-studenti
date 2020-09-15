$(document).ready(function() {

  // HANDLEBARS

  var source = $("#student-template").html();
  var template = Handlebars.compile(source);

  var context = {
    title: "Scheda Studente"
  };


  /* 1. Creare un oggetto che descriva uno studente con le seguenti proprietà:
  nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà. */

  // Creo un nuovo oggetto studente:
  var unoStudente = {
    "nome": "Luca",
    "cognome": "Messina",
    "eta": 23
  };

  context.studente = unoStudente;

  var html = template(context);
  $('.app').append(html);

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

  // Ciclo all'interno dell'array e per ognuno degli oggetti, aggiorno il context
  for (var i = 0; i < alcuniStudenti.length; i++) {
    var studente = alcuniStudenti[i];
    context.studente = studente;
    var html = template(context);
    $('.app').append(html);
  }

  /* 3. Dare la possibilità all’utente attraverso 3 prompt di aggiungere
  un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

   $("#new-student").click(function(){

     var nuovoStudente = {};
     nuovoStudente.nome = prompt("Inserire il nome del nuovo studente");
     nuovoStudente.cognome = prompt("Inserire il cognome del nuovo studente");
     nuovoStudente.eta = parseInt(prompt("Inserire l'età del nuovo studente"));

     context.studente = nuovoStudente;

     var html = template(context);
     $('.app').append(html);

   });


   // var nuovoStudente = {};
   // nuovoStudente.nome = prompt("Inserire il nome del nuovo studente");
   // nuovoStudente.cognome = prompt("Inserire il cognome del nuovo studente");
   // nuovoStudente.eta = parseInt(prompt("Inserire l'età del nuovo studente"));
   //
   // alcuniStudenti.push(nuovoStudente);
   //
   // console.log(alcuniStudenti);

});
