function tos_lang(lang) {
	var tos = document.getElementById("tos");
	if (lang == 'fr')
	{
		tos.src = "tosfr.html";
		tos.height = 3500;
	}
	else if (lang == 'en')
	{
		tos.src = "tosen.html";
		tos.height = 3300;
	}
}

function pricelist() {
	var tos = document.getElementById("tosdiv");
	var pl = document.getElementById("pricelist");
	pl.hidden = !pl.hidden;
	tos.hidden = !tos.hidden;
	if (tos.hidden)
	{
		document.getElementById("plbtn").innerHTML = "TOS";
	}
	else
	{
	document.getElementById("plbtn").innerHTML = "Pricelist";
	}
}
