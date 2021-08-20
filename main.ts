input.onButtonPressed(Button.A, function () {
    if (action == 1) {
        game.addScore(1)
        action = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    if (action == 2) {
        game.addScore(1)
        action = 0
    }
})
let action = 0
game.startCountdown(10000)
game.setScore(0)
basic.forever(function () {
    action = randint(1, 2)
    if (action == 1) {
        basic.showString("A")
    } else {
        basic.showLeds(`
            . . # # #
            . . # # #
            . . # # #
            . # . . .
            # . . . .
            `)
        while (action > 0) {
            basic.pause(100)
        }
    }
})
