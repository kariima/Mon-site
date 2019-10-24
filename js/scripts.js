'./node_modules/scrollreveal/dist/scrollreveal.js'

//Affichage des bulles de dialogue

$(window).on('load', function () {
    window.sr = ScrollReveal();
    sr.reveal('.message-1', { delay: 1000 });
    sr.reveal('.message-1 .text', { delay: 1500 });

    sr.reveal('.message-2', { delay: 1500 });
    sr.reveal('.message-2 .text-2', { delay: 2000 });

    sr.reveal('.message-3', { delay: 2500 });
    sr.reveal('.message-3 .text-3', { delay: 3000 });

});



/* let letexte = '';
let montimer;
let total = 0;
function defiler() {
    lelien = document.getElementById('para');
    if (total < letexte.length) {
        courant = lelien.innerHTML.substring(0, lelien.innerHTML.length);
        courant += letexte.charAt(total) + "";
        lelien.innerHTML = courant;
    }
    else {
        lelien.innerHTML = "";
        total = -1;
    }
    total++;
    setTimeout("defiler()", 100);
}
window.onload = function () {
    defiler();
}
*/


$(document).ready(function() {

//Défilement quand on clique sur les ancres

    // Ajouter un défilement régulier à tous les liens
    $("a").on('click', function (e) {

        // On vérifie que this.hash contient une valeur avant de lancer la fonction
        if (this.hash !== "") {
            // Stop l'évenement
            e.preventDefault();

            // Stocker le # dans une variable
            let hash = this.hash;

            // On utilise la methode animate() de jQuery pour gérer le défilement
            //La valeur 1000 est le temps en milliseconde de transition àa chaque click sur une ancre
            $('html, body').animate({
                scrollTop: $(hash).offset().top //.offset() permet le repositionnement par rapport au DOM
            }, 1000, function () {

                // Ajoute le nom du # à l'URL
                window.location.hash = hash;
            });
        } // End if
    });

    //carousel avec slick

    $(".autoplay").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    });

    //Bouton scrollTop

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    // scroll-to-top animation
    
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    
})










