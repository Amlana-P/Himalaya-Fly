function runGame(){
	window.addEventListener("devicemotion", accelerometerUpdate, true);

	function accelerometerUpdate(e) {
		console.log(e);
		X = Math.round(e.accelerationIncludingGravity.x*100)/100;
		Y = Math.round(e.accelerationIncludingGravity.y*100)/100;
		Z = Math.round(e.accelerationIncludingGravity.z*100)/100;

		document.getElementById('xAxis').innerHTML = X + ' m/s2';
		document.getElementById('yAxis').innerHTML = Y + ' m/s2';
		document.getElementById('zAxis').innerHTML = Z + ' m/s2';

		xyz = [[]];
		i = 1;
		addElementFunction = setInterval((x, y, z) => {
			xyz.push([x, y, z]);
		}, 50, X, Y, Z);

		setTimeout(() => {
			clearInterval(addElementFunction);
		}, 1000);	
		

		myList = document.createElement('ul');
		listItem = document.createElement('li');
		myString = xyz[5].toString();
		listItem.textContent = myString;
		myList.appendChild(listItem);
		app = document.querySelector('#xyzVals');
		app.appendChild(myList);
	}

};

async function runTimer(){

	if (window.DeviceMotionEvent == null) {
		//No accelerometer is present. 
		console.log(window.DeviceMotionEvent);
		alert("No accelerometer found. You can't play this game.");
	}

	count = -4;
	const timer = document.getElementById('timer');
	const updateTimer = setInterval(() =>{
		timer.innerHTML = count;
		count++;

		switch(count){
			case -3:
				alert("Get Ready...");
				break;
			case -2:
				alert("Set...");
				break;
			case -1:
				alert("Throw!");
				break;
		}

		if(count == 0){
			clearInterval(updateTimer);
			timer.innerHTML = "Shoot!";
			runGame();
		}
	}, 1000);

};