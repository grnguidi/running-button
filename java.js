const nao = document.getElementById('nao')
const sim = document.getElementById('sim')
const OFFSET = 100

nao.addEventListener('click', () => {
    alert('caralho tu não quer mesmo hein')
    window.close()
})

sim.addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/gabriel_rnguidi";
})

document.addEventListener('mousemove', (e) => {
    const x = e.pageX
    const y = e.pageY
    const ButtonBox = nao.getBoundingClientRect()
    const horizontaldistfrom = dfc(ButtonBox.x, x, ButtonBox.width)
    const verticaldistfrom = dfc(ButtonBox.y, y, ButtonBox.height)
    const horizontaloffset = ButtonBox.width / 2 + OFFSET
    const verticaloffset = ButtonBox.height / 2 + OFFSET
    if (Math.abs(horizontaldistfrom) <= horizontaloffset && Math.abs(verticaldistfrom) <= verticaloffset) {
        setButtonPosition(
            ButtonBox.x + horizontaloffset / horizontaldistfrom * 10,
            ButtonBox.y + verticaloffset / verticaldistfrom * 10
        )
    }
})

function setButtonPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect()
    const ButtonBox = nao.getBoundingClientRect()

    if(dfc(left, windowBox.left, ButtonBox.width) < 0 ) {
        left = windowBox.right - ButtonBox.width - OFFSET
    }

    if(dfc(left, windowBox.right, ButtonBox.width) > 0 ) {
        left = windowBox.right + OFFSET
    }

    if(dfc(top, windowBox.top, ButtonBox.height) < 0 ) {
        top = windowBox.bottom - ButtonBox.height - OFFSET
    }

    if(dfc(top, windowBox.bottom, ButtonBox.height) > 0 ) {
        top = windowBox.top + OFFSET
    }

    nao.style.top = `${top}px`
    nao.style.left = `${left}px`
}

//distancia do mouse pro centro do botão
function dfc(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2 
} 