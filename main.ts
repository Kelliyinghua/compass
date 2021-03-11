let tempt = 0
let degrees = 0
basic.forever(function () {
    tempt = input.temperature()
    degrees = input.compassHeading()
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("" + (tempt))
    } else {
        if (degrees < 45 || degrees >= 315) {
            basic.showString("N")
        } else if (degrees < 135) {
            basic.showString("E")
        } else if (degrees < 225) {
            basic.showString("S")
        } else {
            basic.showString("W")
        }
    }
})
