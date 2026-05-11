const playgame = document.getElementById("game")
const home = document.getElementById("main")
const disscore = document.getElementById("points")
const key1 = document.getElementById("g1")
const key2 = document.getElementById("g2")
const key3 = document.getElementById("g3")
const key4 = document.getElementById("g4")
const key5 = document.getElementById("g5")
const key6 = document.getElementById("g6")
const sleep = ms => new Promise(r => setTimeout(r, ms))
let score = 0
let machineInput = []
let yourInput = []
let length_ = 3
let maxRNG = 4
let isMachineTurn = true
let trigger = false
let time = 0

function getRN(max){
    return Math.floor(Math.random()*max)
}

function machineGEN() {
    for (let i = 0; i < length_; i++) {
        machineInput.push(getRN(maxRNG))
    }
}

// debug
// machineGEN()
// console.log(machineInput)

/*async function demo() {
    for (let i = 0; i < 5; i++) {
        console.log(`Waiting ${i} seconds...`);
        await sleep(i * 1000);
        console.log(`Waiting ${i} seconds...`);
    }
    console.log('Done');
}
demo()
*/

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
async function frames() {
    if (score >= 15) {
        maxRNG = 5
    } else if (score >= 30) {
        maxRNG = 6
    } else {
        maxRNG = 4
    }
    disscore.innerHTML = score
    if (isMachineTurn) {
        machineGEN()
        key1.disabled = true
        key2.disabled = true
        key3.disabled = true
        key4.disabled = true
        key5.disabled = true
        key6.disabled = true
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
        machineInput = []
        isMachineTurn = false
    }
}


playgame.addEventListener("click", () => {
    location.replace("./game.html")
})
home.addEventListener("click", () => {
    location.replace("./main.html")
})
setInterval(frames, 1)