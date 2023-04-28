let button = document.querySelector("#submit")
let data = []

button.addEventListener("click", function (e){

	e.preventDefault()

	let nome = document.querySelector("#name").value
	let cognome = document.querySelector("#surname").value
	let eta = document.querySelector("#eta").value
	let sesso = document.querySelector("#sesso").value

	let users = {
		"name" : nome,
		"cognome" : cognome,
		"eta" : eta,
		"sesso" : sesso
	}

	data.push(users)

	let stampa = document.querySelector("#out")

	data.forEach(i=>{
		stampa.innerHTML += JSON.stringify(i)
	})

	data.pop(users)
})