
document.querySelector("#generator").addEventListener("click",function (e){
	e.preventDefault()


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


	fetch("https://api.chucknorris.io/jokes/random")
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