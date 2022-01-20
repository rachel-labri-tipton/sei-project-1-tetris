console.log("hello")

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const drawObj = (x, y) => {
  context.beginPath()
  context.arc(x + 7.5, y + 7.5,)
  context.fillStyle = 'hsl(45, 80%, 50%)'
  context.fill()
  context.closePath()
}

const objOne = {
  position: {
    x: 10,
    y: 250
  },
  width: 125,
  velocityX: 0,
  move() {
    if (objTrajectory.y > 0) {
      return
    }
    if (objPosition.x > this.position.x + this.width) {
      this.position.x += 3
    } else if (objPosition.x < this.position.x) {
      this.position.x -= 3
    }
  },
  draw() {
    context.fillStyle = "rebeccapurple"
    context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      10
    )
  }
}

const objPosition = {
  x: 50,
  y: 70
}

const objTrajectory = {
  x: 0,
  y: 2
}

const resetRect = () => {
  objPosition.x = 50
  objPosition.y = 70
  objTrajectory.x = 2
  objTrajectory.y = 2
}

const moveObj = () => {
  objPosition.x += objTrajectory.x
  objPosition.y += objTrajectory.y
}

const redrawCanvas = () => {
  // Clearing the rectangle
  context.clearRect(0, 0, 500, 500)
  // drawing the current objects
  drawRect(ballPosition.x, ballPosition.y)
  computerPaddle.draw()
  playerPaddle.draw()
}


const nextStep = () => {
  moveObj()
  redrawCanvas()
}

setInterval(nextStep, 5)

const handleKeydown = (event) => {
  if (event.code === "ArrowLeft") {
    // start moving player paddle left
    moveRect.velocityY = -2
  }
  if (event.code === "ArrowRight") {
    // start moving player paddle right
    moveRect.velocityX = 2
  }
  if (event.code=="ArrowUp") {

  }
}

const handleKeyup = (event) => {
  if (event.code === 'ArrowLeft') {
    // stop moving player paddle left
    playerPaddle.velocityX = 0
  }
  if (event.code === 'ArrowRight') {
    // stop moving player paddle right
    playerPaddle.velocityX = 0
  }
}




// listen for left/right arrow keydown and keyup events
// when the left key goes down, start moving player paddle left
// when the right key goes down, start moving player paddle right
// when either key goes up, stop moving in that direction

document.addEventListener('keydown', handleKeydown)
document.addEventListener('keyup', handleKeyup)



