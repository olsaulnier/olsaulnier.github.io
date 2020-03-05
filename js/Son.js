function play(id)
{
	var son = document.querySelector('#'+id);
	
	if(son.paused)
	{
		son.play();
	}
	else
	{
		son.pause();
	}
}

