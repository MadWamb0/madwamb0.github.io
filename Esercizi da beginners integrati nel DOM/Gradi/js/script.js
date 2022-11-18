
let form = document.querySelector("#myForm")
let input = document.getElementById("user_input")

form.addEventListener("submit", function(event){
	event.preventDefault()
	let output = document.querySelector("#output")


	


	celsius = (input.value - 32) * 0.55

	document.write("<p>La temperatura in gradi celsius è di: ", celsius + "</p>")


	

	

})