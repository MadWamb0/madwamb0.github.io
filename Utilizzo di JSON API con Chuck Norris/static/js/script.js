let categories = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]


for(let i = 0;i<categories.length;i++){
            let opt = document.createElement("option")
            opt.innerHTML = categories[i].toUpperCase()
            document.querySelector("select").appendChild(opt)
        }
document.querySelector("#generator").addEventListener("click",function (e){
	e.preventDefault()

	let categoriaCorrente = document.querySelector("select").value
	let url = "https://api.chucknorris.io/jokes/random"
	if(categoriaCorrente){
		url += `?category=${categoriaCorrente.toLowerCase()}`
	}

	function thenCallback(response){
		if(response.status === 200){
			return response.json()
		}
	}

	function catchCallback(error){
		console.log(error)
		document.querySelector("#response").innerHTML = error
	}

	function finalCallback(data){
		console.log(data.value)
		document.querySelector("#response").innerHTML = data.value
	}


	fetch(url)
		.then(thenCallback)
		.then(finalCallback)
		.catch(catchCallback)


})


document.querySelector("#buttonCopy").addEventListener("click",function (e){

	let copyText = document.querySelector("#response")

	async function copy(){
		await navigator.clipboard.writeText(copyText.innerHTML)
	}

	copy()
		.then(function(){

			document.querySelector("#buttonCopy").innerHTML = "copiato"
			setTimeout(()=>{
				document.querySelector("#buttonCopy").innerHTML = "copia"
			},1500)

		})
		.catch(function(){
			console.log("copyError")
		})


})

