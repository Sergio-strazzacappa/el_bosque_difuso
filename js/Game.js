var gameSettings = {
    screenWidth: 2100,
    screenHeight: 600
};

var musicConfig = {

};

var config = {
    width: gameSettings.screenWidth,
    height: gameSettings.screenHeight,
    scene: [Scene1, Scene2, Scene3],
    pixelArt: true, // el juego escala de tamaño correctamente
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    type: Phaser.Auto // el renderizado, puede ser Phaser.Canvas o Phaser.WEBGL
};

var game = new Phaser.Game(config);
