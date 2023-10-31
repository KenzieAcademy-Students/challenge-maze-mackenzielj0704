# Kenzie Academy Challenge: Maze

Follow the instructions provided on my.kenzie.academy for this challenge. The `code.js` file is a placeholder. Feel free to rename it add additional files to the project.

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required sections are the **Project Plan** and **Reflection** below. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) of the basic syntax).

## Project Plan
    
1. Create the maps for the player to chose
    1. Create string maps
    2. create buttons that select each map as the layout
        1. set eventlisteners for each button that will set the variable "mapLayout" as what the button is
2. Create function that displays map
    1. Accepts mapString as param
    2. map through mapString, (W = wall, S= start, F= finish) 
        1. if W, dispay block for wall
        2. if S, display word start
        3. if F, display word finish
3. Create function to display player
    1. find place of start, place player there through relative positioning and set coords as where start exists in array
    2. change isPlayerDisplayed to true
4. Create function to move player
    1. Create an eventListener for "keydown"
    2. Create movePlayer function
        1. accepts event as param
        2. if hasWon = true, return mapLayout = mapString
        3. Create code that reacts to arrow keys
        4. for each arrow press, map through mapString 
            1. for each arrow, find where player coords are and where they would be if player moved
            2. create function that checks if it is wall
                1. use coords to search array for that spot, if it = "W", player cannot move
            3. run isWall before moving player
            4. run win function after each turn
4. Create win function
    1. finds players coords
    2. search through array for that spot in it
    3. if that spot = "F", change hasWon to true, and display "You won!" on page
5. Create Sokoban puzzle out of maze
    1. create crate and storage locations
        1. repersented on the map a C, s, X, and @
    2. create display crate 
        1. in display map, it looks for C to repersent crates, classname is crate, id is crate${number}, and give it the styles the player has so it can move
        2. push the x and y of the spot to cratesX and cratesY
        3. if path = X, crate is already on storage x and y are pushed to crates x and y, and won x and y arrays
    3. create how player moves crate
        1. function for moving left, right, up and down
        2. if player is aginst crate, function for moving it runs based on the arrow
        3. moving itself runs similar to player, but crate x and y is held in arrays so you loop through array to get x for crate being moved, and use that index to get y
        4. check for wall and other crates the same as the isWall function works, but for crates use the array for crates x and y instead of map
    4. create storage spots
        1. in display map function, if path = s, classname is storage
        2. push its x and y to win x and y arrays
        3. if path = @, classname is "storage start", everything else is same for this storage spot
    5. create win function
        1. in win function, edit so origional only runs on the maze maps, and new will only run on the new maps
        2. run function to check if all storage spots are occupied, if true run the code that origional runs when game is won
    6. create check if all occupied function
        1. loop through winX array, and use index to get matching y array, storage occupied = false
        2. loop through crates x array, and use index to get matching y
        3. compare win x and x, and win y and y, if all are the same, storage occupied = true, else it returns  false
        4. if it gets through loops, return true

## Reflection

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

I started with thinking that I should move the player through the maze array itself, and just display that, but I was not able to work out how to actually do that properly.

I originally was going to check if game was won by using an array that would hold false for each storage spot, but i could not figure out a way to change the true back to false if the player moved the crate back off the storage