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


## Reflection

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

I started with thinking that I should move the player through the maze array itself, and just display that, but I was not able to work out how to actually do that properly. 