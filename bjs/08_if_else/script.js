let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;

const phraseRandom1 = Math.round( Math.random() * 3); 
if (phraseRandom1 === 0) {
   answerPhrase1 = `Если я не ошибаюсь, это ${answerNumber }?`;
}
if (phraseRandom1 === 1) {
    answerPhrase1 = `Твое число ${answerNumber }?`;
}
if (phraseRandom1 === 2) {
    answerPhrase1 = `Лаааадно, давай попробуем ${answerNumber }?`;
}
if (phraseRandom1 === 3) {
    answerPhrase1 = `Наверное, это ${answerNumber }`;
}

answerField.innerText = answerPhrase1;


document.getElementById('btnRetry').addEventListener('click', function () {
minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    
answerNumber = Math.floor((minValue + maxValue) / 2);
orderNumber = 1;
    
gameRun = true;
orderNumberField.innerText = orderNumber;
const phraseRandom1 = Math.round( Math.random() * 3); 
if (phraseRandom1 === 0) {
   answerPhrase1 = `Если я не ошибаюсь, это ${answerNumber }?`;
}
if (phraseRandom1 === 1) {
    answerPhrase1 = `Твое число ${answerNumber }?`;
}
if (phraseRandom1 === 2) {
    answerPhrase1 = `Лаааадно, давай попробуем ${answerNumber }?`;
}
if (phraseRandom1 === 3) {
    answerPhrase1 = `Наверное, это ${answerNumber }`;
}

answerField.innerText = answerPhrase1;
console.log('Yes')
       
    })



document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom1 = Math.round( Math.random() * 3); 
            if (phraseRandom1 === 0) {
               answerPhrase1 = `Если я не ошибаюсь, это ${answerNumber }?`;
            }
            if (phraseRandom1 === 1) {
                answerPhrase1 = `Твое число ${answerNumber }?`;
            }
            if (phraseRandom1 === 2) {
                answerPhrase1 = `Лаааадно, давай попробуем ${answerNumber }?`;
            }
            if (phraseRandom1 === 3) {
                answerPhrase1 = `Наверное, это ${answerNumber }`;
            }
            
            answerField.innerText = answerPhrase1;
            console.log('Yes')
        }
    }
})


document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
    
            maxValue = answerNumber ;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandom1 = Math.round( Math.random() * 3); 
            if (phraseRandom1 === 0) {
               answerPhrase1 = `Ну что ж, это ${answerNumber }?`;
            }
            if (phraseRandom1 === 1) {
                answerPhrase1 = `Легко, это ${answerNumber }?`;
            }
            if (phraseRandom1 === 2) {
                answerPhrase1 = `Хорошо, это ${answerNumber }?`;
            }
            if (phraseRandom1 === 3) {
                answerPhrase1 = `Наверное, это ${answerNumber }`;
            }
            
            answerField.innerText = answerPhrase1;
            console.log('Yes')
        }
    }
})


 document.getElementById('btnEqual').addEventListener('click', function () { 
        const phraseRandom1 = Math.round( Math.random() * 3);
            if (phraseRandom1 === 0) {
                answerPhrase1 = `Это было легче, чем я думал`;
            }
            if (phraseRandom1 === 1) {
                answerPhrase1 = `Я никогда не ошибаюсь!`;
            }
            if (phraseRandom1 === 2) {
                answerPhrase1 = `Отлично. Давай число посложнее`;
            }
            if (phraseRandom1 === 3) {
                answerPhrase1 = `Славно поиграли`;
            }
        if (gameRun){ 
            answerField.innerText = answerPhrase1 
            gameRun = false; 
        }
    })
