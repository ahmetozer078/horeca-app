const BIERPRIJS = 2.6;
const FRISPRIJS = 2.5;
const WIJNPRIJS = 3.5;
const BITTERBALLEN8 = 5.5;
const BITTERBALLEN16 = 10.;
//dit zijn de prijzen van de dingen die je kuntbestellen^ ik heb ze constant gedaan want de prijzen blijven zo.
var aantalbier = 0;
var aantalfris = 0;
var aantalwijn = 0;
var bitterballen8st = 0;
var bitterballen16st = 0;
//hier geef ik aan dat elke item die je kunt bestellen begint met een waarde van 0, zodat de berekening van de totale prijs geod gaat.
function bestelling(){
	var eerstevraag = prompt("wat wilt u bestellen bier,fris,snacks of wijn?")
if (eerstevraag == "bier") {
	aantalbier += Number(prompt("hoeveel biertjes wilt u bestellen?"))
}

else if (eerstevraag == "fris") {
	aantalfris += Number(prompt("hoeveel frisdrankjes wilt u bestellen?"))
}
else if (eerstevraag == "snacks") {
	var	hoeveelballen = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?")

if (hoeveelballen == "8") {
	bitterballen8st += Number(prompt("Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?"))
}
else if (hoeveelballen == "16") {
	bitterballen16st += Number(prompt("Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?"))
}
else{
	alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.")	
	window.location.reload();
//hier geef ik aandat ze een keuze moeten makken tussen 8 en 16 en als ze dat nietdoen beginnen ze helemaal bij stap 1.
}
}
else if (eerstevraag == "wijn") {
	aantalwijn += Number(prompt("hoeveel glaasjes wijn wilt u bestellen?"))
}
else{
	alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
	window.location.reload();
}
 totaalbierprijs = aantalbier * 2.6;
 totaalfrisprijs = aantalfris* 2.5;
 totaalwijnprijs = aantalwijn* 3.5;
  bitterbal8totaal = bitterballen8st * 5.5;
 bitterbal16totaal = bitterballen16st * 10;
 allestotaal = totaalbierprijs+totaalfrisprijs+totaalwijnprijs+bitterbal8totaal+bitterbal16totaal
//en hier geef ik aan hoe de prijzen berekend moeten worden.
var confirm = prompt("wilt u nog wat bestellen");
if (confirm == "ja") {
	bestelling()
}
else if (confirm =="nee"){
	var uit = document.getElementById('uitkomst')
	uit.innerText = "uw totale prijs is " +allestotaal+ " euro."
	
}

if (eerstevraag == "bier") {
		var lijstje = document.getElementById('lijst')
		lijstje.innerText = "u heeft: " +aantalbier+ " biertjes besteld.";
}

if (eerstevraag == "fris") {
			var lijstje2 = document.getElementById('lijst2')
			lijstje2.innerText = "u heeft: " +aantalfris+ " frisdrankjes besteld.";
		}

if (hoeveelballen == "8") {
	var lijstje3 = document.getElementById('lijst3')
	lijstje3.innerText = "u heeft: " +bitterballen8st+ " bitterbalschalen van 8 stuks besteld besteld.";
}
if (hoeveelballen == "16") {
	var lijstje4 = document.getElementById('lijst4')
	lijstje4.innerText = "u heeft: " +bitterballen16st+ " bitterbalschalen van 16 stuks besteld.";
}
if (eerstevraag == "wijn") {
	var lijstje5 = document.getElementById('lijst5')
	lijstje5.innerText = "u heeft: " +aantalwijn+ " glazen wijn besteld.";
}


}