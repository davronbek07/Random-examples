let que = +prompt('Введите колличество примеров');
function random(min, max) {
    return Math.floor(Math.random()*(max + 1 - min)+ min);
}
function randomSym() {
    return Math.floor(Math.random()*(5 - 1)+ 1);
}

for (let i = 0; i < que; i++) {
    let num1 = random(1, 10);
    let num2 = random(1, 10);
    let symbol = randomSym();
    let answer = 0;
    if(symbol == 1){
        answer = num1 + num2;
        symbol = '+';
    }
    else if(symbol == 2){
        answer = num1 - num2;
        symbol = '-';
    }
    else if(symbol == 3){
        answer = num1 * num2;
        symbol = '*';
    }
    else if(symbol == 4){
        answer == num1 / num2;
        symbol == '/';
    }
 
    let answer2 = +prompt(num1 + symbol + num2);
    alert(answer == answer2 ? `Ваш ответ верный ${answer2}` : `Ваш ответ неверный ${answer2} || Правильный ответ ${answer}` );
}