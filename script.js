let wordsContainer = document.querySelector('#words');
let youWinText = document.querySelector('#youWin');

let words = [
    {word: "red", color:"blue"},
    {word: "blue", color:"orange"},
    {word: "orange", color:"black"},
    {word: "blue", color:"green"},
    {word: "purple", color:"red"},
    {word: "green", color:"orange"},
    {word: "black", color:"purple"}, 
]

let wordsElement = []

function showWords(){
    words.forEach(function(word){
        let newSpan = document.createElement('span');
        newSpan.innerHTML = word.word;
        newSpan.style.color = word.color;
        wordsContainer.append(newSpan);
        wordsElement.push(newSpan);
    })
}

let wordsCounter = 0
let startTime;
let hasStarted = false;

function checkColor(that){
    let input = that.value;
    that.value = '';

    if (input.toLowerCase() == 'start'&& hasStarted==false){
        hasStarted = true;
        startTime = new Date();
        showWords();
    }

    if(hasStarted){
        if(input.toLowerCase() == words[wordsCounter].color){
            wordsElement[wordsCounter].style.color = 'lightgray'
            wordsCounter++

            if(wordsCounter >= words.length){
                let time = (new Date()) - startTime;
                time /= 1000;
                youWinText.style.display= 'block';
                youWinText.innerHTML += " It took you " + time +' seconds';
            }
        }
    }
}