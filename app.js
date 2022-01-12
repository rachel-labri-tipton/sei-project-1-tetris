
const grid = document.querySelector(".grid")
let squares = Array.from(document.querySelectorAll(".grid div"))
const scoreDisplay = document.querySelector("#score")
const startBtn = document.querySelector(".play-button")
const resetBtn = document.querySelector(".reset-button")
const soundBtn = document.querySelector(".sound-button")

const width = 10
let nextRandom = 0
let timerId
let score = 0


//the Pieces are set up with a series of arrays so all orientations of the pieces are housed in one constant/ the version of the piece that appears at the start of its journey down the screen will be index[0]

const lPiece =  [
    [1, width+1, width*2+1, 2], 
    [width, width+1, width+2, width*2+2], 
    [1, width+1, width*2+1, width*2], 
    [width, width*2, width*2+1, width*2+2] 
]

const zPiece = [
    [0, width, width+1, width*2+1], 
    [width+1, width+2, width*2, width*2+1], 
    [0,width, width+1, width*2+1], 
    [width+1, width+2, width*2, width*2+1], 
]
const tPiece = [
    [1, width, width+1, width+2], 
    [1, width+1, width+2, width*2+1], 
    [width, width+1, width+2, width*2+1], 
    [1, width, width+1, width*2+1], 
]
const oPiece = [
    [0, 1, width, width+1], 
    [0, 1, width, width+1], 
    [0, 1, width, width+1], 
    [0, 1, width, width+1]
]

const iPiece = [
    [1, width+1, width*3+1, width*2+1], 
    [width, width+1, width+2, width+3], 
    [1, width+1, width*2+1, width*3+1], 
    [width, width+1, width+2, width+3], 
]

const gamePieces = [lPiece, zPiece, tPiece, oPiece, iPiece]

let currentPosition = 4
let currentRotation = 0

let randomPiece = Math.floor(Math.random()*gamePieces.length)
let currentPiece = gamePieces[randomPiece][currentRotation]


//function that draws the first iteration of the first piece of the first array
//function that selects a random iteration of the piece 
function drawPiece() {
        currentPiece.forEach(index => {
            squares[currentPosition + index].classList.add("pieces")
        })
}

function undrawPiece() {
    currentPiece.forEach(index=> {
        squares[currentPosition + index].classList.remove("pieces")
    })
}

function moveDownScreen() {
    undrawPiece()
    currentPosition+=width
    drawPiece()
    stopMovement()
}

// function movePiece () {
//     if (keycode===)
// }

function stopMovement () {
    if (currentPiece.some(index=>squares[currentPosition + index + width].classList.contains("filled"))) {
        currentPiece.forEach(index=>squares[currentPosition + index].classList.add("filled"))
        randomPiece = Math.floor(Math.random()*gamePieces.length)
        currentPiece = gamePieces[randomPiece][currentRotation]
        currentPosition = 4
        drawPiece ()
    }
}

function moveLeft() {
    undrawPiece()
    const leftEdge = currentPiece.some(index=>squares[currentPosition+index] % width === 0) 
    if (!leftEdge) {currentPosition -=1}
    if (currentPiece.some(index=> squares[currentPosition + index ].classList.contains("filled"))) {
        currentPosition  +=1
    }
    drawPiece()
}

function keyControls (e) {
    if (e.keycode===37) {
        moveLeft()
    }
}

function nextStep () {
    keyControls()
}



startBtn.addEventListener("click", nextStep)
resetBtn.addEventListener("click", undrawPiece)
timerId = setInterval (moveDownScreen, 1000)


  // } else if (e.keyCode=== ) {
    //     //moveRight()
    // } else if (e.keyCode=== ) {

// resetBtn.addEventListener("click", undrawPiece)




// function clearPiece() {

// }






// const play = document.getElementById("play-button")
// play.addEventListener("click", drawRectangle)

