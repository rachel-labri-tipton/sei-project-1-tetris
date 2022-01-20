
const grid = document.querySelector(".grid")
let squares = Array.from(document.querySelectorAll(".grid div"))
const scoreBoard= document.querySelector("#score")
let lineCount= document.querySelector("#lines")
let level= document.querySelector("#level")
const levelCount=document.querySelector("#level-2")
const startBtn = document.querySelector(".play-button")
const resetBtn = document.querySelector(".reset-button")
const soundBtn = document.querySelector(".sound-button")
const level2Btn = document.querySelector(".level-two")
 const level3Btn=document.querySelector(".level-three")
const rowLength = 10
let nextRandom = 0
let timerId 
let score = 0
let lines = 0
let color = [
  "#1ee494", 
  "pink", 
  "yellow",
  "lavender"
]


//the Pieces are set up with a series of arrays so all orientations of the pieces are housed in one constant/ the version of the piece that appears at the start of its journey down the screen will be index[0]

const lPiece =  [
    [1, rowLength+1, rowLength*2+1, 2], 
    [rowLength, rowLength+1, rowLength+2, rowLength*2+2], 
    [1, rowLength+1, rowLength*2+1, rowLength*2], 
    [rowLength, rowLength*2, rowLength*2+1, rowLength*2+2] 
]

const zPiece = [
    [0, rowLength, rowLength+1, rowLength*2+1], 
    [rowLength+1, rowLength+2, rowLength*2, rowLength*2+1], 
    [0,rowLength, rowLength+1, rowLength*2+1], 
    [rowLength+1, rowLength+2, rowLength*2, rowLength*2+1], 
]
const tPiece = [
    [1, rowLength, rowLength+1, rowLength+2], 
    [1, rowLength+1, rowLength+2, rowLength*2+1], 
    [rowLength, rowLength+1, rowLength+2, rowLength*2+1], 
    [1, rowLength, rowLength+1, rowLength*2+1], 
]
const oPiece = [
    [0, 1, rowLength, rowLength+1], 
    [0, 1, rowLength, rowLength+1], 
    [0, 1, rowLength, rowLength+1], 
    [0, 1, rowLength, rowLength+1]
]

const iPiece = [
    [1, rowLength+1, rowLength*3+1, rowLength*2+1], 
    [rowLength, rowLength+1, rowLength+2, rowLength+3], 
    [1, rowLength+1, rowLength*2+1, rowLength*3+1], 
    [rowLength, rowLength+1, rowLength+2, rowLength+3], 
]

const gamePieces = [lPiece, zPiece, tPiece, oPiece, iPiece]

let currentPosition = 4
let currentRotation = 0
let randomColor = Math.floor(Math.random()*color.length)
let newColor = color[randomColor]
let randomPiece = Math.floor(Math.random()*gamePieces.length)
let currentPiece = gamePieces[randomPiece][currentRotation]




//function that draws the first iteration of the first piece of the first array
//function that selects a random iteration of the piece 
function drawPiece() {
        currentPiece.forEach(index => {
            squares[currentPosition + index].classList.add("pieces")
            squares[currentPosition + index].style.backgroundColor = color[randomPiece]
        })
}

function undrawPiece() {
    currentPiece.forEach(index=> {
        squares[currentPosition + index].classList.remove("pieces")
        squares[currentPosition + index].style.backgroundColor = ""
    })
    console.log(squares)
}



function moveDownScreen() {
    undrawPiece()
    currentPosition+=rowLength
    drawPiece()
    stopMovement()
    console.log(currentPosition)
}


function stopMovement () {
    if (currentPiece.some(index=>squares[currentPosition + index + rowLength].classList.contains("filled"))||currentPiece.some(index=>squares[currentPosition + index + rowLength].classList.contains("bottom"))) {
      currentPiece.forEach(index=>squares[currentPosition + index].classList.add("filled"))
       endGame()
       randomPiece = Math.floor(Math.random()*gamePieces.length)
        currentPiece = gamePieces[randomPiece][currentRotation]
        currentPosition = 4
        drawPiece ()
        addScore()
    }
}

function moveLeft() {
    undrawPiece()
    const leftEdge = currentPiece.some(index=> (currentPosition+index) % rowLength === 0) 
    if (!leftEdge) currentPosition -=1
    if (currentPiece.some(index=> squares[currentPosition + index].classList.contains("filled"))) 
        {currentPosition  +=1}
    drawPiece()
}

function moveRight() {
    undrawPiece()
    const rightEdge = currentPiece.some(index=> (currentPosition+index) % rowLength === rowLength-1) 
    if (!rightEdge) currentPosition +=1
    if (currentPiece.some(index=> squares[currentPosition + index + 2].classList.contains("filled"))) {
        currentPosition  -=1
    }
    drawPiece()
}

function rotatePiece () {
    undrawPiece()
    currentRotation ++
    if (currentRotation === currentPiece.length) {
        currentRotation = 0
    }
    currentPiece = gamePieces[randomPiece][currentRotation]
    checkRotatedPiece()
    drawPiece()
}
// sound functionality 

function onContact (event) {
        const audio = document.createElement("audio")
        audio.src = "audio files /cool-click-tone.wav"
        audio.play()
    }


 function winSnd (event) {
   const audio = document.createElement("audio")
        audio.src = "audio files /win-sound.wav"
        audio.play()
 }
   
   function movePieceSnd (event) {
     const audio = document.createElement("audio")
        audio.src = "audio files /movepiece.mp3"
        audio.play()
    }

    // function movePieceDwnSnd ()
    function rotatePieceSnd (event) {
      const audio = document.createElement("audio")
        audio.src = "audio files /melodic-click.wav"
        audio.play()
    }
// function dropPieceSnd (event) {
//   const audio = document.createElement("audio")
//         audio.src = "audio files /cool-click-tone.wav"
//         audio.play()
// }

    function gameOverApplause(event) {
        const audio = document.createElement("audio")
        audio.src = "audio files /win-sound.wav"
        audio.play()}

    function gameOverLose(event) {
      const audio = document.createElement("audio")
        audio.src = "audio files /game-over-3.wav"
        audio.play()
    }

    function scoreSnd () {
      const audio = document.createElement("audio")
        audio.src = "audio files /score-sound.wav"
        audio.play()
    }

    function playTheme (event) {

      const audio = document.createElement("audio")
      audio.src = "audio files /Tetris.mp3"
      audio.play()
      soundBtn.innerHTML = "Stop Theme"
      togglePlay()
    }

    function togglePlay() {
       return audio.paused ? audio.play() : audio.pause()
    }
    soundBtn.addEventListener("click", playTheme)


    // function scoreSnd()

function keyControls (e) {
    if (e.keyCode===37) {
        moveLeft()
        movePieceSnd ()
        // pieceMovementSound()
    } else if (e.keyCode===38) {
        rotatePiece()
        rotatePieceSnd ()
       
    } else if (e.keyCode===39) {
        moveRight()
        movePieceSnd ()
    } 
}
function dropPiece (e) {
  if (e.keyCode===32|| e.keyCode===40) {
        moveDownScreen()
        movePieceSnd ()
    }     
    } 
  

document.addEventListener("keyup", keyControls)
document.addEventListener("keydown", dropPiece)
//fixing rotation of pieces at the edge 
 
function isAtRight() {
    return currentPiece.some(index=> (currentPosition + index + 1) % rowLength === 0)  
  }
  
  function isAtLeft() {
    return currentPiece.some(index=> (currentPosition + index) % rowLength === 0)
  }
function checkRotatedPiece(P) {
   P=P || currentPosition 
    if ((P + 1) % rowLength <4) {
        if (isAtRight()) {
        currentPosition += 1
        checkRotatedPiece(P)
        }
    } 
    else if (P % rowLength > 5) {
    if (isAtLeft()) {
        currentPosition -= 1
        checkRotatedPiece(P)
    }
}
}



 

  function addScore() {
    for (let i = 0; i < 199; i +=rowLength) {
      const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]
      if(row.every(index => squares[index].classList.contains("filled"))) {
        score +=100
        lines += 1
        scoreBoard.innerHTML = score
        lineCount.innerHTML = lines 

        row.forEach(index => {
          squares[index].classList.remove("filled")
          squares[index].classList.remove("pieces")
          squares[index].style.backgroundColor = ""
        })
        const squaresRemoved = squares.splice(i, rowLength)
        squares = squaresRemoved.concat(squares)
        squares.forEach(cell => grid.appendChild(cell))
          scoreSnd()
      }
    }
  }

// //variables and functions for the box that shows the thing that comes up 
// const miniGridSquares = document.querySelectorAll(".mini-grid div")
//   let currentRotation = 0
//   //the pieces without rotations
//   // const nextPiece = [
//   //   [1, rowLength+1, rowLength*2+1, 2], //lPiece
//   //   [0, rowLength, rowLength+1, rowLength*2+1], //zPiece
//   //   [1, rowLength, rowLength+1, rowLength+2], //tPiece
//   //   [0, 1, rowLength, rowLength+1], //oPiece
//   //   [1, rowLength+1, rowLength*2+1, rowLength*3+1] //iPiece
//   // ]

//   //display the shape in the mini-grid display
//   function displayPiece() {
//     miniGridSquares.forEach(div => {
//       div.classList.remove("pieces")
//       div.style.backgroundColor = ""
//     })
//     nextPiece.forEach( index => {
//       miniGridSquares[currentPosition + index].classList.add("pieces")
//       miniGridSquares[currentPosition + index].style.backgroundColor = ""
//     })
//   }

 function nextStep () {
    if (timerId) { 
      clearInterval(timerId)
      timerId = null 
    } else {
      drawPiece()
      timerId = setInterval(moveDownScreen, 650)
      nextRandom = Math.floor(Math.random()*gamePieces.length)
      // displayShape()
    }}
    

  startBtn.addEventListener("click", nextStep)
//This is a part of the game I couldn't get to work
  // const displaySquares = document.querySelectorAll(".mini-grid div")
  // const rowLength = 10
  // const displayIndex = 0


  //the pieces without rotations
  // const upNextPieces = [
  //   [1, rowLength+1, rowLength*2+1, 2], //lTetromino
  //   [0, rowLength, rowLength+1, rowLength*2+1], //zTetromino
  //   [1, rowLength, rowLength+1, rowLength+2], //tTetromino
  //   [0, 1, rowLength, rowLength+1], //oTetromino
  //   [1, rowLength+1, rowLength*2+1, rowLength*3+1] //iTetromino
  // ]

  //display the shape in the mini-grid display
  // function displayShape() {
  //   //remove any trace of a tetromino form the entire grid
  //   displaySquares.forEach(square => {
  //     square.classList.remove("pieces")
  //     square.style.backgroundColor = ""
  //   })
  //   nextPiece.forEach( index => {
  //     displaySquares[currentPosition + index].classList.add("pieces")
  //     displaySquares[currentPosition + index].style.backgroundColor = "rebeccapurple"
  //   })
  // }


   function levelUp2 () {
    if (timerId) { 
      clearInterval(timerId)
      timerId = null 
    } else {
      drawPiece()
      timerId = setInterval(moveDownScreen, 500)
      nextRandom = Math.floor(Math.random()*gamePieces.length)
      document.getElementById("level").innerHTML=2
      // displayShape()
    }}

  level2Btn.addEventListener("click", levelUp2)
 
  function levelUp3 () {
    if (timerId) { 
      clearInterval(timerId)
      timerId = null 
    } else {
      drawPiece()
      timerId = setInterval(moveDownScreen, 400)
      nextRandom = Math.floor(Math.random()*gamePieces.length)
      document.getElementById("level").innerHTML=3
      // displayShape()
    }}
    
    level3Btn.addEventListener("click", levelUp3)


  function undrawBoard () {
  squares.forEach(index=> {
 // squares[index].classList.remove("pieces")
  index.classList.remove("pieces")

  // squares[index].classList.remove("filled")
  index.classList.remove("filled")

  // squares[index].style.backgroundColor = ""
  index.style.backgroundColor = ""
    }
)
  score = 0
  lines = 0
  scoreBoard.innerHTML = score
  lineCount.innerHTML = lines }


  function resetGame() {
    if (timerId) {
      undrawBoard()
    }
    } 
  
  resetBtn.addEventListener("click", resetGame)

// function addLevel2() {
//         const newButton = document.createElement("button")
//         newButton.innerHTML = "Level 2"
//         document.getElementById("btn-menu").appendChild(newButton)
//         newButton.classList.add("btn")
//         const level2Btn = document.querySelector(".level-two")
//       }


  function endGame() {
    if (currentPiece.some(index=> currentPosition+index<rowLength*3)) {
      // const endGameMessage = document.getElementById("winning-info")
      // endGameMessage.innerHTML = `Game over. You scored ${score} points and created ${lines} lines. Wanna try again? Click "Reset Board" then chosen level button twice. `
      clearInterval(timerId)
      gameOverLose()
      }
      else if (score===1000) {
        // endGameMessage.innerHTML = `Amazing! You completed a level. Have a go at the next level!`
        clearInterval(timerId)
        winSnd()
      }
      
     }


