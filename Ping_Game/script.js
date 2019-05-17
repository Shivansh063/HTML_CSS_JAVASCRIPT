var player1_globalscore,player1_currentscore;
var player2_globalscore,player2_currentscore;
var gamePlaying = true;
player1_globalscore=0;player1_currentscore=0;
player1_globalscore=0;player1_currentscore=0;

var active_player=1;
var dice=0;

document.querySelector('.btn-roll').addEventListener('click',function(){
	if(gamePlaying){
		dice = Math.floor(Math.random()*6+1);
		document.querySelector('.dice').style.display= 'block';
		document.querySelector('.dice').src='images/'+'dice-'+dice+'.png';
		if(dice !==1 && (player1_globalscore <100 && player2_globalscore < 100)){
			if(active_player === 1 ){
				player1_currentscore = dice + player1_currentscore ;
				document.querySelector('#current-0').textContent = player1_currentscore;}
			else{
				player2_currentscore = dice + player2_currentscore ;
				document.querySelector('#current-1').textContent = player2_currentscore;}}
		if(dice == 1 ){
			if(active_player === 1){
				document.querySelector('#current-0').textContent=player1_currentscore=0;
				document.querySelector('.player-0-panel').classList.remove('active');
				document.querySelector('.player-1-panel').classList.add('active');
				active_player = 2;}
			else{active_player=1;
				document.querySelector('.player-1-panel').classList.remove('active');
				document.querySelector('.player-0-panel').classList.add('active');
				document.querySelector('#current-1').textContent=player2_currentscore=0;}}}});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(active_player === 1 && gamePlaying){
		player1_globalscore =player1_globalscore + player1_currentscore;
		document.querySelector('#score-0').textContent=player1_globalscore;
		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.add('active');
		if(player1_globalscore >=100){
			document.querySelector('#name-0').textContent = 'Winner!';
			document.querySelector('.player-1-panel').classList.remove('active');
			gamePlaying=false;
			document.querySelector('.dice').style.display= 'none';}
		player1_currentscore=0;
		active_player = 2;}
	else{
		player2_globalscore =player2_globalscore + player2_currentscore;
		document.querySelector('#score-1').textContent=player2_globalscore;
		document.querySelector('.player-1-panel').classList.remove('active');
		document.querySelector('.player-0-panel').classList.remove('active');
		if(player2_globalscore >=100){document.querySelector('#name-1').textContent = 'Winner!';
			document.querySelector('.player-1-panel').classList.remove('active');
			gamePlaying=false;
			document.querySelector('.dice').style.display= 'none';}
		player2_currentscore=0;
		active_player = 1;}});


document.querySelector('.btn-new').addEventListener('click',function(){
	player1_globalscore=0;player1_currentscore=0;
	player2_globalscore=0;player2_currentscore=0;
	document.querySelector('#score-1').textContent=0;
	document.querySelector('#score-0').textContent=0;
	document.querySelector('#current-0').textContent=0;
	document.querySelector('#current-1').textContent = 0;
	gamePlaying=true;
	document.querySelector('#name-0').textContent='Player 1';
	document.querySelector('#name-1').textContent='Player 2';
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.dice').style.display= 'none';});