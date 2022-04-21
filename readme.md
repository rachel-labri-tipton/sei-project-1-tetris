
# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project 1:  **Tetris 2.022**


Hi there, this is my first full coding project completed for the the **General Assembly Software Engineering Immersive Part-Time Course** (Nov 2021 - May 2022). 

# Goal 

After getting my feet wet with JavaScript, I was asked asked to build a browser-based game of our choice using vanilla JavaScript. 

# Technologies Used 

- HTML5 with HTML5 audio
- CSS3 
- JavaScript(ES6)
- Git
- GitHub
- Google Fonts 
- Sound Website 
- Netlify

#You can play the deployed version here:

![](https://elegant-murdock-a314ad.netlify.app/)


## Brief
 **Tetris 2.022** is my version of the classic arcade game created in 1984 by Alexey Pajitnov. If you're a 90's kid, you might of played it on your GameBoy. Tetris requires players to rotate and move falling Tetris pieces,tetriminoes, as their called. Players clear lines by completing horizontal rows of blocks where there are no empty cells. If the pieces reach the top of the board, the game is over. 

 In my game, if the pieces reach the top of the board, the game ends and the player is prompted to play again. If the player scores 1,000 on a certain level, they "win" and are asked to try another level. 


![](images/project-1-gif-1.gif)


 ## How to Play Tetris 2.022
  - Right Arrow = moves a piece right
  - Up Arrow = rotates a piece
  - Left Arrow = moves a piece left
  - Down Arrow & Space Bar = moves a piece down
  - Each row of blocks you fill is 100 points.
  - There are 3 level buttons that increase teh speed at which the tetriminoes fall.
  - Once you've reached 1000 points at each level, the game prompts you try the next level. 

## DEVELOPMENT PROCESS

I broke the work into stages for myself. 
- Phase I: 

#### DRAWING THE PIECES

- drawPiece()
- undrawPiece()
- moveDownScreen()
- stopMovement()

#### ROTATING AND MOVING THE PIECES

- moveLeft()
- moveRight()
- rotatePiece()

#### MANAGING COLLISIONS AND FIXING ROTATION OF PIECES AT THE EDGE OF THE BOARD

- isAtRight()
- isAtLeft()
- checkRotatedPiece() 

#### SCORE AND LINE COUNT 

Keeping score in my game is quite simple 
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

The following are apects of the project that I had fun with: 

- Developing a process for taking on this type of project. As an artist, I think a lot about the creative process and how decisions are made. So for me, just as important as figuring out how to code Tetris was figuring out how to manage my time so that I'd be able to deliver an mvp that looked good. This meant clearly defining my mvp and knowing what features I might need to stop working on so I wasn't working right up until the final deadline. 
- Researching different approaches to coding the game and reading up on the game's origin story.
- Figuring out how to map the tetramino arrays onto my grid.
- Adding styling and sound => I really enjoyed choosing a fun font and sound effects for my game.
- Finding a stopping point and tying up loose ends of the game the day before I needed to present.. 

#### CHALLENGES 

 - In some versions of tetris that I looked at, the next piece to drop is shown in a small grid to the side of the playing board. I worked on this feature but decided to let this stretch goal go as the deadline for the project approached.
 - Despite spending several hours working on it and time spent with my instructos, I could not get the button that plays the Tetris theme song to stop once it started. 

#### FUTURE VERSIONS

If I'd had more time on this project, here's what I'd have worked on: 

- Changing the background color of the screen when the level is changed.
- Implementing an option for a player to play for a high score that would be saved.
- Implementing a function that lets a piece drop immediately with the space bar. I worked on this as well but had some difficulty with it so decided it didn't need to be part of my mvp.
- Figure out how to stop the Tetris theme song.





