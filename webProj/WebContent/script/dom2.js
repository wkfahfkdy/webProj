var genfrm = document.createElement('form');
        
var man = document.createTextNode('남 : ');
var woman = document.createTextNode(' 여 : ');

var inputMan = document.createElement('input');
inputMan.setAttribute('type', 'radio');
inputMan.setAttribute('name', 'gender');
inputMan.setAttribute('value', 'man');
inputMan.setAttribute('id', 'man');
var inputWoman = document.createElement('input');
inputWoman.setAttribute('type', 'radio');
inputWoman.setAttribute('name', 'gender');
inputWoman.setAttribute('value', 'woman');
inputWoman.setAttribute('id', 'woman');

document.body.appendChild(genfrm);

genfrm.appendChild(man);
genfrm.appendChild(inputMan);
genfrm.appendChild(woman);
genfrm.appendChild(inputWoman);

/*
<!-- 예제 -->
<!-- <form action="login.jsp" method="get">
    id : <input type = 'text'>
    passwrod : <input type = 'password'>
    <input type = 'submit' value = "Send">
    <input type = 'reset' value = 'Cancel'>
</form><br> -->
*/

// form 생성
var frm = document.createElement('form');
frm.setAttribute('action', 'login.jsp');
frm.setAttribute('method', 'get');

// label => id: , password:
var id = document.createTextNode('id : ');
var passwd = document.createTextNode(' passwd : ');
// input => id, passwd
var inputId = document.createElement('input');
inputId.setAttribute('type', 'text');
inputId.setAttribute('name', 'id');
var inputPw = document.createElement('input');
inputPw.setAttribute('type', 'text');
inputPw.setAttribute('name', 'passwd');
var send = document.createElement('input');
send.setAttribute('type', 'submit');
send.setAttribute('value', 'Send');
var cancel = document.createElement('input');
cancel.setAttribute('type', 'reset');
cancel.setAttribute('value', 'Cancel');

document.body.appendChild(frm);

frm.appendChild(id);
frm.appendChild(inputId);
frm.appendChild(passwd);
frm.appendChild(inputPw);
frm.appendChild(send);
frm.appendChild(cancel);

//------------------------------------------------------

var logfrm = document.createElement('form');
logfrm.setAttribute('action', 'login.jsp');
logfrm.setAttribute('method', 'get');

var id = document.createTextNode(' ID : ');
var pw = document.createTextNode(' PW : ');

var inputId = document.createElement('input');
inputId.setAttribute('type', 'text');
inputId.setAttribute('name', 'id');
var inputPw = document.createElement('input');
inputPw.setAttribute('type', 'text');
inputPw.setAttribute('name', 'passwd');

var send = document.createElement('input');
send.setAttribute('type', 'submit');
send.setAttribute('value', 'Send');
var cancel = document.createElement('input');
cancel.setAttribute('type', 'reset');
cancel.setAttribute('value', 'Cancel');

document.body.appendChild(logfrm);

logfrm.appendChild(id);
logfrm.appendChild(inputId);
logfrm.appendChild(pw);
logfrm.appendChild(inputPw);
logfrm.appendChild(send);
logfrm.appendChild(cancel);
