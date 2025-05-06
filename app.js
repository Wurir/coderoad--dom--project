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

function move(deltaX = 0, deltaY = 0){
    const currentLeft = Number(circle.style.left.replace('px', ''))
    const currentTop = Number(circle.style.top.replace('px', ''))
    circle.style.top = currentTop + deltaY + 'px'
    circle.style.left = currentLeft + deltaX + 'px'
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

const circle = createCircle('body')

