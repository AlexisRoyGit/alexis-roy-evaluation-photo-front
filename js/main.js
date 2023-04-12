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

/*Declenchement du deploiement et de la fermeture du menu latéral au clic de l'utilisateur*/
open.addEventListener('click', openMobileNav);
close.addEventListener('click', closeMobileNav);