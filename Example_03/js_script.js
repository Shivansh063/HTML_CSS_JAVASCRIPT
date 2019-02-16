var obj = {
name : "Shivansh Gupta",
age : 21,
job : "Senior Developer",
myMethod : function(){
console.log('Name is '+this.name+', Age is '+this.age+', Job is '+this.job );}}

function nameLength(args){
	console.log("Total length of name is "+args.name.length)
}

nameLength(obj);
console.log(obj.myMethod());


var array = obj['name'].split(" ");
var length = array.length;

console.log(array[length-1]);


