
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
const colors = [
    "#7b99fa", 
    "#53cdd8", 
    "#96eab7", 
    "#f1f3b8", 
]

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
    [], 
    [], 
]
// const tPiece = [
//     [], 
//     [], 
//     [], 
//     [], 
// ]
const oPiece = [
    [0, 1, width, width+1], 
    [0, 1, width, width+1], 
    [0, 1, width, width+1], 
    [0, 1, width, width+1]
]

// const iPiece = [
//     [], 
//     [], 
//     [], 
//     [], 
// ]

const gamePieces = [lPiece]

let currentPosition = 4
let current = gamePieces[0][0]

//draw the first rotation in the first piece
function drawPiece() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add("pieces")
        })
}


startBtn.addEventListener("click", drawPiece)
// resetBtn.addEventListener("click", clearBoard)




// function clearPiece() {

// }






// const play = document.getElementById("play-button")
// play.addEventListener("click", drawRectangle)

