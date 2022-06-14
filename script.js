function handleMotionEvent(event) {

    xAxis = document.getElementById('xAxis').innerHTML = event.accelerationIncludingGravity.x;
	yAxis = document.getElementById('yAxis').innerHTML = event.accelerationIncludingGravity.y;
	zAxis = document.getElementById('zAxis').innerHTML = event.accelerationIncludingGravity.z;

}

window.addEventListener("devicemotion", handleMotionEvent, true);
