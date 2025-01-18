// Huidige animatie
var animationButton;

// Huidige toestand bijhouden
var huidigeToestand = 0;

// Animatielijst
var animatiesButtonLijst = [
    {
        path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/1_blixem_icoon/blixem_icoon.json',
        loopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/1_blixem_icoon_loop/blixem_icoon_loop.json',
    },
    {
        path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/2_frozen_icoon/frozen_icoon.json',
        loopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/2_frozen_icoon_loop/frozen_icoon_loop.json',
    },
    {
        path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/3_verdamping_icoon/verdamping_icoon.json',
        loopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/3_verdamping_icoon_loop/verdamping_icoon_loop.json',
    },
    {
        path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/4_regen_icoon/regen_icoon.json',
        loopPath: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/4_regen_icoon_loop/regen_icoon_loop.json',
    }
];

// Selecteer elementen
var animatieButton = document.querySelector('button');


// Functie om een animatie te laden
function laadAnimatieButton(animatiePathButton, loopPathButton, callback) {
    // Laad de nieuwe animatie
    if (animationButton) {
        animationButton.destroy(); // Vernietig de huidige animatie als deze bestaat
    }

    animationButton = bodymovin.loadAnimation({
        container: document.getElementById('animbutton'),
        renderer: 'svg',
        loop: false, // Speel de animatie één keer af
        autoplay: true,
        path: animatiePathButton
    });

    // Callback wanneer de animatie eindigt
    animationButton.addEventListener('complete', function () {
        // Start de loop-animatie
        animationButton.destroy(); // Vernietig de huidige animatie
        animationButton = bodymovin.loadAnimation({
            container: document.getElementById('animbutton'),
            renderer: 'svg',
            loop: true, // Herhaal de loop-versie van de animatie
            autoplay: true,
            path: loopPathButton
        });

        // Als er een extra callback is, voer deze uit
        if (callback) callback();
    });
}


// Functie om de volgende animatie te starten
function startVolgendeAnimatieButton() {
    if (huidigeToestand < animatiesButtonLijst.length) {
        var huidigeAnimatieButton = animatiesButtonLijst[huidigeToestand];

        // Laad de nieuwe button-animatie
        laadAnimatieButton(huidigeAnimatieButton.path, huidigeAnimatieButton.loopPath);

        // Ga naar de volgende toestand
        huidigeToestand++;
    } else {
        // Reset naar het begin
        huidigeToestand = 0;

        // Laad de eerste animatie opnieuw
        var eersteAnimatie = animatiesButtonLijst[huidigeToestand];
        laadAnimatieButton(eersteAnimatie.path, eersteAnimatie.loopPath);
    }
}



// Voeg een eventlistener toe aan de knop
animatieButton.addEventListener('click', startVolgendeAnimatieButton);

// Start met de eerste animatie
laadAnimatieButton(
    'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/1_blixem_icoon/blixem_icoon.json',
    'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animatie_icoons/1_blixem_icoon_loop/blixem_icoon_loop.json'
);