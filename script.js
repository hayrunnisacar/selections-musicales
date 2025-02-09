//---------------------------------SEANCE 1/2-----------------------------------------
//Je vérifie mes musiques avant tout
// console.log(musiques);

// Q4 Je parcours le tableau pour afficher dans la console "Musique :" suivi du contenu de chaque case l'une après l'autre
// musiques.forEach(function afficheMusique(musique){
//     console.log("Musique : " + musique);
// })

// Q7 Je créée une variable contenant un tableau descriptionsMusiques contenat la liste des textes de description des musiques que j'ai choisies
// var descriptionsMusiques = [
//     "Cette musique sortie le 23 février 2019 par Simge, une chanteuse très connu en Turquie, a vu son succès grâce à Mauro Emanuel Icardi en 2023. En effet, le footballeur a comencé a partager des vidéos de lui en chantant cette musique. Ainsi, l'effet domino s'est produit. Je connaissais cette musique depuis un bon moment mais je ne l'aimais pas car ce n'est pas réellement mon style… Mais grâce à Icardi je suis une des premières à la chanter en criant. C'est aussi connu pour la manière de la chanter. En effet, nous imitons tous Icardi.", 
//     "Cette musique je l'aime énormément car elle représete mon enfance. C'est une des premières musiques que j'ai appris de Galatasaray. C'est aussi une musique emblématique. Wesley Sneijder ou bien Younes Belhanda avaient fait leur entrée dans le stade avec cette musique en XXXX et en XXXX lors de la cérémonie de la coupe de Turquie.", 
//     "Cette musique est la première musique que j'ai appris de Galatsaray. J'avais seulement 4 ans.",
//     "lorem ipsum",
//     "lorem ipsum"]

// Q6 Je créé une variable numCase et je l'initialise à 0
// var numCase = 0;

// Q5 + Q8 J'ajoute pour chaque titre de musique du tableau musiques, un bloc de code HTML dédié à la musique dans la page avec la description et la valeur du tableau qui correspond à la musique
// var referencesMusiques = document.querySelector('.liste-musiques');
// musiques.forEach(function(musique){
//     //J'ajoute les blocs HTML avec les descriptions
//     // console.log(referencesMusiques.innerHTML);
//     referencesMusiques.innerHTML = referencesMusiques.innerHTML+'<section><h2>' + musique+ '</h2><p>' + descriptionsMusiques[numCase] + '</p></section>';
//     // Q6 La valeur de numCase correpond toujours au numéro de la case du tableau que je vais utiliser
//     console.log("Numéro de case : " + numCase + "   Musique : " + musique);
//         numCase = numCase + 1;
//         //ou numCase++;
//     })


//Je me suis faites aider par ma soeur a partir de cette question dès que je bloquais et j'ai aussi demandé le paramètre que je devais utiliser dans la fonction ligne 76 à chatgpt


//Q10 + Q11 Je remplace mon code fait lors de la première étape pour utiliser un seul tableau data qui va afficher mes musiques, leur description, une url pour écouter la musique entièrement, les droits de propriété et une image
// var referencesMusiques = document.querySelector('.liste-musiques');
//je parcours les éléments du tableau
// data.forEach(function(item){
//     //J'ajoute ces deux blocs dans la page html
//     referencesMusiques.innerHTML +=
        // "<section>" + 
        // "<h2>" + item.titre+ "</h2>" + 
        // "<p>" + item.descriptionMusicale + "</p>" + 
        // "<p><a href='" + item.urlMusique + "' target='_blank'>Écouter l'extrait audio</a></p>" +
        // "<p>" + item.infosProprieteIntellectuelle + "</p>" + 
        // "<img src='" + item.image +"'/>" +
        // "</section>";
// });

//Q13 + Q14 Je stocke mes données dans un fichier data.json et j'utilise fetch pour afficher ces infos. Puis, je complète mon code en créant la variable codeDuBloc contenant la structure du code HTML sous forme de chaînes de caractères. Je met en commentaire la partie qui concernait la question 13.
//J'ai repris le code du fichier de consignes au début
fetch('data.json').then(function(response) {
    response.json().then(function(data){
    console.log(data);
        var referencesMusiques = document.querySelector('.liste-musiques');

        //Mes images ne chargeaient pas. J'ai appris que je devais mettre des '' pour les afficher car c'est du html initialement
        var codeDuBloc =
            "<section class='bloc'>"+ 
            "<h2>{{titre}}</h2>"+
                "<div class='image-et-description'>" +
                    "<a href={{url}} target='_blank' aria-label='Écouter le son entièrement'>" +
                    "<img src= '{{image}}' alt='{{alt}}' class='images'/>" +
                    "</a>" +
                    "<p class='description'>{{description}}</p>" +
                "</div>" +
                "<br>" +
                "<div class='les-3-en-bas'>" +
                    "<audio controls class='extraits'><source src= '{{extrait}}' type='audio/mp3'></audio>" +
                    "<button class='play' aria-label='Écouter l'extrait'>⏵</button>" +
                    // "<p class='url'><a href={{url}} target='_blank'>Écouter l'extrait audio👈🏻</a></p>" +
                    "<p class='infos'>{{infos}}</p>" +
                "</div>" +
            "</section>";

        data.forEach(function(item){
            //  J'ajoute ces deux blocs dans la page html
            // referencesMusiques.innerHTML +=
                // "<section>" + 
                // "<h2>" + item.titre+ "</h2>" + 
                // "<p>" + item.descriptionMusicale + "</p>" + 
                // "<p><a href='" + item.urlMusique + "' target='_blank'>Écouter l'extrait audio</a></p>" +
                // "<p>" + item.infosProprieteIntellectuelle + "</p>" + 
                // "<img src='" + item.image +"'/>" +
                // "</section>";

            // je créé une varible qui contient le code remplacé
            var contenu = codeDuBloc
            .replace("{{titre}}",item.titre)
            .replace("{{image}}",item.image)
            .replace("{{alt}}",item.alt)
            .replace("{{description}}",item.descriptionMusicale)
            .replace("{{extrait}}",item.extrait)
            .replace("{{url}}",item.urlMusique)
            .replace("{{infos}}",item.infosProprieteIntellectuelle);

            referencesMusiques.innerHTML+=contenu;
        });

//Je fais les bouttons pause/play
        //Je sélectionne les blocs
        var blocDeMusique = document.querySelectorAll('.bloc');

        blocDeMusique.forEach(function(bloc){
            var play = bloc.querySelector('.play');
            var audio = bloc.querySelector('.extraits');

            play.addEventListener("click", function(){
                console.log(audio.paused);

                if (audio.paused){
                    console.log("enPause");
                    audio.play();
                    play.innerHTML = '⏵';
                } 
                else{
                    console.log("enCours");
                    audio.pause();
                    play.innerHTML = '⏸';
                }
            });
        });
    });
});





// ----------------------------------SEANCE 3/4---------------------------------------
//Q4 Je créée une variable play qui lance la lecture du fichier audio
// var play = document.querySelector('.play');
//     play.addEventListener("click", function() {
//     //la console me renvoie click si le bouton est cliqué
//     console.log("click");
//     //l'audio est joué
//     document.querySelector('audio').play();
// });

// //Q5 je créée une variable pause qui met la musique en pause
// var play = document.querySelector('.pause');
// play.addEventListener("click", function(){
//     console.log("click");
//     document.querySelector('audio').pause();
// })

//Q6 J'utilise un seul bouton soit utilisé à la fois pour les fonctionnalités pause et lecture : le symbole pause remplace, au clic sur le bouton, le symbole lecture, et vice-versa.
//J'ai adapté mon code et mis un peu plus haut
// var play = document.querySelectorAll('.play');

// play.addEventListener("click", function(){
//     console.log(document.querySelector('audio').paused);
//     if (document.querySelector('audio').paused){
//         console.log("enPause");
//         document.querySelector('audio').play();
//         play.innerHTML = '⏵';
//     } 
//     else{
//         console.log("enCours");
//         document.querySelector('audio').pause();
//         play.innerHTML = '⏸';
//     }
// })




// ----------------------------------SEANCE 5/6---------------------------------------
//Q2 J'écris dans la console un sélécteur Javascript de l'élément ayant pour identifiant titre 
// document.querySelector("#titre");


//Q2 J'ajoute .value pour afficher la valeur d'entrée dans le champ du formulaire
//  var valeurTitre = document.querySelector("#titre").value;


 //Q3 J'ajoute un détecteur du fait qu'une touche du clavier a été relâchée sur ce champ ayant pour identifiant titre
// document.querySelector("#titre").addEventListener('keyup', function(){
//     console.log("Une touche du clavier a été relâchée");
//  })


 //Q4 Je complète la question précédente pour afficher dans la console e qui a été rempli par l'internaute
//  document.querySelector("#titre").addEventListener('keyup', function(){
//     var valeurTitre = document.querySelector("#titre").value;
//     console.log("Une touche du clavier a été relâchée : " , valeurTitre);
//  })


 //Q5 Je complète la question précédente pour remplir un élément de ma page avec le contenu de ce champs titre modifié par l'internaute et pour le champ ayant pour identifiant description
 //Je cible les éléments html
var mail = document.querySelector("#email");
var titre = document.querySelector("#titre");
var description = document.querySelector("#description");
var urlAudio = document.querySelector("#urlAudio");

var nouvelEmail = document.querySelector("#nouvel-email");
var nouveauTitre = document.querySelector("#nouveau-titre");
var nouvelleDescription = document.querySelector("#nouvelle-description");
var nouvelAudio = document.querySelector("#nouvel-audio");

mail.addEventListener('keyup', function(){
    var valeurEmail = mail.value;
    console.log("Une touche du clavier a été relâchée (Mail) : ", valeurEmail);
    nouvelEmail.innerHTML = "Email : " + valeurEmail;
 });

titre.addEventListener('keyup', function(){
    var valeurTitre = titre.value;
    console.log("Une touche du clavier a été relâchée (Titre) : ", valeurTitre);
    nouveauTitre.innerHTML = "Titre : " + valeurTitre;
 });

 description.addEventListener('keyup', function(){
    var valeurDescription = description.value;
    console.log("Une touche du clavier a été relâchée (Description) : ", valeurDescription);
    nouvelleDescription.innerHTML = "Description : " + valeurDescription;
 });

 urlAudio.addEventListener('keyup', function(){
    var valeurAudio = urlAudio.value;
    console.log("Une touche du clavier a été relâchée (Audio) : ", valeurAudio);
    nouvelAudio.innerHTML = "Url : " + valeurAudio;
 });

 //Q6
 //https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=acar

 //Q7
 // https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=acar&courriel=philippe.gambette@univ-eiffel.fr&message=Je%20n’ai%20aucune%20suggestion%20de%20musique%20mais%20je%20vous%20félicite%20pour%20votre%20site%20web%20de%20sélection%20musicale%20que%20je%20trouve%20très%20réussi

 //Q8 J'ai ajouté un boutton d'envoi en html au lieu d'un input type submit et j'ai créé une fonction pour envoyer le formulaire ici
function envoyerFormulaire(){
    document.querySelector('form').submit();
}
//Q9 Je fais un code pouer que quand le bouton envoyer est cliqué, l'URL de la question 7 s'affiche dans la console. 
//Q10 Je modifie la réponse à la question 9  pour afficher dans la console l'URL modifiée, avec les données de l'internaute
//Q11 Je modifie mon code pour appeler l'API en utilisant l'URL que j'affiche dans la console du navigateur à la place de la varibale urlVisitee

 //Je stocke mon bouton envoyer dans une variable
 var boutonEnvoyer = document.querySelector('#envoyer');

 //Je stocke mon URL de la question 7 dans une variable
 var urlEnvoyer = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=acar&courriel=philippe.gambette@univ-eiffel.fr&message=Je%20n’ai%20aucune%20suggestion%20de%20musique%20mais%20je%20vous%20félicite%20pour%20votre%20site%20web%20de%20sélection%20musicale%20que%20je%20trouve%20très%20réussi";

 //Je créée une fonction pour afficher la variable urlEnvoyer dans la console quand la variable boutonEnvoyer est cliqué
 boutonEnvoyer.addEventListener('click', function(){

    var urlModifiee = 
    "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json" +
    "&login=acar" +
    "&courriel=" + mail.value +
    "&message=Titre : "  + titre.value + " ; Description : " + description.value + " ; Adresse du fichier audio : " + urlAudio.value;

    console.log("URL de l'internaute : " , urlModifiee);

//J'utilise le code que vous avez donné en modifiant avec la nouvelle URL comme demandé
    fetch(urlModifiee)
        .then(function(response) {
        response.json()
        
        .then(function(data){
        console.log("Réponse reçue : ");
        alert("Formulaire envoyé ! ");
        console.log(data);
        })
        })
 })