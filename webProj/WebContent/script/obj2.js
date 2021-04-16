// obj2.js
var names = []; //new Array();
names[0] = 'Hong';
names[1] = 'Hwang';
names[2] = 'Park';
names[3] = 'Choi';

for (var i = 0; i < names.length; i++) {
    document.write('<h2>' + names[i] + '</h2>');
}

console.log('-------------------');
/* <table border = '1'></table> 인데 아래서 굳이 "" 쓴 이유 : 
앞뒤에 '' 가 있어서 '~~~'1'~~~' 로 1 앞뒤로 ''이 감싸지게되는 모양이 되기 때문
"" 이던 '' 이던 내부랑은 다르게 해야하는거 주의 */
var tableTag = '<table border="1">';
tableTag += '<tr><th>이름</th><th>나이</th></tr>'; // tableTag = tableTag + '<tr></tr>' 과 같음
var persons = [obj, obj2, obj3];
for (var i = 0; i < persons.length; i++) {
    // persons[i].showInfo();
    if (persons[i].age < 20) {
        tableTag += '<tr><td style="color : red;">' + persons[i].name +
            '</td><td style="color : red;">' + persons[i].age + ' </td></tr>';
    } else {
        tableTag += '<tr><td>' + persons[i].name +
            '</td><td>' + persons[i].age + '</td></tr>';
    }

}

tableTag += '</table>'
document.write(tableTag);