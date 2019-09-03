class Scene2 extends Phaser.Scene {
    constructor() {
        super("presentation");
    }

    create() {
        setBackground(this);
        setTileset(this);
    }

    update() {
        moveBackground(this);
    }
}
