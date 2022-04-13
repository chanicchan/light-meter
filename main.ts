let led_number = 0
let led_full_rows = 0
let led_remainder = 0
basic.forever(function () {
    led_number = Math.round(input.lightLevel() / 255 * 25)
    led_full_rows = Math.floor(led_number / 5)
    led_remainder = led_number % 5
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (i < led_full_rows || i == led_full_rows && j < led_remainder) {
                led.plot(j, i)
            } else {
                led.unplot(j, i)
            }
        }
    }
})
