var arrayColorTime = ['#D7D8FF','#D7A6FF','#A0A6FF','#7AFFBF','#7A7DBF','#DCDF6E'];

function getRandomColor(){
	return rand = Math.floor(0 + Math.random() * (arrayColorTime.length + 1 - 0));
}

var timerId = setTimeout(function tick(){
	var today = new Date;
	var hour = document.getElementsByClassName('hour')[0];
	var minutes = document.getElementsByClassName('minutes')[0];
	var seconds = document.getElementsByClassName('seconds')[0];
	hour.innerHTML = today.getHours();
	if(hour.innerHTML.length == 1){
	  hour.innerHTML = '0' + today.gethours();
	}
	minutes.innerHTML = today.getMinutes();
	if(minutes.innerHTML.length == 1){
	  minutes.innerHTML = '0' + today.getMinutes();
	}
	seconds.innerHTML = today.getSeconds();
	if(seconds.innerHTML.length == 1){
	  seconds.innerHTML = '0' + today.getSeconds();
	}
	document.getElementsByClassName('wrapperClock')[0].style.backgroundColor = arrayColorTime[getRandomColor()];
	timerId = setTimeout(tick, 1000); }
, 0);