var input = prompt("Challenge One: Please enter one word followed by a space then another word");
var inputsplit= input.split(" ");
var inputsplit1 =inputsplit[0].toLowerCase();
var inputsplit2 =inputsplit[1].toLowerCase();
var ourArray =[];
for(var i = 0; i < inputsplit1.length; i++ ){	
	ourArray.push(inputsplit1.charCodeAt(i) - 96);
}
var ourArray2 =[];
for(var i = 0; i < inputsplit2.length; i++ ){
	ourArray2.push(inputsplit2.charCodeAt(i) - 96*1);
}
var ourArraysum = 0;
for (var i = 0; i < ourArray.length; i++){
	ourArraysum += ourArray[i];
}
var ourArray2sum = 0;
for (var i = 0; i < ourArray2.length; i++){
	ourArray2sum += ourArray2[i];
} 
if (ourArraysum > ourArray2sum){
	document.getElementById('challenge-1').innerHTML= inputsplit1;
} else {
	document.getElementById('challenge-1').innerHTML= inputsplit2;
}

var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  //[1,2,7,4,5,6,3,8,9];
var challengeTwoInputB = [12,13,14];  //[12,17,14];
var challengeTwoInputC = [9,2,4,7,3];  //[9,2,4,3,7];
var three = 3;
var seven = 7;
var twoarray = [];
for (var i = 0; i < challengeTwoInputA.length; i++){
	if (challengeTwoInputA[i]=== 3){
		twoarray.push(seven);
	}
		else if(challengeTwoInputA[i]=== 7){
		twoarray.push(three);	
		}
			else{twoarray.push(challengeTwoInputA[i])}
}
document.getElementById('challenge-2-A').innerHTML = twoarray;
var barray = challengeTwoInputB.splice(1,1,17);
console.log(barray);
console.log(challengeTwoInputB);
document.getElementById('challenge-2-B').innerHTML = challengeTwoInputB;
var carray = [];
for (var i = 0; i < challengeTwoInputC.length; i++){
	if (challengeTwoInputC[i]=== 3){
		carray.push(seven);
	}
		else if(challengeTwoInputC[i]=== 7){
		carray.push(three);	
		}
			else{carray.push(challengeTwoInputC[i])}
}
document.getElementById('challenge-2-C').innerHTML = carray;

