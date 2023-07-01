//% color="#FFAB19"
namespace DetectPins {


//% block
export function leftTouched(): boolean {
    return pins.analogReadPin(AnalogPin.P0) > 970 ;
}

//% block
export function leftMiddleTouched(): boolean {
    return pins.analogReadPin(AnalogPin.P4) > 940;
}

//% block
export function middleTouched(): boolean {
    return pins.analogReadPin(AnalogPin.P1) > 910;
}

//% block
export function middleRightTouched(): boolean {
    return pins.analogReadPin(AnalogPin.P10) > 910;
}

//% block
export function rightTouched(): boolean {
    return pins.analogReadPin(AnalogPin.P2) > 850;
}
    
}