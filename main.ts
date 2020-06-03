input.onButtonPressed(Button.A, function () {
    lift_up_down(true)
})
input.onButtonPressed(Button.AB, function () {
    mode += 1
    if (mode > 1) {
        mode = 0
        extrm_dn = 1
        extrm_up = 1
    } else if (mode == 1) {
        strt_up = 1
        extrm_dn = 0
        extrm_dn = 0
    }
    basic.showNumber(mode)
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    lift_up_down(false)
})
function lift_up_down (bool: boolean) {
    if (bool) {
        if (val + 10 <= max_val) {
            val += 1
            extrm_up = 0
            extrm_dn = 0
        } else {
            extrm_up = 1
        }
    } else {
        if (val - 10 >= min_val) {
            val += -1
            extrm_dn = 0
            extrm_up = 0
        } else {
            extrm_dn = 1
        }
    }
    pins.servoWritePin(AnalogPin.P0, val)
    pins.servoWritePin(AnalogPin.P1, max_val - val)
    basic.pause(15)
}
let strt_up = 0
let extrm_up = 0
let extrm_dn = 0
let val = 0
let min_val = 0
let max_val = 0
let mode = 0
mode = 0
max_val = 150
min_val = 30
val = (max_val + min_val) / 2
basic.showNumber(mode)
pins.servoWritePin(AnalogPin.P0, val)
pins.servoWritePin(AnalogPin.P1, max_val - val)
basic.pause(100)
basic.forever(function () {
    while (mode == 1) {
        if (strt_up) {
            while (extrm_up == 0) {
                lift_up_down(true)
            }
            strt_up = 0
        } else {
            while (extrm_dn == 0) {
                lift_up_down(false)
            }
            strt_up = 1
        }
    }
})
