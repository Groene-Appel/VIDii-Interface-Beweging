// Huidige animaties
var animation; // Voor het scherm
var animationButton; // Voor de button

// Huidige toestanden bijhouden
var huidigeToestand = 0;

// Animatielijsten
var animaties = [
    {
        path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/2_blixem/2_blixem.json',
        loopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/2_blixem_loop/2_blixem_loop.json',
        tekst: 'Gelukkig, er zit weer wat leven in blub, maar blub gaat veel te snel!',
        knopText: 'Animatie 1',
        buttonPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/1_blixem_icoon/blixem_icoon.json',
        buttonLoopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/1_blixem_icoon_loop/blixem_icoon_loop.json'
    },
    {
        path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/3_frozen/3_frozen.json',
        loopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/3_frozen_loop/3_frozen_loop.json',
        tekst: 'Blub is nu vast, laten we het ijs opwarmen!',
        knopText: 'Animatie 2',
        buttonPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/2_frozen_icoon/frozen_icoon.json',
        buttonLoopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/2_frozen_icoon_loop/frozen_icoon_loop.json'
    },
    {
        path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/4_verdamping/4_verdamping.json',
        loopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/4_verdamping_loop/4_verdamping_loop.json',
        tekst: 'O nee, al het water verdampt! Snel, voordat Blub geen zuurstof meer heeft!',
        knopText: 'Animatie 3',
        buttonPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/3_verdamping_icoon/verdamping_icoon.json',
        buttonLoopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/3_verdamping_icoon_loop/verdamping_icoon_loop.json'
    },
    {
        path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/5_regen/5_regen.json',
        loopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/5_regen_loop/5_regen_loop.json',
        tekst: 'Kijk eens aan nu, nu heeft blub eindelijk wat rust',
        knopText: 'Animatie 4',
        buttonPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/4_regen_icoon/regen_icoon.json',
        buttonLoopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/4_regen_icoon_loop/regen_loop.json'
    }
];

// Selecteer elementen
var verhaalTekst = document.querySelector('h1');
var animatieButton = document.querySelector('button');

// Functie om een animatie te laden (scherm)
function laadAnimatie(animatiePath, loopPath, callback) {
    if (animation) {
        animation.destroy();
    }
    animation = bodymovin.loadAnimation({
        container: document.getElementById('anim'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: animatiePath
    });

    animation.addEventListener('complete', function () {
        animation.destroy();
        animation = bodymovin.loadAnimation({
            container: document.getElementById('anim'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: loopPath
        });

        if (callback) callback();
    });
}

// Functie om een animatie te laden (button)
function laadAnimatieButton(animatiePathButton, loopPathButton, callback) {
    if (animationButton) {
        animationButton.destroy();
    }
    animationButton = bodymovin.loadAnimation({
        container: document.getElementById('animbutton'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: animatiePathButton
    });

    animationButton.addEventListener('complete', function () {
        animationButton.destroy();
        animationButton = bodymovin.loadAnimation({
            container: document.getElementById('animbutton'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: loopPathButton
        });

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

        // Laad animatie op scherm en in button
        laadAnimatie(huidigeAnimatie.path, huidigeAnimatie.loopPath);
        laadAnimatieButton(huidigeAnimatie.buttonPath, huidigeAnimatie.buttonLoopPath);

        // Ga naar de volgende toestand
        huidigeToestand++;
    } else {
        // Reset naar het begin
        verhaalTekst.textContent = 'Gelukkig, alles is nu goed! Blub leefde nog een goed leven tot zijn 80ste in vissenjaren.';
        animatieButton.textContent = 'reset';
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
laadAnimatieButton(
    'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/1_blixem_icoon/blixem_icoon.json',
    'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/1_blixem_icoon_loop/blixem_icoon_loop.json'
);