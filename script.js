function deliveryOpt() {
	 
	

	
	node = document.getElementById('deliveryoptions'); //ref to elem

	if (ic_yes.checked) {
		node.style.display = 'block'; //visible
	} 
	else if (ic_no.checked) {
		node.style.display = 'none'; //hidden
	};

	
}




function wrapping(){

	node = document.getElementById('Wrapcolor'); //ref to elem

	if (gif.checked) {
		node.style.display = 'block'; //visible
	} 
	else if (ord.checked) {
		node.style.display = 'none'; //hidden
	};

}

