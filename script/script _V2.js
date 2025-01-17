// Laad de eerste animatie
var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/1_intro/1_intro.json'
});

// Callback voor wanneer de eerste animatie klaar is
animation.addEventListener('complete', function () {
    loadAnimationLoop('https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/1_intro_loop/1_intro_loop.json');
});

// Functie om een loopende versie van de animatie te laden
function loadAnimationLoop(loopPath) {
    animation.destroy(); // Vernietig de huidige animatie
    animation = bodymovin.loadAnimation({
        container: document.getElementById('anim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: loopPath
    });
}

// Selecteer het bestaande h1-element en de knop
var verhaalTekst = document.querySelector('h1');
var animatieButton = document.querySelector('button');

// Huidige toestand
var huidigeToestand = 0;

// Functie om de titel te vervangen en de animatie bij te werken
function startVerhaal() {
    verhaalTekst.classList.add('fade-out');

    setTimeout(() => {
        // Update de tekst na de fade-out
        if (huidigeToestand === 0) {
            verhaalTekst.textContent = 'O nee, wat is er gebeurt met Blub de vis? Laten we hem wakker maken!';
            animatieButton.textContent = 'Animatie 2';

            // Laad de volgende animatie
            laadNieuweAnimatie(
                'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/2_blixem/2_blixem.json',
                'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/2_blixem_loop/2_blixem_loop.json'
            );

            huidigeToestand = 1;

        } else if (huidigeToestand === 1) {
            verhaalTekst.textContent = 'Gelukkig, er zit weer wat leven in Blub, maar Blub gaat veel te snel!';
            animatieButton.textContent = 'Animatie 3';

            // Laad de volgende animatie
            laadNieuweAnimatie(
                'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/3_frozen/3_frozen.json',
                'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/3_frozen_loop/3_frozen_loop.json'
            );

            huidigeToestand = 2;

        } else if (huidigeToestand === 2) {
            verhaalTekst.textContent = 'Blub is nu vast, laten we het ijs opwarmen!';
            animatieButton.textContent = 'Animatie 4';

            // Laad de volgende animatie
            laadNieuweAnimatie(
                'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/4_verdamping/4_verdamping.json',
                'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/4_verdamping_loop/4_verdamping_loop.json'
            );

            huidigeToestand = 3;

        } else if (huidigeToestand === 3) {
            verhaalTekst.textContent = 'O nee, al het water verdampt, snel voordat Blub geen zuurstof meer heeft!';
            animatieButton.textContent = 'Animatie 5';

            // Laad de volgende animatie
            laadNieuweAnimatie(
                'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/5_regen/5_regen.json',
                'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/5_regen_loop/5_regen_loop.json'
            );

            huidigeToestand = 4;

        } else {
            verhaalTekst.textContent = 'Gelukkig, alles is nu goed! Blub leefde nog een goed leven tot zijn 80ste in vissenjaren.';
            animatieButton.textContent = 'Herstart';

            // Reset naar de eerste animatie
            laadNieuweAnimatie(
                'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/1_intro/1_intro.json',
                'https://groene-appel.github.io/VIDii-Interface-Beweging/script/animaties/1_intro_loop/1_intro_loop.json'
            );

            huidigeToestand = 0;
        }

        // Verwijder de fade-out class en voeg de fade-in class toe
        verhaalTekst.classList.remove('fade-out');
        verhaalTekst.classList.add('fade-in');

        // Na de fade-in animatie, verwijder de fade-in class
        setTimeout(() => {
            verhaalTekst.classList.remove('fade-in');
        }, 500); // Duur van de fade-in animatie
    }, 500); // Duur van de fade-out animatie
}

// Functie om een nieuwe animatie te laden en de loop-versie in te stellen
function laadNieuweAnimatie(animatiePath, loopPath) {
    animation.destroy(); // Vernietig de huidige animatie
    animation = bodymovin.loadAnimation({
        container: document.getElementById('anim'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: animatiePath
    });

    // Callback voor het einde van de animatie
    animation.addEventListener('complete', function () {
        loadAnimationLoop(loopPath);
    });
}

// Voeg de event listener toe aan de knop
animatieButton.addEventListener('click', startVerhaal);