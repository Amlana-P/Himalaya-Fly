// function handleMotionEvent(event) {

//  xAxis = document.getElementById('xAxis').innerHTML = event.accelerationIncludingGravity.x;
// 	yAxis = document.getElementById('yAxis').innerHTML = event.accelerationIncludingGravity.y;
// 	zAxis = document.getElementById('zAxis').innerHTML = event.accelerationIncludingGravity.z;
	
// 	console.log("Amlana");

// }

// window.addEventListener("devicemotion", handleMotionEvent, true);
function requestOrientationPermission(){
	DeviceOrientationEvent.requestPermission()
	.then(response => {
		if (response == 'granted') {
			window.addEventListener('deviceorientation', (event) => {
				 	xAxis = document.getElementById('xAxis').innerHTML = event.accelerationIncludingGravity.x;
					yAxis = document.getElementById('yAxis').innerHTML = event.accelerationIncludingGravity.y;
					zAxis = document.getElementById('zAxis').innerHTML = event.accelerationIncludingGravity.z;
			})
		}
	})
	.catch(console.error)
}