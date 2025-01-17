// Selecteer het bestaande h1-element en de knop
var verhaalTekst = document.querySelector('h1');
var animatieButton = document.querySelector('button');

//huidige toestand
var huidigeToestand = 0;

var vervangendeTekst;

// Functie om de titel te vervangen
function startVerhaal() {

    //toevoegen van de fade-out class
    verhaalTekst.classList.add('fade-out');
    
    //wachten totdat de fade-out animatie is afgespeeld
    setTimeout(function () {

    // updat de tekst na de fade-out
    if (huidigeToestand === 0) {
        // Maakt een h2-element aan
        vervangendeTekst = document.createElement('h2');
        vervangendeTekst.textContent = 'O nee, wat is er gebeurt met blub de vis? Laten we hem wakker maken!';

        // Vervang het h1-element door het h2-element
        verhaalTekst.parentNode.replaceChild(vervangendeTekst, verhaalTekst);

        verhaalTekst = vervangendeTekst;

        // Update de knop
        animatieButton.textContent = 'Animatie 1';

        huidigeToestand = 1;
        
    } else if (huidigeToestand === 1) {
        vervangendeTekst.textContent = 'Gelukkig, er zit weer wat leven in blub, maar blub gaat veelste snel';
        animatieButton.textContent = 'Animatie 2';

        huidigeToestand = 2;
        
    } else if (huidigeToestand === 2) {
        vervangendeTekst.textContent = 'Blub is nu vast, laten het ijs opwarmen';
        animatieButton.textContent = 'Animatie 3';

        huidigeToestand = 3;

    } else if (huidigeToestand === 3) {
        vervangendeTekst.textContent = 'O nee, al het waterverdampt, snel voordat blub geen zuurstof meer heeft';
        animatieButton.textContent = 'Animatie 4';

        huidigeToestand = 4;
        
    } else {
        vervangendeTekst.textContent = 'Gelukkig alles is nu goed, blub leefde nog een goed leven tot zijn 80ste in vissenjaren';
        animatieButton.textContent = 'reset';

        huidigeToestand = 0;
    }

    //de fade-in class wordt toegevoegd en de fade-out wordt verwijderd
    verhaalTekst.classList.remove('fade-out'); 
    verhaalTekst.classList.add('fade-in');

    //verwijder de fade-in na de animatie voor herbruikbaarheid
    setTimeout(function () {
        verhaalTekst.classList.remove('fade-in');
        }, 2000);
    }, 2000);
}

// Voeg de event listener toe aan de knop
animatieButton.addEventListener('click', startVerhaal);


// // animatie 1
// function animatie1() {
//     vervangendeTekst.textContent = 'Gelukkig, er zit weer wat leven in blub, maar blub gaat veelste snel';

//     animatieButton.textContent = 'Animatie 2';    
// }

// animatieButton.addEventListener('click', animatie1);