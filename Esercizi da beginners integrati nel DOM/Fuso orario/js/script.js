
let form = document.querySelector("#myForm")
let ore = document.getElementById("ore")
let minuti = document.getElementById("minuti")

form.addEventListener("submit", function(event){
	event.preventDefault()
	let output = document.querySelector("#output")

	
	let newYork = parseInt(ore.value) - 6

	if(newYork>23){
		newYork = newYork - 24
	}

	document.write("<p>L'orario a NewYork equivale alle  ", newYork + "h e " + minuti.value + "min</p>")



	let tokyo = parseInt(ore.value) + 7

	if (tokyo>23) {
		tokyo = tokyo - 24
	}

	document.write("<p>L'orario a Tokyo equivale alle  ", tokyo + "h e " + minuti.value + "min</p>")



	let mosca = parseInt(ore.value) + 1

	if(mosca>23){
		mosca = mosca -24
	}

	document.write("<p>L'orario a Mosca equivale alle  ", mosca + "h e " + minuti.value + "min</p>")

		

	

})