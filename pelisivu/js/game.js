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

function getRN(max){
    return Math.floor(Math.random()*max)
}

function machineGEN() {
    for (let i = 0; i < length_; i++) {
        machineInput.push(getRN(maxRNG))
    }
}

// debug
machineGEN()
console.log(machineInput)

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
async function machineDisplay(block) {
    await sleep(1000)
    if (block === 0){
        key1.style.backgroundColor = "black"
        console.log(0)
        await sleep(5000)
    }else if (block === 1){
        key2.style.backgroundColor = "black"
        console.log(1)
        await sleep(5000)
    }else if (block === 2){
        key3.style.backgroundColor = "black"
        console.log(2)
        await sleep(5000)
    }else if (block === 3){
        key4.style.backgroundColor = "black"
        console.log(3)
        await sleep(5000)
    }else if (block === 4){
        key5.style.backgroundColor = "black"
        console.log(4)
        await sleep(5000)
    }else if (block === 5){
        key6.style.backgroundColor = "black"
        console.log(5)
        await sleep(5000)
    }
    trigger = true
    key1.style.animation = "switchcol2 0.2s linear 0s 1 normal"
    key2.style.animation = "switchcol2 0.2s linear 0s 1 normal"
    key3.style.animation = "switchcol2 0.2s linear 0s 1 normal"
    key4.style.animation = "switchcol2 0.2s linear 0s 1 normal"
    key5.style.animation = "switchcol2 0.2s linear 0s 1 normal"
    key6.style.animation = "switchcol2 0.2s linear 0s 1 normal"
}


function frames() {
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
            if (!trigger) {
                if (val === 0){
                    machineDisplay(0)
                }else if (val === 1) {
                    machineDisplay(1)
                }else if (val === 2) {
                    machineDisplay(2)
                }else if (val === 3) {
                    machineDisplay(3)
                }else if (val === 4) {
                    machineDisplay(4)
                }else if (val === 5) {
                    machineDisplay(5)
                }
            }
            trigger = false
        }
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