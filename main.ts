input.onButtonPressed(Button.A, function () {
    if (posicioPaleta > 0) {
        paletaEsq.move(-1)
        paletaDreta.move(-1)
        posicioPaleta += -1
    }
})
function mourePilota () {
    pilota.move(1)
    basic.pause(500)
    if (pilota.isTouching(paletaEsq) || pilota.isTouching(paletaDreta)) {
        game.addScore(1)
        direccioPilota()
    } else {
        if (pilota.get(LedSpriteProperty.Y) == 4) {
            game.gameOver()
        }
    }
    pilota.ifOnEdgeBounce()
}
function direccioPilota () {
    direccio = randint(0, 1)
    if (direccio == 0) {
        pilota.turn(Direction.Right, 45)
    } else {
        pilota.turn(Direction.Left, 45)
    }
}
input.onButtonPressed(Button.B, function () {
    if (posicioPaleta < 3) {
        paletaEsq.move(1)
        paletaDreta.move(1)
        posicioPaleta += 1
    }
})
let direccio = 0
let pilota: game.LedSprite = null
let posicioPaleta = 0
let paletaEsq: game.LedSprite = null
let paletaDreta: game.LedSprite = null
paletaDreta = game.createSprite(3, 4)
paletaEsq = game.createSprite(2, 4)
posicioPaleta = 2
pilota = game.createSprite(2, 0)
pilota.change(LedSpriteProperty.Direction, 90)
pilota.set(LedSpriteProperty.Blink, 150)
game.setScore(0)
basic.forever(function () {
    mourePilota()
})
