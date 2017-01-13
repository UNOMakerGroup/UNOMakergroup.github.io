
var x = 0;

function searchDrop(){
	
	if (x == 0) {
		document.getElementById('searchbox').style.height = "50px";
		x = 1;
	}
	else {
		document.getElementById('searchbox').style.height = "0px";
		x = 0;
	}
}