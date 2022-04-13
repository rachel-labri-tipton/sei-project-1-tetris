
# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1:  **Tetris 2.022**

Hi there, this is my first full coding project completed for the the **General Assembly Software Engineering Immersive Flex Bootcamp** (Nov 2021 - May 2022). 

Tetris is a classic arcade game created in 1984 by Alexey Pajitnov. If you're a 90's kid, you might of played it on your GameBoy. The game requires players to rotate and move falling Tetris pieces, tetriminoes (each piece is made of 4 blocks). Players clear lines by completing horizontal rows of blocks without empty cells. If the pieces reach the top, the game is over. 

I've named my game **Tetris 2.022**. In my game, if the pieces reach the top, the game ends and the player is prompted to play again. If the player scores 1,000 on a certain level, they "win" and are asked to try another level. Before starting to code, I read about the game and researched different approaches to handling the drawing of the pieces and their movement. 


### THE LOGIC BEHIND THE GAME 

The game is built around the following functions: 

#### DRAWING THE PIECES

- drawPiece()
- undrawPiece()
- moveDownScreen()
- stopMovement()

#### MOVING THE PIECES

- moveLeft()
- moveRight()
- rotatePiece()

#### FIXING ROTATION OF PIECES AT THE EDGE OF THE BOARD

- isAtRight()
- isAtLeft()
- checkRotatedPiece() 

#### SCORE AND LINE COUNT 

- addScore()

#### LEVELS:
- this part of the code is repetitive, but I didn't find time to make it more elegant
- nextStep() (original play function)
- levelUp2() (time interval increased)
- levelUp3() (time interval increased)

#### ENDING PLAY 

- endGame()   
- resetGame()
- undrawBoard()


#### SOUND FUNCTIONALITY

- each movement of a piece has a sound
- button to play the original Tetris song

#### THE FUN STUFF

I loved the following about this project:

- developing a process for taking on this type of project 
- researching different approaches to the game and reading up on its origin story 
- figuring out the puzzle of mapping arrays onto a bigger array 
- adding styling and sound 
- finding a stopping point and tying up loose ends 

#### FUTURE VERSIONS

I would like a future version of this game to include the following: 
- function that changes the color of the screen when the level is changed 
- option for the player to play for a high score
- function that draws the upcoming piece in a small grid next to the board, something I worked on for awhile, but decided to let it go as the deadline for the project was approaching 
- function that lets a piece drop immediately with the space bar





