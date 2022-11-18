
let form = document.querySelector("#myForm")
let input = document.getElementById("user_input")

form.addEventListener("submit", function(event){
	event.preventDefault()
	let output = document.querySelector("#output")


	

	if (input.value>10) {
		output.innerHTML = "Il voto può essere al massimo 10."
	} else {

		if (input.value<6) {
			output.innerHTML = ("Insufficiente")
		} else if (input.value<=6.9) {
			output.innerHTML = ("Sufficiente")
		} else if (input.value<=7.9){
			output.innerHTML = ("Discreto")
		} else if (input.value>=8) {
			output.innerHTML = ("Buono")
		}
	}

	

	

})