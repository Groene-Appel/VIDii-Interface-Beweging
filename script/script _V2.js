// Huidige animatie
var animation;

// Huidige toestand bijhouden
var huidigeToestand = 0;

// Animatielijst
var animaties = [
    {
        path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/2_blixem/2_blixem.json',
        loopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/2_blixem_loop/2_blixem_loop.json',
        tekst: 'O nee, wat is er gebeurt met blub de vis? Laten we hem wakker maken!',
        knopText: 'Animatie 1'
    },
    {
        path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/3_frozen/3_frozen.json',
        loopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/3_frozen_loop/3_frozen_loop.json',
        tekst: 'Gelukkig, er zit weer wat leven in blub, maar blub gaat veel te snel!',
        knopText: 'Animatie 2'
    },
    {
        path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/4_verdamping/4_verdamping.json',
        loopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/4_verdamping_loop/4_verdamping_loop.json',
        tekst: 'Blub is nu vast, laten we het ijs opwarmen!',
        knopText: 'Animatie 3'
    },
    {
        path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/5_regen/5_regen.json',
        loopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/5_regen_loop/5_regen_loop.json',
        tekst: 'O nee, al het water verdampt! Snel, voordat Blub geen zuurstof meer heeft!',
        knopText: 'Animatie 4'
    }
];

// Selecteer elementen
var verhaalTekst = document.querySelector('h1');
var animatieButton = document.querySelector('button');

// Functie om een animatie te laden
function laadAnimatie(animatiePath, loopPath, callback) {
    animation.destroy(); // Vernietig de huidige animatie
    animation = bodymovin.loadAnimation({
        container: document.getElementById('anim'),
        renderer: 'svg',
        loop: false, // Speel de animatie één keer af
        autoplay: true,
        path: animatiePath
    });

    // Callback wanneer de animatie eindigt
    animation.addEventListener('complete', function () {
        animation.destroy(); // Vernietig de huidige animatie
        animation = bodymovin.loadAnimation({
            container: document.getElementById('anim'),
            renderer: 'svg',
            loop: true, // Herhaal de loop-versie van de animatie
            autoplay: true,
            path: loopPath
        });

        // Als er een extra callback is, voer deze uit
        if (callback) callback();
    });
}

// Functie om de titel en knop te updaten
function updateTitelEnKnop(tekst, knopText) {
    verhaalTekst.textContent = tekst;
    animatieButton.textContent = knopText;
}

// Functie om de volgende animatie te starten
function startVolgendeAnimatie() {
    if (huidigeToestand < animaties.length) {
        var huidigeAnimatie = animaties[huidigeToestand];

        // Update titel en knop
        updateTitelEnKnop(huidigeAnimatie.tekst, huidigeAnimatie.knopText);

        // Laad de animatie
        laadAnimatie(huidigeAnimatie.path, huidigeAnimatie.loopPath);

        // Ga naar de volgende toestand
        huidigeToestand++;
    } else {
        // Reset naar het begin
        verhaalTekst.textContent = 'Gelukkig, alles is nu goed! Blub leefde nog een goed leven tot zijn 80ste in vissenjaren.';
        animatieButton.textContent = 'Herstart';
        huidigeToestand = 0;
    }
}

// Voeg een eventlistener toe aan de knop
animatieButton.addEventListener('click', startVolgendeAnimatie);

// Start met de eerste animatie
laadAnimatie(
    'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/1_intro/1_intro.json',
    'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/1_intro_loop/1_intro_loop.json'
);