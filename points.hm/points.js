let point = 0;
let answer = ' ';

 answer = prompt('11x3?');

if (answer === '33') {
    alert('right');
    point++;
} else {
    if (answer != '33') {
        alert('wrong')
    }
}

answer = prompt('how many corners does a square have?');

if (answer === '4') {
    alert('right');
    point++;
} else {
    if (answer != '4') {
        alert('wrong')
    }
}

alert('you got ' + point + ' points');



