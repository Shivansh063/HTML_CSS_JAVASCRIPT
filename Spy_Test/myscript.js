var f_name=prompt('Enter Your First Name: ');
var l_name=prompt('Enter Your Last Name: ');
var age=prompt('Enter Your Age: ');
var height=prompt('Enter Your Height: ');
var p_name=prompt('Enter Your Pet Name: ');
var x,y;

if(f_name[0] == l_name[0] && height >=170){
	x = 5;
}
if(p_name[p_name.length-1] && (age > 20 && age<30)){
	y=7;}

if(x == 5 && y == 7){
	alert(f_name+" "+l_name+' is a SPY!')}
else{
	console.log("Congratulations !" + f_name+" "+l_name+" cleared Spy Test")}	