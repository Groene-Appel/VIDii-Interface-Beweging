var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    rederer: 'svg',
    loop: false,
    autoplay: true,
    path:'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/1_intro/1_intro.json'
});


// Callback voor wanneer de eerste animatie klaar is
animation.addEventListener('complete', function () {
    // Laad de tweede animatie (1_intro_loop.json) nadat de eerste is voltooid
    loadSecondAnimation();
});


// Functie om de tweede animatie te laden
function loadSecondAnimation() {
    animation.destroy(); // Vernietig de huidige animatie
    animation = bodymovin.loadAnimation({
        container: document.getElementById('anim'),
        renderer: 'svg',
        loop: true, // De tweede animatie blijft herhalen
        autoplay: true,
        path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/1_intro_loop.json'
    });
};




// Selecteer het bestaande h1-element en de knop
var verhaalTekst = document.querySelector('h1');
var animatieButton = document.querySelector('button');





//huidige toestand
var huidigeToestand = 0;

var vervangendeTekst;

// Functie om de titel te vervangen
function startVerhaal() {

    verhaalTekst.classList.add('fade-out');

    setTimeout(() => {

    // updat de tekst na de fade-out
    if (huidigeToestand === 0) {
        // Maakt een h2-element aan
        vervangendeTekst = document.createElement('h2');
        vervangendeTekst.textContent = 'O nee, wat is er gebeurt met blub de vis? Laten we hem wakker maken!';

        // Vervang het h1-element door het h2-element
        verhaalTekst.parentNode.replaceChild(vervangendeTekst, verhaalTekst);

        verhaalTekst = vervangendeTekst;


        //animtie 2
        animation.destroy(); // Vernietig de huidige animatie
        animation = bodymovin.loadAnimation({
            container: document.getElementById('anim'),
            renderer: 'svg',
            loop: true, // Blixem animatie blijft herhalen
            autoplay: true,
            path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/4_verdamping.json'
        });



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


     // Verwijder de fade-out class en voeg de fade-in class toe
     verhaalTekst.classList.remove('fade-out');
     verhaalTekst.classList.add('fade-in');

     // Na de fade-in animatie, verwijder de fade-in class
     setTimeout(() => {
         verhaalTekst.classList.remove('fade-in');
     }, 0); // Duur van de fade-in animatie
 }, 0); // Duur van de fade-out animatie
}

// Voeg de event listener toe aan de knop
animatieButton.addEventListener('click', startVerhaal);
