function createPositionContainer(selectorContainer){
    const container = document.querySelector(selectorContainer)
    if(!container) return 
    
    const div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.bottom = '0px'
    div.style.right = '0px'

    container.appendChild(div)

    return div
}

function createCircle(selectorContainer){
    const container = document.querySelector(selectorContainer)
    if(!container) return 

    const circle = document.createElement('div')
    
    circle.style.position = 'absolute'
    circle.style.top = '0px'
    circle.style.left = '0px'
    circle.style.width = '100px'
    circle.style.height = '100px'
    circle.style.backgroundColor = 'blue'
    circle.style.borderRadius = '50%'
    
    container.appendChild(circle)

    return circle
}

function extractPixelsFromString(pixelsString){
    return Number(pixelsString.replace('px', ''))
}

function move(deltaX = 0, deltaY = 0){
    const currentLeft = extractPixelsFromString(circle.style.left)
    const currentTop = extractPixelsFromString(circle.style.top)
    circle.style.top = currentTop + deltaY + 'px'
    circle.style.left = currentLeft + deltaX + 'px'
    displayPosition()
}

function moveDown(deltaTop = 10){
    move(0, deltaTop)
}

function moveRight(deltaLeft = 10){
    move(deltaLeft, 0)
}

function moveUp(deltaUp = 10){
    move(0, -deltaUp)
}

function moveLeft(deltaLeft = 10){
    move(-deltaLeft, 0)
}

function displayPosition(){
    container.innerHTML = ''
    const position = circle.getBoundingClientRect()

    const pX = document.createElement('p')
    pX.innerText = 'Position X: ' + (position.x + position.width / 2)

    const pY = document.createElement('p')
    pY.innerText = 'Position Y: ' + (position.y + position.height / 2)

    container.appendChild(pX)
    container.appendChild(pY)
}

const container = createPositionContainer('body')
const circle = createCircle('body')
displayPosition()
