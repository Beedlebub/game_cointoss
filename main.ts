input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.SmallDiamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
