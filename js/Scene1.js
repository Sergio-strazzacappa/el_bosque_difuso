class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("clouds", "/assets/img/bg/clouds.png");
        this.load.image("farGrounds", "/assets/img/bg/farGrounds.png");
        this.load.image("sea", "/assets/img/bg/sea.png");
        this.load.image("sky", "/assets/img/bg/sky.png");
        this.load.image("tileset", "/assets/img/tileset.png");
    }

    create() {
        this.add.text(20, 20, "Cargando juego ...");

        // Salta a la escena de presentación cuando finaliza de cargar los recursos
        this.scene.start("presentation");
    }
}
