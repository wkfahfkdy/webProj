var names = [];
names[0] = '유정모';
names.push('구자혁'); //마지막 위치에 추가
names.push('석정원');
names.pop(); //가장 뒤에 항목 삭제(배열까지 싹다)
delete names[0]; //해당 위치 값만 삭제(내용만 삭제)
names.shift(); //첫 위치 제거
names.unshift('김이담'); //첫 위치에 추가
names.push('공도현');
names.push('소국진');
names.push('전형민');

var returnVAl = names.map(function(val, idx, ary){      // map : 자바에서는 key - value 로 값을 바로 구한다는것? 배열처럼 순차적으로 해당 요소 값 구하는게 아님
    // if(idx < 3){
    //     return val;
    // }
    // return null;
    var person = {};
    person.name = val;
    person.num = idx;

    return person;
});

    var retrunFil = returnVAl.filter(function (val, idx, ary) {     //return 값이 true 인것만 보내준다. false 인것은 버린다.
    
    return idx % 2 == 0;
});

console.log(retrunFil);
console.log('============================')
console.log(returnVAl);
console.log('============================')

// var show = document.getElementById('show');
// var ulTag = document.createElement('ul');
// show.appendChild(ulTag);

names.forEach(function (val, idx, ary) {
    console.log(`names 요소 : ${val}, ${idx}, ${ary}`)
    
    // console.log(`names 요소 : ${a}, ${b}, ${c}`);
    // var liTag = document.createElement('li');
    // liTag.innerHTML = val; // <li>김이담</li>
    // ulTag.appendChild(liTag);
    // console.log('names 요소 : ' + i)
});
console.log('============================')

console.log(names);