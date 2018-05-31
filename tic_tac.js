//Squares filling
var a = document.querySelectorAll('td');
var counter = 0;

function myFunc(){
	if (this.textContent === '' && counter%2 === 0){
		this.textContent = 'X';
		this.style.color = 'red';
		counter++;
	}else if (this.textContent === '' && counter%2 === 1){
		this.textContent = 'O';
		this.style.color = 'blue';
		counter++;
	}
};

for (var x = 0; x < a.length; x++){
	a[x].addEventListener('click', myFunc);
};


//Restart button
var button_1 = document.querySelector('#butt');

function restart(){
	for (var x = 0; x < a.length; x++){
		a[x].textContent = '';
	}
	counter = 0;
	alert_counter = 0;
	dummy.setAttribute("style", "top: 840px");
	button_1.textContent = "Restart!";
};

button_1.addEventListener('click', restart)


//Score counter
var score_counter_red = 0;
var score_counter_blue = 0;
var red = document.getElementById('red');
var blue = document.getElementById('blue');

button_1.addEventListener('click',function(){
	red.textContent = 'Red: '+score_counter_red;
	blue.textContent = 'Blue: '+score_counter_blue;
})


//Win conditions
var b = document.getElementsByTagName("BODY")[0];
var dummy = document.getElementById("dummy");
var alert_counter = 0;

b.addEventListener('click', function(){
	if (a[0].textContent === 'X' && a[1].textContent === 'X' && a[2].textContent === 'X'){
		if (alert_counter === 0){alert('Red wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_red++;
	}else if (a[3].textContent === 'X' && a[4].textContent === 'X' && a[5].textContent === 'X'){
		if (alert_counter === 0){alert('Red wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_red++;
	}else if (a[6].textContent === 'X' && a[7].textContent === 'X' && a[8].textContent === 'X'){
		if (alert_counter === 0){alert('Red wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_red++;
	}else if (a[0].textContent === 'X' && a[3].textContent === 'X' && a[6].textContent === 'X'){
		if (alert_counter === 0){alert('Red wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_red++;
	}else if (a[1].textContent === 'X' && a[4].textContent === 'X' && a[7].textContent === 'X'){
		if (alert_counter === 0){alert('Red wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_red++;
	}else if (a[2].textContent === 'X' && a[5].textContent === 'X' && a[8].textContent === 'X'){
		if (alert_counter === 0){alert('Red wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_red++;
	}else if (a[0].textContent === 'X' && a[4].textContent === 'X' && a[8].textContent === 'X'){
		if (alert_counter === 0){alert('Red wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_red++;
	}else if (a[2].textContent === 'X' && a[4].textContent === 'X' && a[6].textContent === 'X'){
		if (alert_counter === 0){alert('Red wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_red++;
	}
});

b.addEventListener('click', function(){
	if (a[0].textContent === 'O' && a[1].textContent === 'O' && a[2].textContent === 'O'){
		if (alert_counter === 0){alert('Blue wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_blue++;
	}else if (a[3].textContent === 'O' && a[4].textContent === 'O' && a[5].textContent === 'O'){
		if (alert_counter === 0){alert('Blue wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_blue++;
	}else if (a[6].textContent === 'O' && a[7].textContent === 'O' && a[8].textContent === 'O'){
		if (alert_counter === 0){alert('Blue wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_blue++;
	}else if (a[0].textContent === 'O' && a[3].textContent === 'O' && a[6].textContent === 'O'){
		if (alert_counter === 0){alert('Blue wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_blue++;
	}else if (a[1].textContent === 'O' && a[4].textContent === 'O' && a[7].textContent === 'O'){
		if (alert_counter === 0){alert('Blue wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_blue++;
	}else if (a[2].textContent === 'O' && a[5].textContent === 'O' && a[8].textContent === 'O'){
		if (alert_counter === 0){alert('Blue wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_blue++;
	}else if (a[0].textContent === 'O' && a[4].textContent === 'O' && a[8].textContent === 'O'){
		if (alert_counter === 0){alert('Blue wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_blue++;
	}else if (a[2].textContent === 'O' && a[4].textContent === 'O' && a[6].textContent === 'O'){
		if (alert_counter === 0){alert('Blue wins!');alert_counter++};
		dummy.setAttribute("style", "top: 270px");
		button_1.textContent = "New Game!";
		score_counter_blue++;
	}
});
