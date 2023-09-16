
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
]
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
]

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
]

const sokobanMap1 = [  
    "  WWWWW ",
    "WWW   W ",
    "WsSC  W ",
    "WWW CsW ",
    "WsWWC W ",
    "W W s WW",
    "WC XCCsW",
    "W   s  W",
    "WWWWWWWW", 
]

const sokobanMap2 = [  
    "WWWWWWWW",
    "WsW   SW",
    "W WC WWW",
    "W     sW",
    "W WWC  W",
    "W     CW",
    "W WCW  W",
    "WsX   sW",
    "WWWWWWWW", 
]

let mapLayout = mazeMap1
let isMapDisplayed = false
let isPlayerDisplayed = false
let isCratesDisplayed = false
let maze = document.getElementById("maze")
let sokoban = document.getElementById("sokoban")
let player = document.createElement("div")
let dot = document.createElement("div")
document.body.append(dot)
let x = 0
let y = 0
let cratesX = []
let cratesY = []
let winXSpots = []
let winYSpots = []

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
    if (mapLayout === sokobanMap1) {
        let div = document.getElementById("player1")
        player.className = "player"
        player.style.top = "150px"
        player.style.left = "100px"
        player.style.position = "relative"
        isPlayerDisplayed = true
        div.append(player)
        x = 2
        y = 2
    }
    if (mapLayout === sokobanMap2) {
        let div = document.getElementById("player1")
        player.className = "player"
        player.style.top = "100px"
        player.style.left = "300px"
        player.style.position = "relative"
        isPlayerDisplayed = true
        div.append(player)
        x = 1
        y = 6 
    }
}

let maze1Button = document.getElementById("maze1Button")
maze1Button.addEventListener("click", () => {
    mapLayout = mazeMap1
    isPlayerDisplayed = false
    
    cratesX = []
    cratesY = []
    winXSpots = []
    winYSpots = []
    isCratesDisplayed = false
    dot.innerHTML = ''

    displayMap(mapLayout)
    })
let maze2Button = document.getElementById("maze2Button")
maze2Button.addEventListener("click", () => {
    mapLayout = mazeMap2
    isPlayerDisplayed = false

    cratesX = []
    cratesY = []
    winXSpots = []
    winYSpots = []
    isCratesDisplayed = false
    dot.innerHTML = ''

    displayMap(mapLayout)
})
let maze3Button = document.getElementById("maze3Button")
maze3Button.addEventListener("click", () => {
    mapLayout = mazeMap3
    isPlayerDisplayed = false

    cratesX = []
    cratesY = []
    winXSpots = []
    winYSpots = []
    isCratesDisplayed = false
    dot.innerHTML = ''

    displayMap(mapLayout)
})

let SokobanButton1 = document.getElementById('SokobanMap1Button')
SokobanButton1.addEventListener("click", () => {
    mapLayout = sokobanMap1
    isPlayerDisplayed = false

    cratesX = []
    cratesY = []
    winXSpots = []
    winYSpots = []
    isCratesDisplayed = false
    dot.innerHTML = ''
    displaySMap(mapLayout)
})

let SokobanButton2 = document.getElementById('SokobanMap2Button')
SokobanButton2.addEventListener("click", () => {
    mapLayout = sokobanMap2
    isPlayerDisplayed = false

    cratesX = []
    cratesY = []
    winXSpots = []
    winYSpots = []
    isCratesDisplayed = false
    dot.innerHTML = ''
    displaySMap(mapLayout)
})

function handleCrateAndStorage () {
    if (mapLayout === sokobanMap1) {
        let div = document.createElement('div')
        div.className = "xDot"
        div.style.position = "relative"
        div.style.top = "-150px"
        div.style.left = "150px"
        dot.append(div)
    }
    if (mapLayout === sokobanMap2) {
        let div = document.createElement('div')
        div.className = "xDot"
        div.style.position = "relative"
        div.style.top = "-100px"
        div.style.left = "100px"
        dot.append(div)
    }
}

function displaySMap (mapString) {
    if (isMapDisplayed === true) {
        let div = document.getElementById("player1")
        sokoban.innerHTML=""
        maze.innerHTML = ""
        div.innerHTML=""
        hasWon = false
        isMapDisplayed = false
    }
    if (isPlayerDisplayed === false) {
        displayPlayer()
    }
    let mapx = 0
    let mapy = 0
    let crateindex = 1

    isMapDisplayed = true
    mapString.forEach(function(row, index) {
        const arr = row.split("");
        arr.forEach(function(path, i) {
          let span = document.createElement("div")
          if (path === "W") {
            span.className = "mazeWall"
          }
          if (path === " ") {
            span.className = "mazePath"
          }
          if (path === "S") {
            span.className = "start"
          }
          if (path === 's') {
            span.className = "storage"
            winXSpots.push(mapx)
            winYSpots.push(mapy)
          }
          if (path === "C") {
            span.className = "crate"
            span.id = `crate${crateindex}`
            span.style.top = "0px"
            span.style.left = "0px"
            span.style.position = "relative"
            cratesX.push(mapx)
            cratesY.push(mapy)
            crateindex += 1
          }
          if (path === '@') {
            span.className = "sStart"
            winXSpots.push(mapx)
            winYSpots.push(mapy)

          }
          if (path === "X") {
            span.className = "storageCrate"
            span.id = `crate${crateindex}`
            crateindex += 1
            cratesX.push(mapx)
            cratesY.push(mapy)
            winXSpots.push(mapx)
            winYSpots.push(mapy)
            span.style.top = "0px"
            span.style.left = "0px"
            span.style.position = "relative"
          }
          sokoban.appendChild(span)
          mapy += 1
        });
        sokoban.appendChild(document.createElement("br"))
        mapx += 1
        mapy = 0
      });
    handleCrateAndStorage()
}

function displayMap (mapString) {
    if (isMapDisplayed === true) {
        let div = document.getElementById("player1")
        maze.innerHTML=""
        sokoban.innerHTML=""
        div.innerHTML=""
        hasWon = false
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
    if (mapLayout === mazeMap1 || mapLayout === mazeMap2 || mapLayout === mazeMap3){
        if (mapLayout[x][y] === "F") {
            let div = document.getElementById("player1")
            let win = document.createElement("h1")
            win.innerText = "You won!"
            div.append(win)
            hasWon = true
        }
    }
    if (mapLayout === sokobanMap1 || mapLayout === sokobanMap2) {
        if (checkAllStorageOccupied()) {
            let div = document.getElementById("player1")
            let win = document.createElement("h1")
            win.innerText = "You won!"
            div.append(win)
            hasWon = true
        }
    }
}

function checkAllStorageOccupied() {
    for (let index = 0; index < winXSpots.length; index++) {
        const winX = winXSpots[index]
        const winY = winYSpots[index]
        let storageOccupied = false
        for (let index = 0; index < cratesX.length; index++) {
            const x = cratesX[index];
            const y = cratesY[index]
            if (winX === x && winY === y) {
                storageOccupied = true
                break
            }
        }
        if (!storageOccupied) {
            return false
        }
    }
    return true
}

function isWall (x, y) {
    if (mapLayout[x][y] === "W") {
        return true
    } else {
        return false
    }
}

function moveCrateUp(x,y) {
    for (let index = 0; index < cratesX.length; index++) {
        const crate = document.getElementById(`crate${index + 1}`)
        const element = cratesX[index]
        const e = cratesY[index]
        if (x === element && y === e) {
            if (mapLayout[x - 1][y] === "W") {
                return true
            }
            for (let index = 0; index < cratesX.length; index++) {
                const x = cratesX[index]
                const y = cratesY[index]
                if (element - 1 === x && e === y) {
                    return true
                }
            }
            cratesX[index] -= 1
            crate.style.top =
            parseInt(crate.style.top) - 50 + "px"
        }
    }
    return false
}
function moveCrateDown(x,y) {
    for (let index = 0; index < cratesX.length; index++) {
        const crate = document.getElementById(`crate${index + 1}`)
        const element = cratesX[index]
        const e = cratesY[index]
        if (x === element && y === e) {
            if (mapLayout[x + 1][y] === "W") {
                return true
            }
            for (let index = 0; index < cratesX.length; index++) {
                const x = cratesX[index]
                const y = cratesY[index]
                if (element + 1 === x && e === y) {
                    return true
                }
            }
            cratesX[index] += 1
            crate.style.top =
            parseInt(crate.style.top) + 50 + "px"
        }
    }
    return false
}
function moveCrateLeft(x,y) {
    for (let index = 0; index < cratesX.length; index++) {
        const crate = document.getElementById(`crate${index + 1}`)
        const element = cratesX[index]
        const e = cratesY[index]
        if (x === element && y === e) {
            if (mapLayout[x][y - 1] === "W") {
                return true
            }
            for (let index = 0; index < cratesX.length; index++) {
                const x = cratesX[index];
                const y = cratesY[index]
                if (element === x && e - 1 === y) {
                    return true
                }
            }
            cratesY[index] -= 1
            crate.style.left =
            parseInt(crate.style.left) - 50 + "px"
        }
    }
    return false
}
function moveCrateRight(x,y) {
    for (let index = 0; index < cratesX.length; index++) {
        const crate = document.getElementById(`crate${index + 1}`)
        const element = cratesX[index]
        const e = cratesY[index]
        if (x === element && y === e) {
            if (mapLayout[x][y + 1] === "W") {
                return true
            }
            for (let index = 0; index < cratesX.length; index++) {
                const x = cratesX[index];
                const y = cratesY[index]
                if (element === x && e + 1 === y) {
                    return true
                }
            }
            cratesY[index] += 1
            crate.style.left =
            parseInt(crate.style.left) + 50 + "px"
        }
    }
    return false
}

document.addEventListener(
    "keydown",
    (event) => {
        if (hasWon === true) {
            return 
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
            if (moveCrateDown(x1,y) === true) {
                return
            }
            player.style.top =
            parseInt(player.style.top) + 50 + "px"
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
            if (moveCrateUp(x2, y) === true) {
                return
            }
          player.style.top =
            parseInt(player.style.top) - 50 + "px"
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
            if (moveCrateLeft(x,y1) === true){
                return
            }
          player.style.left =
            parseInt(player.style.left) - 50 + "px"
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
            if (moveCrateRight(x, y2) === true) {
                return
            }
          player.style.left =
            parseInt(player.style.left) + 50 + "px"
            y += 1
            win()
          break;
        default:
          return; 
      }
    }
  );
