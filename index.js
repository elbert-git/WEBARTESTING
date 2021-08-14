console.log("script is connected");
 
let marker = document.getElementById("markerseven");
 
//apparently const is important?
const model = document.getElementById("model");

//listen for marker found event
marker.addEventListener("markerFound", (e)=>{
	console.log("marker found");
	 
	//reset animations on marker found
	//set animation clip = 0 to nullify animations;
	model.setAttribute('animation-mixer', "clip:0; loop:once;")
	//then reset animations to correct animations
	model.setAttribute('animation-mixer', "clip:Spin; loop:once;")
});


//listen for marker lost event
marker.addEventListener("markerLost", (e)=>{
	console.log("marker lost");
});

