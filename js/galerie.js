/*Code JS pour l'apparition dynamique des images de la galerie selon la catégorie choisie*/ 
let choices = document.querySelectorAll('form input')
let images = document.querySelectorAll('section');

/*Ecoute des boutons radios et appel de la fonction displayImages */
for(let choice of choices) {
    choice.addEventListener('change', () => {
        resetImages();
        let value = choice.getAttribute('value');
        if(value != 'all') {
            displayImages(value);
        }
    })
}

/*Affichage des photos correspondant à la catégorie en paramaètre */
function displayImages(value) {
    for(let image of images) {
        if(image.getAttribute('name') != value) {
            image.classList.add('undisplayed');
        }
    }
}


/*Remise a zero de l'affichage des images afin que le passage d'une categorie à l'autre soit possible*/
function resetImages() {
    for(let image of images) {    
        image.removeAttribute('class');
    }
}

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
