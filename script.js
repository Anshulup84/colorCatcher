let targetColor = ""
let score = 0;
let time = 30;
let timer;
let colors = ['red', 'orange', 'blue', 'green', 'black', 'grey', 'hotpink', 'purple', 'white', 'yellow', 'lightgreen', 'maroon', 'khaki', 'brown', 'navy', 'indigo']
const grid = document.getElementById("grid")
const targetColorDisplay = document.getElementById("target-color")
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
function getRandomColor() {

}

function shuffleArray(colors){

}

function createGrid() {
    grid.innerHTML = ""
    colors = shuffleArray(colors)
    targetColor = colors[Math.floor(Math.random() * 16)]
    targetColorDisplay.textContent= targetColor
    colors.forEach((color) => {
        const box = document.createElement("div")
        box.className = "color-box"
    })
}


function startGame (){
    score = 0;
    time = 30
    scoreDisplay.textContent = score
    timeDisplay.textContent = time;
    createGrid()
    clearInterval(timer)
    timer= setInterval(() => {
        time--;
        timeDisplay.textContent=time
        if(time ===0) {
            clearInterval(timer)
            alert(":timer_clock:Time's up! Your final score: "+score)
        }
    },1000)
}

