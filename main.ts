for (let poradi = 0; poradi <= 2; poradi++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - poradi)
}
music.playTone(392, music.beat(BeatFraction.Whole))
basic.showString("GO")
basic.forever(function () {
	
})
