input.onButtonPressed(Button.A, function () {
    playerGo[guessCount] = 1
    guessCount += 1
})
input.onButtonPressed(Button.AB, function () {
    playerGo[guessCount] = 3
    guessCount += 1
})
input.onButtonPressed(Button.B, function () {
    playerGo[guessCount] = 2
    guessCount += 1
})
input.onGesture(Gesture.Shake, function () {
    microGo = [randint(1, 3), randint(1, 3), randint(1, 3)]
    basic.showNumber(microGo[0])
    basic.showString("")
    basic.showNumber(microGo[1])
    basic.showString("")
    basic.showNumber(microGo[2])
    basic.showString("")
})
let guessCount = 0
let playerGo: number[] = []
let microGo: number[] = []
microGo = []
playerGo = []
let playerFlag = 0
guessCount = 0
let guessCorrect = 0
basic.showString("Shake me!")
basic.forever(function () {
    if (guessCount == 3) {
        for (let index = 0; index <= 2; index++) {
            if (microGo[index] == playerGo[index]) {
                guessCorrect += 1
            }
        }
        if (guessCorrect == 3) {
            basic.showString("Well done!")
        } else {
            basic.showString("Try again")
        }
        guessCount = 0
        guessCorrect = 0
    }
})
