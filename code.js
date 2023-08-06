const mazeMapSample = [ // FOR TESTING PURPOSES ONLY. Don't use this map
    "WWWWWWW",          // as one of the choices in your game.
    "S W   W",
    "W W W W",
    "W   W F",
    "WWWWWWW"
];

const mazeMap1 = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W   W",
    "W W W WWW WWWWW W WWW",
    "W W W  W      W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W       W W     W W",
    "W W  WWW   W W      F",
    "S     W W   W W W WWW",
    "WWWW  W  W  W W W W W",
    "W     W W W     W W W",
    "W W WWWWWW WWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];
const mazeMap2 = [
    "WWWWWSWWWWWWWWWWWWWWW",
    "W   W     W     W   W",
    "W W W WWW WWWWW W WWW",
    "W W W  W      W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W       W W     W W",
    "W W  WWW   W W      W",
    "W     W W   W W W WWW",
    "WWWW  W  W  W W W W W",
    "W     W W W     W W W",
    "W W WWWWWW WWW W W  W",
    "W       W       W   W",
    "WWWWWWWWWFWWWWWWWWWWW"
];

const mazeMap3 = [
    "WWWWWWWWWWWWWWWWWWWFW",
    "W   W        WWW  W W",
    "W W W WWW W WW  W W W",
    "W W W  W    W   W   W",
    "W WWW   W   WWW W WWW",
    "W         W     W W W",
    "W WWW WWWWW WW WW W W",
    "W W         W     W W",
    "W W  W W   W W      W",
    "W            WWWW WWW",
    "W  W  WWWW  W W WWW W",
    "W     W W       W   W",
    "W W WWW WW WWW WW WWW",
    "W       W           W",
    "WWSWWWWWWWWWWWWWWWWWW"
];
const sokobanMapSample = [ // FOR TESTING PURPOSES ONLY. Don't use this map
    " WWWWWW ",            // as one of the choices in your game.
    " WO   WW",  
    "WWW C  W",  
    "WSX    W",  
    "WWWWWWWW"  
];

const sokobanMap1 = [  
    "  WWWWW ",  
    "WWW   W ",  
    "WOSC  W ",  
    "WWW COW ",  
    "WOWWC W ",  
    "W W O WW",  
    "WC XCCOW",  
    "W   O  W",  
    "WWWWWWWW"  
];

// Your Code Here.
let mapLayout = mazeMap1
let isMapDisplayed = false
let isPlayerDisplayed = false
let maze = document.getElementById("maze")
let player = document.createElement("div")
let x = 0
let y = 0

function displayPlayer () {
    if (mapLayout === mazeMap1) {
        let div = document.getElementById("player1")
        player.className = "player"
        player.style.top = "500px"
        player.style.left = "0px"
        player.style.position = "relative"
        isPlayerDisplayed = true
        div.append(player)
        x = 9
        y = 0
    }
    if (mapLayout === mazeMap2) {
        let div = document.getElementById("player1")
        player.className = "player"
        player.style.top = "50px"
        player.style.left = "250px"
        player.style.position = "relative"
        isPlayerDisplayed = true
        div.append(player)
        x = 0
        y = 5
    }
    if (mapLayout === mazeMap3) {
        let div = document.getElementById("player1")
        player.className = "player"
        player.style.top = "750px"
        player.style.left = "100px"
        player.style.position = "relative"
        isPlayerDisplayed = true
        div.append(player)
        x = 14
        y = 2
    }
}

let maze1Button = document.getElementById("maze1Button")
maze1Button.addEventListener("click", () => {
    mapLayout = mazeMap1
    isPlayerDisplayed = false
    displayMap(mapLayout)
    })
let maze2Button = document.getElementById("maze2Button")
maze2Button.addEventListener("click", () => {
    mapLayout = mazeMap2
    isPlayerDisplayed = false
    displayMap(mapLayout)
})
let maze3Button = document.getElementById("maze3Button")
maze3Button.addEventListener("click", () => {
    mapLayout = mazeMap3
    isPlayerDisplayed = false
    displayMap(mapLayout)
})

function displayMap (mapString) {
    if (isMapDisplayed === true) {
        maze.innerHTML="";
        isMapDisplayed = false
    }
    if (isPlayerDisplayed === false) {
        displayPlayer()
    }

    isMapDisplayed = true
    mapString.forEach(function(row, index) {
        const arr = row.split("");
        arr.forEach(function(path, i) {
          let span = document.createElement("div");
          if (path === "W") {
            span.className = "mazeWall"
          }
          if (path === " ") {
            span.className = "mazePath"
          }
          if (path === "S") {
            span.className = "start"
          }
          if (path === "F") {
            span.className = "finish";
          }
          maze.appendChild(span)
        });
        maze.appendChild(document.createElement("br"))
      });
}

let hasWon = false

function win () {
    if (mapLayout[x][y] === "F") {
        let div = document.getElementById("player1")
        let win = document.createElement("h1")
        win.innerText = "You won!"
        div.append(win)
        hasWon = true
    }
    
}

function isWall (x, y) {
    if (mapLayout[x][y] === "W") {
        return true
    } else {
        return false
    }
}

document.addEventListener(
    "keydown",
    (event) => {

        if (hasWon === true && mapLayout === mazeMap2) {
            player.style.top = "750px"
            return player.style.left = "450px"
        }
        if (hasWon === true && mapLayout === mazeMap1) {
            player.style.top = "450px"
            return player.style.left = "1000px"
        }
      switch (event.key) {
        case "ArrowDown":
            if (x === 14) {
                return
            }
            let x1 = x + 1
            if (isWall(x1, y) === true) {
                return
            }
            player.style.top =
            parseInt(player.style.top) + 50 + "px";
            x += 1
            win()
          break;
        case "ArrowUp":
            if (x === 0){
                return
            }
            x2 = x - 1
            if (isWall(x2, y) === true) {
                return
            }
          player.style.top =
            parseInt(player.style.top) - 50 + "px";
            x2 = x - 1
            x -= 1
            win()
          break;
        case "ArrowLeft":
            if (y === 0) {
                return 
            }
            let y1 = y - 1
            if (isWall(x,y1) === true){
                return
            }
          player.style.left =
            parseInt(player.style.left) - 50 + "px";
            y -= 1
            win()
          break;
        case "ArrowRight":
            if (y=== 20) {
                return
            }
            let y2 = y + 1
            if (isWall(x, y2) === true) {
                return
            }
          player.style.left =
            parseInt(player.style.left) + 50 + "px";
            y += 1
            win()
          break;
        default:
          return; 
      }
    }
  );




