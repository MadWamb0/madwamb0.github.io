let x = false
let winners = false
let array = [
		[null,null,null],
		[null,null,null],
		[null,null,null]
	]
let count = 0
let winnerBox = document.getElementById("winnerBox")
let winner = document.getElementById("winner")


document.querySelectorAll("th").forEach(ciao=>ciao.addEventListener("click", (e)=>{
	//console.log(e.currentTarget.getAttribute("cell"),e.currentTarget.parentNode.getAttribute("row"))
	if(!winners) {


	let row = e.currentTarget.parentNode.getAttribute("row")
	let cell = e.currentTarget.getAttribute("cell")
	if(ciao.textContent == ""){

		if(!x){

			e.currentTarget.innerHTML="X"
			x=true
			array[row][cell]="X"
		
		}else{
		
			e.currentTarget.innerHTML="O"
			x=false
			array[row][cell]="O"

		}
		
		if (victory(array)=="X") {
			//alert("X ha vinto")
			winnerBox.style.display = "flex"
			winner.innerHTML="X ha vinto"
			winner.classList.add("animation")
			winners = true
		}else if(victory(array)=="O"){
			//alert("O ha vinto")
			winnerBox.style.display = "flex"
			winner.innerHTML="O ha vinto"
			winner.classList.add("animation")
			winners = true
		}else{
			count+=1
			if(count==9){
				//alert("Siete in pareggio")
				winnerBox.style.display = "flex"
				winner.innerHTML="Siete pari"
				winner.classList.add("animation")
				winners = true
			}
		}



	}else{
		alert("Questa casella è stata già giocata")
	}

	
}}

))





function victory(cells){
	for (let i = 0; i < 3; i++) {
        if (cells[i][0] === cells[i][1] && cells[i][1] === cells[i][2]) {
            return cells[i][0]
        }
    }

    for (let i = 0; i < 3; i++) {
        if (cells[0][i] === cells[1][i] && cells[1][i] === cells[2][i]) {
            return cells[0][i]
        }
    }

    if (cells[0][0] === cells[1][1] && cells[1][1] === cells[2][2]) {
        return cells[0][0]
    }
    if (cells[0][2] === cells[1][1] && cells[1][1] === cells[2][0]) {
        return cells[0][2]
    }
}















// il forEach è un for semplificato in cui vado a prendere tutti gli elementi di un array e per ogni elemento dell'array esegue un comando o una funzione
// 