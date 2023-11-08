// JavaScript Document
console.log("Howdy!");



// Poppetje animatie bovenstuk
//even aanpassen naar eigen animatie
var geanimeerdElement = document.querySelector('.geanimeerd-element');
var animaties = ['animatie1', 'animatie2', 'animatie3', 'animatie4'];
var huidigeAnimatieIndex = 0;



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






// // Lijst van jaartallen die getoond moeten worden als je op linker of rechter button drukt.
// const jaartallen = [1958, 2001, 2009, 2031, 2012/* ... voeg hier meer jaartallen toe ... */];
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
//   updateJaartalDisplay();
// }

// // Functie om het jaartal in de HTML bij te werken
// function updateJaartalDisplay() {
//   document.getElementById('jaartalDisplay').innerText = jaartallen[huidigePositie];
// }

