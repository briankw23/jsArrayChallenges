//challenge one
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
//challenge two
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

//challenge 3

var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ];  // 2
var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];  // 0.55
var arrayA1 = [];
var arrayA2 = [];
for (var i = 0; i < challengeThreeInputA.length; i++) {
	if(challengeThreeInputA[0]!=challengeThreeInputA[i]){
		arrayA1.push(challengeThreeInputA[i]);
	} else{
		arrayA2.push(challengeThreeInputA[i]);
	}
}
if (arrayA1.length>arrayA2.length) {
document.getElementById('challenge-3-A').innerHTML = arrayA2;
} else {
document.getElementById('challenge-3-A').innerHTML = arrayA1;
}
var arrayB1 = [];
var arrayB2 = [];
for (var i = 0; i < challengeThreeInputB.length; i++) {
	if(challengeThreeInputB[0]!=challengeThreeInputB[i]){
		arrayB1.push(challengeThreeInputB[i]);
	} else{
		arrayB2.push(challengeThreeInputB[i]);
	}
}
if (arrayB1.length>arrayB2.length) {
document.getElementById('challenge-3-B').innerHTML = arrayB2;
} else {
document.getElementById('challenge-3-B').innerHTML = arrayB1;
}

//challenge 4

var challengeFourInputA = [ 1, 2, 3 ];  // [2, 4, 6]
var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]
var array4a = [];
for (var i = 0; i < challengeFourInputA.length; i++) {
	array4a.push(challengeFourInputA[i]*2);
}
document.getElementById('challenge-4-A').innerHTML = array4a;
var array4b = [];
for (var i = 0; i < challengeFourInputB.length; i++) {
	array4b.push(challengeFourInputB[i]*2);
}
document.getElementById('challenge-4-B').innerHTML = array4b;

//challenge 5

var array5a = [1,2];
var array5b = [1];
var yes1 =[];
var no1=[];
//display = [2]

var array5c = [1,2, 4, 7, 5, 9];
var array5d = [5, 9, 2];
var yes2 = [];
var no2 = [];
//display = [1, 4, 7]
for (var i = 0; i < array5a.length; i++) {
	if(array5b.includes(array5a[i])){
		yes1.push(array5a[i]);
	}else {
		no1.push(array5a[i]);
	};
};
document.getElementById('challenge-5-A').innerHTML = no1;
for (var i = 0; i < array5c.length; i++) {
	if(array5d.includes(array5c[i])){
		yes2.push(array5c[i]);
	}else {
		no2.push(array5c[i]);
	};
};
document.getElementById('challenge-5-B').innerHTML = no2;

