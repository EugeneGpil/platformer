import globals from "src/app/objects/globals"
import touchAnalyzer from "src/app/classes/touchController/objects/touchAnalyzer";

export default () => {
    if (touchAnalyzer.shouldPlayerStop()) {
        globals.player.stop()
    }

    if (touchAnalyzer.shouldPlayerJump()) {
        globals.player.jump()
    }

    if (touchAnalyzer.shouldPlayerRunLeft()) {
        globals.player.moveLeft()
    }

    if (touchAnalyzer.shouldPlayerRunRight()) {
        globals.player.moveRight()
    }
}
