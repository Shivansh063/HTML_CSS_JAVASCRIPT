var Arr = ["Shivansh", "Soumil", "Samyak"]
var col = 'True'
var incer = 0
var letter

while(col){
var answer = prompt('Please select an action : Add,Pop,Display,Quit');

if(answer == 'Add'){
	incer = 0;
	var name = prompt('Enter Name you want to add ');
	for(letter of Arr){
		if(letter == name){
			console.log(name + " already present, Please Try Another Name");
			break;}
			incer = incer+1;}
	if (incer == Arr.length){
		Arr.push(name);
		console.log("New name successfully Added");}}
if(answer == 'Pop'){
	var name1 = prompt('Enter Name you want to remove ');
	var index = Arr.indexOf(name1);
	Arr.splice(index,1);
	console.log("Name successfully Removed");}
if(answer == 'Display'){
	console.log(Arr);}

if(answer == 'Quit'){
	break;}}
/*
var index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);*/


