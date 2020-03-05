/*Permet d'afficher la date de mise Ã  jour de la page.*/

date = new Date(document.lastModified);
mois = date.getMonth()+1;
jour = date.getDate();
annee = date.getFullYear();

if(jour < 10)
{
    jour = "0" + jour;
}
	
if(mois < 10)
{
    mois = "0" + mois;
}
	

maj = "Mise &agrave; jour le " + jour + "/" + mois + "/" + annee
