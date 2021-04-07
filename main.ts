let sonar = 0
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar < 15) {
        cuteBot.motors(0, 0)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        basic.pause(1000)
        cuteBot.motors(-70, 0)
        basic.pause(500)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
        cuteBot.motors(50, 50)
    } else if (input.buttonIsPressed(Button.A)) {
        cuteBot.motors(50, 50)
    }
})
