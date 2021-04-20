function mouseOverFnc() {
    this.style.backgroundColor = 'yellow';
}

function mouseOutFnc() {
    this.style.backgroundColor = '';
}

function deleteRow() {
    var delVal = this.parentNode.parentNode.childNodes[0].firstChild.nodeValue;
    delFunc(delVal);
    this.parentNode.parentNode.remove();
}

function delFunc(val) {
    console.log(`${val} 삭제됨`)
}

function modifyFunc() {
    var idVal = this.innerHTML;
    var nameVal = this.previousSibling.innerHTML;
    var scoreVal = this.nextSibling.innerHTML;
    var genderVal = this.parentNode.childNodes[3].innerHTML;
    // console.log(idVal, nameVal, scoreVal, genderVal);

    document.getElementById('name').value = nameVal;
    document.getElementById('id').value = idVal;
    document.getElementById('score').value = scoreVal;
    var genders = document.querySelectorAll('input[name="gender"]');
    for (var i = 0; i < genders.length; i++) {
        if (genders[i].value == genderVal) {
            genders[i].checked = true;
        }
    }
}

/* function createTitle(t1, t2, t3, t4, t5){     >> name, id ~~~ 만드는거 >>>> 교수님 제목 만들다가 남은 부산물 1
     var trTag = document.createElement('tr');

     var td1 = document.createElement('th');
     td1.innerHTML = t1;
     var td2 = document.createElement('th');
     td1.innerHTML = t2;
     var td3 = document.createElement('th');
     td1.innerHTML = t3;
     var td4 = document.createElement('th');
     td1.innerHTML = t4;
     var td5 = document.createElement('th');
     td1.innerHTML = t5;

     trTag.appendChild(td1);
     trTag.appendChild(td2);
     trTag.appendChild(td3);
     trTag.appendChild(td4);
     trTag.appendChild(td5);

     tblTag.appendChild(trTag);
 }
 ==============================================================================
     위에거 줄임
     ==========
     function createTitle(){                                          >> 교수님 참조본의 creatTitle() 원본? 이걸로 고칠랬는데 난 오류나서 안함. 수업중이라 시간부족
         console.log(arguments); <<매개변수들 보여줌. 지워도 괜찮

         var trTag = document.createElement('tr');

         for (var i = 0; i < arguments.length; i++){
              var td1 = document.createElement('th');
              td1.innerHTML = arguments[i];
              trTag.appendChild(td1);
         }

 */

function cleanMain() {
    for (var fie in p1) { //제목 붙히기(직접만든거)     다른 사람들 createTitle()
        var th0 = document.createElement('th');
        th0.innerHTML = fie;
        tr0.appendChild(th0);
    }
    tblTag.appendChild(tr0);


    for (var person of persons) { // 다른 사람들 createData()
        var tr1 = document.createElement('tr');
        tr1.setAttribute('id', person.id); // 수정할 id 를 눌렀을 때 id 값을 저장해둠
        tr1.onmouseover = mouseOverFnc;
        tr1.onmouseout = mouseOutFnc;

        for (var field in person) {
            if (field == 'id') { //이거 원래는 단순 tr,td 반복문이었는데 여기서부터 id 클릭시 정보를 위의 입력칸으로 가져오는 것이 추가 됨 > 이걸로 정보 수정할려는거 (modifyFunc)
                var td1 = document.createElement('td');
                td1.onclick = modifyFunc;
                td1.innerHTML = person[field];
                tr1.appendChild(td1);
            } else if (field == 'name') {                          //누르면 링크
                var td1 = document.createElement('td');
                var link = document.createElement('a');
                link.setAttribute('href', 'dom.jsp?name=' + person.name + '&id=' + person.id + '&score=' + person.score + '&gender=' + person.gender);
                link.innerHTML = person.name;
                td1.appendChild(link);
                tr1.appendChild(td1);
            } else {
                var td1 = document.createElement('td');
                td1.innerHTML = person[field];
                tr1.appendChild(td1);
            }
        }
        /* 나는 이거 생각이 안나서 버튼을 p1~p4 에 button : ~~~ 를 일일이 추가를 했었다.
            아래는 교수님이 알려주신 방법. 지금 for문 내에서 button을 추가한 것
            */
        var btn = document.createElement('button');
        btn.innerHTML = '삭제'
        var tdTag = document.createElement('td');
        tdTag.appendChild(btn);
        tr1.appendChild(tdTag);
        tblTag.appendChild(tr1);
    }

    // createTitle('Name','Id', 'Score', 'Gender', '기능');
    var show = document.getElementById('show');
    show.appendChild(tblTag);
    /*나는 제일 위에 div id='show'를 만들고나서 거기에다가 붙혔는데
    위의 for 문을 감싸는 function 으로 하는 방법은
    function ~~~() { for ~~~ } 을 한 후 그냥 마지막에 ~~~(); 를 하면 된다.
    */

    var btns = document.querySelectorAll('tr>td>button');
    for (var i = 0; i < btns.length; i++) {
        btns[i].onclick = deleteRow;
    }
    console.log(btns);
}

function saveBtnFnc() {
    var iName = document.getElementById('name'); //뒤에 .value가 없으면 나중에 이 값을 쓸때 .value를 붙혀줘야한다
    var iId = document.querySelector(
        'input[name="id"]'
    ); //name은 id값이 없어서 name에서 가져와야한다. 그 경우 getElementById를 쓰지 못한다. 이 때 쓰이는 것
    var iScore = document.getElementsByTagName('input')[2];
    var iGender = document.querySelector('input[name="gender"]:checked');

    var trTag = document.createElement('tr');
    trTag.onmouseover = mouseOverFnc;
    trTag.onmouseout = mouseOutFnc;
    // name
    var tdTag = document.createElement('td');
    tdTag.innerHTML = iName.value;
    trTag.appendChild(tdTag);
    //id
    tdTag = document.createElement('td');
    tdTag.innerHTML = iId.value;
    trTag.appendChild(tdTag);
    //Score
    tdTag = document.createElement('td');
    tdTag.innerHTML = iScore.value;
    trTag.appendChild(tdTag);
    //Gender
    tdTag = document.createElement('td');
    tdTag.innerHTML = iGender.value;
    trTag.appendChild(tdTag);
    //삭제
    btn = document.createElement('button');
    btn.innerHTML = '삭제'
    btn.onclick = deleteRow;
    tdTag = document.createElement('td');
    tdTag.appendChild(btn);
    trTag.appendChild(tdTag);

    tblTag.appendChild(trTag);
}

function modifyBtnFnc() { //수정 버튼 눌렀을 때 정보 갱신
    var id = document.getElementById('id').value;
    var targetTr = document.getElementById(id); // value 값에 따라서 해당 user 정보 다 불러옴
    targetTr.children[0].innerHTML =
        document.getElementById('name').value;
    targetTr.children[2].innerHTML =
        document.getElementById('score').value;
    targetTr.children[3].innerHTML =
        document.querySelector('input[name="gender"]:checked').value;
}