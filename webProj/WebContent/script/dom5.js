<button onclick='showTable()'>클릭</button>
//버튼은 스크립트 밖에 있던거임

        var buttons = document.getElementsByTagName('button');
        buttons[0].setAttribute('onclick', 'showTable()'); 
        /*위에 4개중에 첫번째거에만 기능 부여하는 방법
        [0]을 [i]로 바꾸고 for(var i = 0; ~~ ) 당연히 가능*/

        var p1 = {
            name: '성진아',
            score: 80,
            gender: '여'
        }
        var p2 = {
            name: '김수민',
            score: 83,
            gender: '여'
        }
        var p3 = {
            name: '장재우',
            score: 85,
            gender: '남'
        }
        var persons = [p1, p2, p3];
        // <table border='1'><tr><td>성진아</td><td>80</tr>...</table>

        var tbl = document.createElement('table');
        tbl.setAttribute('border', '1');

        for (var p of persons) { //배열의 개수만큼 반복
            var tr1 = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            /*아래 5줄만 적었었는데 그 결과는 p3 테이블만 달랑 튀어나왔다.
            이거를 해결하기 위해서는 위 3줄이 필요했는데,
            for문 밖에 있을 것이 아니라 안에 두게 함으로 계속해서 생성시키는것이었다
            왜 밖에 뒀냐면 위 3줄은 그저 각각의 선언문인줄 알았기 때문에
            생성해주는게 아닌줄 알았다. 생성은 오히려 제일 아래 3줄이 하는줄 알았다*/
            td1.innerHTML = `${p.name}`;
            td2.innerHTML = `${p.score}`;
            tbl.appendChild(tr1);
            tr1.appendChild(td1);
            tr1.appendChild(td2);
        }

        var show = document.getElementById('show');
        show.appendChild(tbl);

        console.log('============================')
        /* for in 사용법*/

        for (var field in p3) { //p3이 가진 field 의 개수 만큼 반복(name, score)
            console.log(field, p3[field]);
        }

        console.log('============================')
        /* for in 을 사용하여 table 생성. 위 내용이어서 만듬
        장점 : gender 항목이 원래 없었는데, 추가를 해도 바로바로 적용이 됨
        첫번째 테이블은 각각 따로따로 추가를 했기때문에 안되는데
        이건 for in 문으로 필드 개수만큼 반복시키니까 바로 반영이 되었음*/

        function showTable() {

            var tableTag = document.createElement('table');
            tableTag.setAttribute('border', '1');
            for (var person of persons) { //배열에서 반복 (p1, p2, p3)
                var tr1 = document.createElement('tr');
                for (var field in person) { // object에서 반복 (name, score, gender)
                    var td1 = document.createElement('td');
                    td1.innerHTML = person[field];
                    tr1.appendChild(td1);
                }
                tableTag.appendChild(tr1);
            }
            var show = document.getElementById('show'); //제일 위에 <div id = "show"></div> 가 있는데 이걸 var show = ~~ 로 불러온다.
            show.appendChild(tableTag);                 //그리고 show 뒤에 테이블을 붙히는 거라 html 화면상에 보이게 되는 것

        }