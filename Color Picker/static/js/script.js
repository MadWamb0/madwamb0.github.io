let whiteBox = document.querySelectorAll(".whiteBox")
let borderClick = document.getElementById("span")


whiteBox.forEach(elem=>elem.addEventListener("click",()=>{
	document.querySelector("body").style.backgroundColor=elem.getAttribute("color")
	document.querySelector("body").style.transition="all 1s"
	let position = elem.getBoundingClientRect()
	span.style.display="block"
	span.style.top=`${position.top}px`
	span.style.left=`${position.left-1}px`
}))

