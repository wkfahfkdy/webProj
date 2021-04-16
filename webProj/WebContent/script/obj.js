/**
 * 
 */

var num1, num2, result;
num1 = 25;
num2 = 2;
result = num1 / num2;
result = num1 % num2;
var num3 = '25';
console.log(num1 === num3);
console.log("결과값: " + result);

var obj = {}; // new Object();
obj.name = 'Hong';
obj.age = 20;
obj.showInfo = function () {
	console.log('이름: ' + obj.name + ', 나이 : ' + obj.age);
}
//console.log();
obj.showInfo();

var obj2 = {
	name: 'Hwang',
	age: 22,
	showInfo: function () {
		console.log('이름: ' + this.name + ', 나이: ' + this.age);
	}
}
obj2['name'] = 'Park';
obj2['age'] = 33;
obj2.showInfo();

var obj3 = {
	name: 'Kang',
	age: 15
}