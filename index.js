console.log("script is connected");
 
//add event listern to a-frame loaded
document.addEventListener('DOMContentLoaded', function() {
	    let scene = document.querySelector('a-scene');
	    let splash = document.getElementsByClassName('parent-center')[0];
	scene.addEventListener('loaded', function (e) {
		        splash.style.display = 'none';
		    
	});
	
});
