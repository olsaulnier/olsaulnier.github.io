function date_heure(id)
{
	/*Fonction qui permet d'afficher l'heure et la date
	du jour dans la barre "Nav" du site.*/

	date = new Date();
	annee_entiere = date.getFullYear();
	mois = date.getMonth();
	jour = date.getDay();
	
	mois_tab = new Array("Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre");
	jour_tab = new Array("Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi");
	
	heures = date.getHours();
	minutes = date.getMinutes();
	secondes = date.getSeconds();
	day=date.getDate();
	
	if(heures < 10)
    {
        heures = "0" + heures;
    }
    
    if(minutes < 10)
    {
    minutes = "0" + minutes;
    }

    if(secondes < 10)
    {
    secondes = "0" + secondes;
    }
    
    if(day < 10)
    {
    day = "0" + day;
    }
	
	heure = jour_tab[jour]+' '+day+' '+mois_tab[mois]+' '+annee_entiere+' <br/> '+heures+':'+minutes+':'+secondes+' <br/> ';
	document.getElementById(id).innerHTML = heure;
    setTimeout('date_heure("'+id+'");','1000');
    return true;
}

