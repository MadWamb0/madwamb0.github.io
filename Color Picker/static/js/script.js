let whiteBox = document.querySelectorAll(".whiteBox")
let borderClick = document.getElementById("span")


whiteBox.forEach(elem=>elem.addEventListener("click",()=>{
	whiteBox.forEach(e=>e.style.border = "1px black solid")
	document.querySelector("body").style.backgroundColor=elem.getAttribute("color")
	document.querySelector("body").style.transition="all 1s"
	element.style.border = "3px black solid"
}))

