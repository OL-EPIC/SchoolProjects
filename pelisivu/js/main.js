const playgame = document.getElementById("game")
const playgamehome = document.getElementById("gamehome")
const home = document.getElementById("main")
let score = 0
let remember = []
let length_ = 3
let maxRNG = 4
let isMachineTurn = false

function machineGEN() {
    for (let i = 0; i <= length_; i++) {
        remember.push(Math.random(1, maxRNG))
    }
}

function frames() {
    if (score >= 15) {
        maxRNG = 5
    } else if (score >= 30) {
        maxRNG = 6
    } else {
        maxRNG = 4
    }

}

playgame.addEventListener("click", () => {
    location.replace("./game.html")
})
playgamehome.addEventListener("click", () => {
    location.replace("./game.html")
})
home.addEventListener("click", () => {
    location.replace("./main.html")
})