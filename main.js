
var section = document.getElementById('section');

//bouton de départ qui fait apparaitre 
var buttonjs = document.getElementById('buttonjs'); 

//input barre de recherche
var input = document.getElementById('search');

//bouton de recherche  
var buttonsearch = document.getElementById('buttonsearch');

var linkgoogle ="https://www.google.fr/#q=";

// deuxieme bouton de recherche
var buttonsearchv = document.getElementById('buttonsearchv');

section.style.display='none';


function redirect(){
	window.location.replace(linkgoogle+input.value); 
}

buttonjs.onclick = function() {
    section.style.display='block';
    buttonjs.style.display='none';
}


input.onkeydown=function(event){
	if (event.keyCode == 13) {redirect();}
}

buttonsearch.onclick=redirect;
	
buttonsearchv.onclick =redirect;

setTimeout(function()
{
   alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");

}, 10000);

//var research = document.getElementById('search').value;