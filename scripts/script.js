// JavaScript Document
console.log("Lego!");







// Poppetje animatie bovenstuk
//even aanpassen naar eigen animatie
var geanimeerdElement = document.querySelector('.geanimeerd-element');
// var animaties = ['animatie1', 'animatie2', 'animatie3', 'animatie4'];
// var huidigeAnimatieIndex = 0;



function startAnimatie1958() {
    var geanimeerdElementBovenstuk = document.querySelector('.bovenstuk');
    geanimeerdElementBovenstuk.classList.remove('anibovenstuk');
    geanimeerdElementBovenstuk.classList.add('anibovenstuk');

    var geanimeerdElementMiddenstuk = document.querySelector('.middenstuk');
    geanimeerdElementMiddenstuk.classList.remove('animiddenstuk');
    geanimeerdElementMiddenstuk.classList.add('animiddenstuk');

    var geanimeerdElementOnderstuk = document.querySelector('.onderstuk');
    geanimeerdElementOnderstuk.classList.remove('anionderstuk');
    geanimeerdElementOnderstuk.classList.add('anionderstuk');
    console.log("testje aniamtie knop");

    //maakt het mogelijk om de animatie te resetten, als ik het goed begrijp wordt de claslisten verwijderd na 3,5 seconden.
setTimeout(function() {
    geanimeerdElementBovenstuk.classList.remove('anibovenstuk');

    geanimeerdElementMiddenstuk.classList.remove('animiddenstuk');

    geanimeerdElementOnderstuk.classList.remove('anionderstuk');
}, 3500);
}

// var titelElement = document.getElementById("tekstElement");


















//tekst veranderd als men op de button links of rechts drukt.

var teksten = [
  "In dit jaar komt de lego karakter die wij vandaag de dag kennen op de markt beschikbaar, hierbij zijn alle ledematen beweegbaar, waarbij je met de handjes verschillende objecten kunnen vasthouden. De alle eerste karakter die uitkwam was de politieagent.",
  "In dit jaar kwam mannen kapsels beschikbaar, hiervoor konden ze alleen petjes of hoedjes dragen. Nu hebben de mannelijke karakters verschillende kapsels om hieruit te kiezen.",
];

var titels


//startgetal van teksten
var huidigeIndex = 0;


//p element dat verander moet worden
var tekstElement = document.getElementById("tekstElement");

//aanropen van de buttons
var Buttonrechts = document.getElementById("button-rechts");
var Buttonlinks = document.getElementById("button-links");


// Toon de initiële tekst
tekstElement.innerHTML = teksten[huidigeIndex];

// Voeg event listeners toe aan de knoppen
Buttonrechts.addEventListener("click", function() {
  huidigeIndex = (huidigeIndex + 1) % teksten.length;
  tekstElement.innerHTML = teksten[huidigeIndex];
});

Buttonlinks.addEventListener("click", function() {
  huidigeIndex = (huidigeIndex - 1 + teksten.length) % teksten.length;
  tekstElement.innerHTML = teksten[huidigeIndex];
});









//locatie om afbeeldingen te wijzigen na de klik
//afbeeldingen toevoegen dat op volorde van een waarde mee veranderd

var veranderAfbeelding = document.getElementById('afbeelding');

Buttonrechts.addEventListener("click", function() {
  veranderAfbeelding.src = "./images/Bovenstuk-2.png";
  console.log("verander de afbeelding?")
});

Buttonlinks.addEventListener("click", function() {
  veranderAfbeelding.src = "./images/Bovenstuk.png";
  console.log("verander de afbeelding?")
});











//jaartallen waar de gebruiker doorheen kan navigeren
var jaartallen = [1978, 1979, 1989, 1990, 2001]//zijn de jaartallen waar veranderingen in voortkomen

//startgetal/huidige positie na verandering
var startPositie = 0;

Buttonlinks.addEventListener("click", function() {
  startPositie = (startPositie - 1 + jaartallen.length) % jaartallen.length;
  updateJaartal();
  console.log("vertanderd het getal omlaag?")
});

Buttonrechts.addEventListener("click", function() {
  startPositie = (startPositie + 1) % jaartallen.length;
  updateJaartal();
  console.log("vertanderd het getal omhoog?")
});

function updateJaartal() {
  document.getElementById('jaartalDisplay').innerText = jaartallen[startPositie];
}




// // Lijst van jaartallen die getoond moeten worden als je op linker of rechter button drukt.
// var jaartallen = [1958, 2001, 2009, 2031, 2012/* ... voeg hier meer jaartallen toe ... */];
// let huidigePositie = 0;

// // Functie om jaartal te verlagen
// function verlaagJaartal() {
//   // Terug naar het vorige jaartal in de lijst (cyclisch)
//   huidigePositie = (huidigePositie - 1 + jaartallen.length) % jaartallen.length;
//   updateJaartalDisplay();
// }

// // Functie om jaartal te verhogen
// function verhoogJaartal() {
//   // Naar het volgende jaartal in de lijst (cyclisch)
//   huidigePositie = (huidigePositie + 1) % jaartallen.length;
//   updateJaartal();
// }

// Functie om het jaartal in de HTML bij te werken
// function updateJaartal() {
//   document.getElementById('jaartalDisplay').innerText = jaartallen[huidigePositie];
// }

