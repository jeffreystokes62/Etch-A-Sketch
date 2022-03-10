let grid = document.querySelector('.grid')
const totalSquares = []

createBoard(grid, totalSquares, 10)  
//Create Board
function createBoard(grid, squares,width) {
  for (let i = 0; i < width*width; i++) {
    const square = document.createElement('div')
    square.dataset.id = i
    grid.appendChild(square)
    squares.push(square)
  }
}
  
let myArray = Array.from(document.querySelectorAll(".grid>div"))
for (node of myArray) {
  node.addEventListener('mouseover', function (event) {this.style.backgroundColor = 'black'
  })
}

function wipeBoard() {
const cleararray = Array.from(document.querySelectorAll(".grid>div"))
  for (node of cleararray) {
    node.remove()
  }
}

const button = document.querySelector('button')
button.addEventListener('click', () => {

  let width = Number(prompt("How large should the square be?"))

  if (width > 100 || width < 1 || isNaN(width)) {
    alert("Please enter a number between 1 and 100.")
    return;
  }
  
  let innerdivs = document.getElementsByClassName('grid')[0];
  innerdivs.style.setProperty('grid-template-rows', 'repeat(' + width + ',' + 500/width + 'px)');
  innerdivs.style.setProperty('grid-template-columns', 'repeat(' + width + ',' + 500/width + 'px)');

  wipeBoard()
  createBoard(grid, totalSquares, width) 

  let myArray = Array.from(document.querySelectorAll(".grid>div"))
  for (node of myArray) {
    node.addEventListener('mouseover', function (event) {this.style.backgroundColor = 'black'
    })
  }

})
