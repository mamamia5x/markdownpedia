function darkMode(){



    var elemBody = document.body;
    elemBody.classList.toggle('dark-body'); 

    var mark = document.getElementById('markdown');
    mark.classList.toggle('markdown-dark');

    var card = document.getElementsByClassName("card");
    for(var i=0; i<card.length; i++){
        card[i].classList.toggle('card-dark');
    }

    var myNav = document.getElementById('myNav');
    myNav.classList.toggle('nav-dark');

    var search = document.getElementById('searchbox');
    search.classList.toggle('searchbox-dark');

}