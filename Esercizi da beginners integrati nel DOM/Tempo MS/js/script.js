
let form = document.querySelector("#myForm")
let output = document.querySelector("#output")
let ore = document.getElementById("ore")
let minuti = document.getElementById("minuti")
form.addEventListener("submit", function(event){
	event.preventDefault()
	

	tempoMS = (parseInt(ore.value)*3600000)+(parseInt(minuti.value)*60000)
	console.log(ore,minuti)
	output.innerHTML = ("Il tempo in ms è "+ tempoMS)

})