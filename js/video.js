var video;
video = document.querySelector(".video");
const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;	
	if (!!isReduced) {
		// DON'T use an amination here!
		video.pause();
	} else {
		// DO use an animation here!
		video.play();
	}
});

function refreshPage(){
    window.location.reload();
} 

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

window.addEventListener("dblclick", function() {
	console.log("Danger Zone");
	this.document.querySelector("header").classList.add("dgr");
	// change the words in the h1 within the header to say "Danger Zone!"
	this.document.querySelector("h1").innerHTML = "Danger Zone!";
});


