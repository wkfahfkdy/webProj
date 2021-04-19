var h1Tag = document.createElement('h1');
h1Tag.innerHTML = "hello";
console.log(h1Tag);
var aTag = document.createElement('a');
aTag.setAttribute('href', 'https://www.daum.net');
// aTag.innerHTML = '다음 페이지';
var text = document.createTextNode('다음 사이트');
aTag.appendChild(text);
console.log(aTag);

// document.body.appendChild(h1Tag);
// document.body.appendChild(aTag);

var show = document.getElementById('show');
// <div style='background-color : red></div>;'
show.setAttribute('style', 'background-color : red');
show.appendChild(h1Tag);
show.appendChild(aTag);

