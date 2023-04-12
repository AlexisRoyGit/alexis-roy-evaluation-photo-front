/*Code JS pour l'apparition dynamique des images de la galerie selon la catégorie choisie*/ 
let mariage = document.getElementById('mariage');
let bebe = document.getElementById('bebe');
let couple = document.getElementById('couple');
let famille = document.getElementById('famille');
let bapteme = document.getElementById('bapteme');
let grossesse = document.getElementById('grossesse');
let portrait = document.getElementById('portrait');
let toutesimages = document.getElementById('toutescategories')
let images = document.querySelectorAll('section');

/*Remise a zero de l'affichage des images afin que le passage d'une categorie à l'autre soit possible*/
function rebootDisplayImages() {
    images.forEach((image) => {
        image.removeAttribute('class');
    })
}

/*Affichage des photos de la catégorie "mariage"*/
function displayMariage() {

    rebootDisplayImages();

    images.forEach((image) => {
        var attribut = image.getAttribute('name');

        switch (attribut) {
            case 'mariage':
                break;
            default :
                image.setAttribute('class', 'display-none');
        }
    })
}

/*Affichage des photos de la catégorie "bébé"*/
function displayBaby() {

    rebootDisplayImages();

    images.forEach((image) => {
        var attribut = image.getAttribute('name');

        switch (attribut) {
            case 'bebe':
                break;
            default :
                image.setAttribute('class', 'display-none');
        }
    })
}

/*Affichage des photos de la catégorie "couple"*/
function displayCouple() {

    rebootDisplayImages();

    images.forEach((image) => {
        var attribut = image.getAttribute('name');

        switch (attribut) {
            case 'couple':
                break;
            default :
                image.setAttribute('class', 'display-none');
        }
    })
}

/*Affichage des photos de la catégorie "famille"*/
function displayFamily() {

    rebootDisplayImages();

    images.forEach((image) => {
        var attribut = image.getAttribute('name');

        switch (attribut) {
            case 'famille':
                break;
            default :
                image.setAttribute('class', 'display-none');
        }
    })
}

/*Affichage des photos de la catégorie "baptême"*/
function displayBaptism() {

    rebootDisplayImages();

    images.forEach((image) => {
        var attribut = image.getAttribute('name');

        switch (attribut) {
            case 'bapteme':
                break;
            default :
                image.setAttribute('class', 'display-none');
        }
    })
}

/*Affichage des photos de la catégorie "grossesse"*/
function displayPregnancy() {

    rebootDisplayImages();

    images.forEach((image) => {
        var attribut = image.getAttribute('name');

        switch (attribut) {
            case 'grossesse':
                break;
            default :
                image.setAttribute('class', 'display-none');
        }
    })
}

/*Affichage des photos de la catégorie "portrait"*/
function displayPortrait() {

    rebootDisplayImages();

    images.forEach((image) => {
        var attribut = image.getAttribute('name');

        switch (attribut) {
            case 'portrait':
                break;
            default :
                image.setAttribute('class', 'display-none');
        }
    })
}

/*Affichage de toutes les photos sans distinction de catégories*/
function displayAllImages() {
    rebootDisplayImages();
}

/*Affichage des photos selon leur catégorie au clic de l'utilisateur*/
mariage.addEventListener('change', displayMariage);
bebe.addEventListener('change', displayBaby);
couple.addEventListener('change', displayCouple);
famille.addEventListener('change', displayFamily);
bapteme.addEventListener('change', displayBaptism);
grossesse.addEventListener('change', displayPregnancy);
portrait.addEventListener('change', displayPortrait);
toutesimages.addEventListener('change', displayAllImages);

/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/*Code JS pour le deploiement du menu lateral en mobile*/
let nav = document.getElementById('myNav');
let open = document.getElementById('openBtn');
let close = document.getElementById('closeBtn');

/*Deploiement du menu lateral mobile*/
function openMobileNav() {
    nav.classList.add('active');
}

/*Fermeture du menu lateral mobile*/
function closeMobileNav() {
    nav.classList.remove('active');
}

/*Declenchement du deploiement et de la fermeture du menue latéral au clic de l'utilisateur*/
open.addEventListener('click', openMobileNav);
close.addEventListener('click', closeMobileNav);