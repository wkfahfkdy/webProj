//구구단 test


var table1 = '<table border = "1">';
    for (var i = 1; i < 10; i++){
        table1 += '<tr><td> 2 * ' + i + '</td><td> = </td><td>' + (2 * i) + '</td></tr>';
    }


table1 += '</table>';
document.write(table1);