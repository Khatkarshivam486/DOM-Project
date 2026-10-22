let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remGuess = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevNum = []
let numGuess = 0
// let remaining = parseInt(remGuess.innerHTML)

let playGame = true // *** this is common in games


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess){ // *** Important
    if(guess=='' || Number.isNaN(guess) || guess<0 || guess>100){  
        alert('please enter a valid number')
    }

    if(parseInt(remGuess.innerHTML) === 0 ){
        displayMessage(`GAME OVER !! Random no is ${randomNumber}`)
        endGame()
    } else{
        displayGuess(guess) // // Clean Up of input box
        if(remGuess.innerHTML != "0"){
            checkGuess(guess)
        }
    } 
    prevNum.push(guess)
}

function checkGuess(guess){
    if(guess == randomNumber){
        // startOver.innerHTML = "Congrats u passed the Quest !!"
        displayMessage("Congrats u passed the Quest !!")
        endGame()
    }
    else if(guess>randomNumber){
        displayMessage("Enter a little bit less Num!")
    }
    else if(guess<randomNumber){
        displayMessage("Pass a little bit greater Num!")
    }
}

function displayGuess(guess){ // cleaning input box
    userInput.value = ''
    guessSlot.innerHTML += ` ${guess}`
    numGuess++ 
    remGuess.innerHTML = 10 - numGuess
    if(remGuess.innerHTML == "0"){
        displayMessage(`GAME OVER !! Random no is ${randomNumber}`)
        endGame()
    }
    // remGuess.innerHTML = remaining
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '') // comes in key value pairs
    p.classList.add('button')
    p.innerHTML = "<h2 id=newGame>Start new Game</h2>"
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100+1)
        prevNum = []
        numGuess = 0
        lowOrHi.innerHTML = ''
        guessSlot.innerHTML = ''
        remGuess.innerHTML = '10'
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

// document.addEventListener('submit', (e) => {
//     if(randomNumber != userInput.value){
//         document.querySelector('.form').innerHTML = "Try again !!"
//     }else{
//         document.querySelector('.form').innerHTML = "Congrats u finished the Quest"
//     }
//     prevGuess.innerHTML = prevNum.push(parseInt(userInput.value))
//     remGuess.innerHTML = remGuess-1
// })
