def on_button_pressed_a():
    count_up_down(val, True)
input.on_button_pressed(Button.A, on_button_pressed_a)

def count_up_down(num: number, bool: bool):
    global my_val
    my_val = num
    if num < 170 and num > 10:
        if bool:
            my_val += 2
        else:
            my_val += -2
    else:
        basic.show_icon(IconNames.SAD)
    pins.servo_write_pin(AnalogPin.P0, my_val)
    basic.pause(100)
    return my_val

def on_button_pressed_ab():
    global mode
    mode += 1
    if mode > 2:
        mode = 0
    elif mode > 2:
        pass
    elif False:
        pass
    basic.show_number(mode)
    basic.pause(500)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    count_up_down(val, False)
input.on_button_pressed(Button.B, on_button_pressed_b)

my_val = 0
val = 0
mode = 0
mode = 0

def on_forever():
    while mode == 1:
        pass
basic.forever(on_forever)
