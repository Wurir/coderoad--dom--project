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

function moveDown(deltaTop = 10){
    const currentTop = Number(circle.style.top.replace('px', ''))
    circle.style.top = currentTop + deltaTop + 'px'
}

const circle = createCircle('body')

