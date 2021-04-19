
        /*div>p*5 라고 치면 자동완성*/
        
        var ps = document.querySelector('div>p');
        console.log(ps);
        ps.textContent = 'hello';
        ps.style.backgroundColor = 'yellow';
        // ps.forEach(function(val){
            // console.log(val);
            // val.textContent = '<h1>hello</h1>';
            // val.style.backgroundColor = 'green';
        // })

        // numbers = > 1 ~ 10
        // filter, map, foreach => 짝수만 보이도록 => evenVal; 에다가 담기
        // evenval => 리턴값 n >>> n * 3 => mapVal;
        // mapVal => console.log(각각 출력);

        var numbers = new Array;
        numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        var evenVal = numbers.filter(function (val) {
            return val % 2 == 0;
        })
        console.log(evenVal);

        var mapVal = evenVal.map(function (val) {
            var nb = val * 3;

            return nb;
        })

        console.log(mapVal);

        mapVal.forEach(function (val, idx) {
            console.log(`${idx +1}번째의 값은 ${val}.`)
        })

        console.log('===============================')

        // 아래와 같이 위에 3개를 하나로 묶어서 적는것도 가능하다

        var evenVal = numbers.filter(function (val) {
            return val % 2 == 0;
        }).map(function (val) {
            return val * 3;
        }).forEach(function (val, idx) {
            console.log(`${idx +1}번째의 값은 ${val}.`)
        });

        console.log('===============================')

        // 더 줄일 수 있음
        // => 로 생략이 가능해진다

        numbers.filter((val) => val % 2 == 0) //
            .map((val) => val * 3)
            .forEach((val) => console.log(val));

        console.log('===============================')

        // => 예시 (arrow function) = 람다식?

        var sum = (a, b) => a + b; // arrow function.
        console.log(sum(10,20));