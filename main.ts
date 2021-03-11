let tempt = 0
let degrees = 0
basic.forever(function () {
    tempt = input.temperature()
    degrees = input.compassHeading()
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("" + (tempt))
        basic.pause(500)
        basic.showIcon(IconNames.Yes)
    } else if (input.buttonIsPressed(Button.A)) {
        if (degrees < 45 || degrees >= 315) {
            basic.showString("N")
        } else if (degrees < 135) {
            basic.showString("E")
        } else if (degrees < 225) {
            basic.showString("S")
        } else {
            basic.showString("W")
        }
    } else {
        basic.showString("Click A / B")
    }
})
