
// Mettre une ecoute de click sur les elements item
// Supprimer l'element this.item sur le clic
for(var i=0; i<document.getElementsByClassName('item').length; i++){
    document.getElementsByClassName("item")[i].addEventListener('click',
    function(){
        this.remove();
    }
    );
}

// Mettre en place un formulaire contenant : 
// Titre, Catégorie, Date
// A la validation du formulaire --> Ajouter l'élément dans le DOM








// Mettre en place une mécanique permettant dediter et modifier votre tache




