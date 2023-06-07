let domandeBox = document.querySelector(".domande")
let nRisposte = 0
let submit = document.querySelector(".submitButton")


let domandeJSON = [
		{
			domanda : "Ti piace la parmigiana?", risposte : 
			[
				{
					risposta : "La adoro <3", value : 15
				},
				
				{
					risposta : "NO.", value : 5
				},
				
				{
					risposta : "Non tanto...", value : 10
				},
			]
		},
		{
			domanda : "Cosa ne pensi delle cozze?", risposte : 
			[
				{
					risposta : "Fanno sbrattare", value : 5
				},
				{
					risposta : "Mezzo e mezzo", value : 10
				},
				{
					risposta : "I like to much", value : 15
				},
			]
		},
		{
			domanda : "Cosa vuol dire Peroni sudata?", risposte : 
			[
				{
					risposta : "Peroni sgasata", value : 10
				},
				{
					risposta : "Peroni ghiacciata", value : 15
				},
				{
					risposta : "Peroni calda", value : 5
				},
			]
		},
		{
			domanda : "Qual'è il posto più frequentato da chi beve la Peroni", risposte : 
			[
				{
					risposta : "Piazza Umberto", value : 5
				},
				{
					risposta : "Via Sparano", value : 10
				},
				{
					risposta : "El Chiringuito ", value : 15
				},
			]
		},
		//continua...
	]

function domandeRandom(){
	domandeJSON.sort(() => Math.random() -0.5)
	domandeJSON.forEach(domanda => domandeJSON.sort(() => Math.random() -0.5))
}



domandeRandom()

for (var i = 0; i <domandeJSON.length; i++) {
	//domanda
	let domanda = document.createElement("form")
	domanda.setAttribute("class", "answer-"+i)
	domandeBox.appendChild(domanda)
	//titolo 
	let titoloDomanda = document.createElement("h2")
	titoloDomanda.innerHTML = domandeJSON[i].domanda
	domanda.appendChild(titoloDomanda)
	//risposte
	for (var j = 0; j < domandeJSON[i].risposte.length; j++) {
		let contenitoreRisposte = document.createElement("div")
		contenitoreRisposte.className = "question-"+j
		domanda.appendChild(contenitoreRisposte)

		let input = document.createElement("input")
		nRisposte++
		input.type = "radio"
		input.id = "answer-"+nRisposte
		input.name = "answer-"+i
		input.value = domandeJSON[i].risposte[j].value
		contenitoreRisposte.appendChild(input)

		let risposta = document.createElement("label")
		risposta.htmlFor = "answer-"+nRisposte
		risposta.innerHTML = domandeJSON[i].risposte[j].risposta
		contenitoreRisposte.appendChild(risposta)
	}
}

submit.addEventListener("click",function(){
	let punteggio = 0
	document.querySelectorAll("input[type=radio]").forEach(e =>{
		if(e.checked){
			punteggio += parseInt(e.value)
		}
	})
	console.log(punteggio)
	if (punteggio<=30 && punteggio>=15){
		document.querySelector(".risultato").innerHTML = "Si nu trmon"

	}
	console.log(punteggio)
	if (punteggio<=45 && punteggio>30){
		document.querySelector(".risultato").innerHTML = "Si mezz e mezz"

	}
	console.log(punteggio)
	if (punteggio<=60 && punteggio>45){
		document.querySelector(".risultato").innerHTML = "Sei un bombone"

	}
})