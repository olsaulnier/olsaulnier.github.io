var tab = new Array("DNA.jpg", "adn1.jpg", "adn2.jpg", "adn3.jpg", "adn4.jpg");
var compteur = 0;
var chemin="./img/"

function changerImages() {
	document.images["image"].src = chemin+tab[compteur];
	compteur++;
	if (compteur == tab.length) compteur = 0;
	setTimeout("changerImages()", 3000);
}