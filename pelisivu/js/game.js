const playgame = document.getElementById("game")
const home = document.getElementById("main")
const disscore = document.getElementById("points")
const key1 = document.getElementById("g1")
const key2 = document.getElementById("g2")
const key3 = document.getElementById("g3")
const key4 = document.getElementById("g4")
const key5 = document.getElementById("g5")
const key6 = document.getElementById("g6")
const gameOvertxt = document.getElementById("lose")
const restart = document.getElementById("restart")
const sleep = ms => new Promise(r => setTimeout(r, ms))
let score = 0
let machineInput = []
let yourInput = []
let length_ = 3
let maxRNG = 4
let isMachineTurn = true
let time = 0
let inputsDone = 0
let gameOver = false
let trigger = false

function getRN(max){
    return Math.floor(Math.random()*max)
}

function machineGEN() {
    for (let i = 0; i < length_; i++) {
        machineInput.push(getRN(maxRNG))
    }
}

function disableAllGameButtons() {
    console.log("disabled")
    key1.disabled = true
    key2.disabled = true
    key3.disabled = true
    key4.disabled = true
    key5.disabled = true
    key6.disabled = true
}

function enableAllGameButtons() {
    console.log("enabled")
    key1.disabled = false
    key2.disabled = false
    key3.disabled = false
    key4.disabled = false
    key5.disabled = false
    key6.disabled = false
}

function resetGameButtonState(){
    key1.style.animation="none"
    key2.style.animation="none"
    key3.style.animation="none"
    key4.style.animation="none"
    key5.style.animation="none"
    key6.style.animation="none"
    key1.offsetHeight;
    key2.offsetHeight;
    key3.offsetHeight;
    key4.offsetHeight;
    key5.offsetHeight;
    key6.offsetHeight;
    key1.style.animation=null
    key2.style.animation=null
    key3.style.animation=null
    key4.style.animation=null
    key5.style.animation=null
    key6.style.animation=null
}
function frames() {
    if (score >= 10) {
        key5.style.display = "inline-block"
        maxRNG = 5
    } else if (score >= 20) {
        key6.style.display = "inline-block"
        maxRNG = 6
    } else {
        maxRNG = 4
    }
    disscore.innerHTML = score
    length_ = 3+(Math.floor(score/5))
    if (isMachineTurn) { //repeats once
        machineGEN()
        disableAllGameButtons()
        for (const val of machineInput){
            time++
            setTimeout(()=>{
                if (val === 0){
                    key1.style.animation = "fullswitch 0.8s linear 0.1s 1 normal"
                    console.log(0)
                }else if (val === 1){
                    key2.style.animation = "fullswitch 0.8s linear 0.1s 1 normal"
                    console.log(1)
                }else if (val === 2){
                    key3.style.animation = "fullswitch 0.8s linear 0.1s 1 normal"
                    console.log(2)
                }else if (val === 3){
                    key4.style.animation = "fullswitch 0.8s linear 0.1s 1 normal"
                    console.log(3)
                }else if (val === 4){
                    key5.style.animation = "fullswitch 0.8s linear 0.1s 1 normal"
                    console.log(4)
                }else if (val === 5){
                    key6.style.animation = "fullswitch 0.8s linear 0.1s 1 normal"
                    console.log(5)
                }
            }, 1500*time)
            setTimeout(()=>{
                resetGameButtonState()
            },1500*time+1500)
        }
        if (length_ === time){
            isMachineTurn = false
            setTimeout(()=>{
                enableAllGameButtons()
            },1500*(length_+1))
        }
    }else if (!isMachineTurn) { //triggers every frame
        if (length_ === inputsDone) {
            if (JSON.stringify(yourInput)===JSON.stringify(machineInput)) {
                score++
                machineInput = []
                yourInput = []
                inputsDone = 0
                console.log("+score")
                isMachineTurn = true
                time = 0
            } else {
                gameOver = true
                gameOvertxt.style.display = "block"
                restart.style.display = "block"
                disableAllGameButtons()
                clearInterval(frame)
            }
        }
    }
}
restart.addEventListener("click", ()=>{
    location.reload()
})
key1.addEventListener("click", ()=>{
    yourInput.push(0)
    inputsDone++
    // debug
    console.log(`${yourInput}/${machineInput}`)
    console.log(JSON.stringify(yourInput)===JSON.stringify(machineInput))
})
key2.addEventListener("click", ()=>{
    yourInput.push(1)
    inputsDone++
    console.log(`${yourInput}/${machineInput}`)
    console.log(JSON.stringify(yourInput)===JSON.stringify(machineInput))
})
key3.addEventListener("click", ()=>{
    yourInput.push(2)
    inputsDone++
    console.log(`${yourInput}/${machineInput}`)
    console.log(JSON.stringify(yourInput)===JSON.stringify(machineInput))
})
key4.addEventListener("click", ()=>{
    yourInput.push(3)
    inputsDone++
    console.log(`${yourInput}/${machineInput}`)
    console.log(JSON.stringify(yourInput)===JSON.stringify(machineInput))
})
key5.addEventListener("click", ()=>{
    yourInput.push(4)
    inputsDone++
    console.log(`${yourInput}/${machineInput}`)
    console.log(JSON.stringify(yourInput)===JSON.stringify(machineInput))
})
key6.addEventListener("click", ()=>{
    yourInput.push(5)
    inputsDone++
    console.log(`${yourInput}/${machineInput}`)
    console.log(JSON.stringify(yourInput)===JSON.stringify(machineInput))
})
playgame.addEventListener("click", () => {
    location.replace("./game.html")
})
home.addEventListener("click", () => {
    location.replace("./main.html")
})
var frame = setInterval(frames, 1)