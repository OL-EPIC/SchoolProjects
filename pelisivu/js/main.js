const playgame = document.getElementById("game")
const playgamehome = document.getElementById("gamehome")
const home = document.getElementById("main")

playgamehome.addEventListener("click", () => {
    location.replace("./game.html")
})
playgame.addEventListener("click", () => {
    location.replace("./game.html")
})
home.addEventListener("click", () => {
    location.replace("./main.html")
})