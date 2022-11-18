
let form = document.querySelector("#myForm")
let giglo = document.getElementById("user_input")

form.addEventListener("submit", function(event){
	event.preventDefault()
	let output = document.querySelector("#output")


	if(giglo.value.toLowerCase()=="gennaio" || giglo.value.toLowerCase()=="marzo" || giglo.value.toLowerCase()=="maggio" || giglo.value.toLowerCase()=="luglio" || giglo.value.toLowerCase()=="agosto" || giglo.value.toLowerCase()=="ottobre" || giglo.value.toLowerCase()=="dicembre")
	{
	    output.innerHTML= ("IL MESE E' DI 31 GIORNI")
	}
	else if(giglo.value.toLowerCase()=="aprile" || giglo.value.toLowerCase()=="giugno" || giglo.value.toLowerCase()=="settembre" || giglo.value.toLowerCase()=="novembre")
	{
	  output.innerHTML= ("IL MESE E' DI 30 GIORNI")
	}
	else if(giglo.value.toLowerCase()=="febbraio")
	{
	    output.innerHTML= ("IL MESE E' DI 28 GIORNI")
	}

})