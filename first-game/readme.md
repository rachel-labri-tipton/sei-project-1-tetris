// Tetris 

This version of Tetris is my first project for the General Assembly Software Engineering Part-Time Bootcamp. 

Tetris is a classic arcade game created in 1984 by Alexey Pajitnov. If you're a 90's kid, you might of played it on your GameBoy. I remember playing it on my cousin's GameBoy and my family's HP PC that we got when I was 9. The game requires players to rotate and move falling Tetris pieces, tetriminoes. Players clear lines by completing horizontal rows of blocks without empty cells. If the pieces reach the top, the game is over.

I've used a grid and arrays to develop the gameboard and the pieces in this version of the game. 

What I loved about putting this project together was researching different ways to make the game. 

In this version of the game, players have one level and a scoreboard. 


DOM elements to include 
title of game
scoreboard 
information about the game (extra)
grid game board
mini grid that shows the piece that is up next 
sound button
start button 
reset button
player score


Phase I: I set up the grid and figured out how to move the object down the grid. Maybe setInterval before or after to play around with it or could add movement in after set interval. 

/Set up tetriminoes 
    / Event Listeners: 
    / KeyRight(moves the object to the right)
    / KeyLeft (moves the object to the left)
    /KeyUp (rotates the object)
    /KeyDown (moves object immediately to the bottom of the grid)
    detectCollisions of one object with the next (assign class taken )
    clearBottomLine (clears bottom line and adds 100 points to the score)
    Reset Function
    Reset Button 

Set up the prototype with grid to try. 

Phase II: comment out code for first object
          create second object
          repeat steps for first object and develop the keys for that object 


Phase III: comment out code for first and second object and develop third object 
            repeat steps for first object
            and develop key settings for that object

Phase IV: add sound button 
          sound for each object as it appears on the screen
          sound for the clearing of the bottomline

Phase V: creating the random object generator

Stretch Goals: if I have time, make a fourth object
               add cool sound to the game 

Functions to Write on Wednesday:


Thursday: Work on Design

Friday: equations to work
Set scoreboard in container and use flex to move it around



