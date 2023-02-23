let a = document.getElementById("input")
let p = document.getElementById("output")

function ricorsione(a){
	if(a===0){
		return 0
	} else if(a===1) {
		return 1
	} else {
		
		return ricorsione(Math.floor(a/2)) + (a%2).toString()
	}
}
a.addEventListener("change", function(e){
	p.innerHTML=ricorsione(parseInt(e.currentTarget.value))
})