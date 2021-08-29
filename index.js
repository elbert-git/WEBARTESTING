console.log("script is connected");
 
//get objects
const marker7 = document.getElementById("marker7"); // get marker for page 7
const hologramModel = document.getElementById("hologramModel"); // get hologram modell

//listen for marker found event
marker7.addEventListener("markerFound", (e)=>{
	//if marker 7 found make hologramModel scale 0 0 0
	hologramModel.setAttribute('scale', {x: 0, y: 0, z: 0});
	console.log('found');
});

//listen for marker lost event
marker7.addEventListener("markerLost", (e)=>{
	//if marker 7 is lost make hologramModel scale 3 3 3
	hologramModel.setAttribute('scale', {x: 3, y: 3, z: 3});
	console.log('lost');
});

 
//add event listern to a-frame loaded
document.addEventListener('DOMContentLoaded', function() {
	    let scene = document.querySelector('a-scene');
	    let splash = document.getElementsByClassName('parent-center')[0];
	scene.addEventListener('loaded', function (e) {
		        splash.style.display = 'none';
		    
	});
	
});
