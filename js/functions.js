var sky;
var clouds;
var sea;
var farGrounds;
var tileset;
var ground1;

function setBackground(scene) {
    var width =  gameSettings.screenWidth;
    var height = gameSettings.screenHeight;

    sky = scene.add.tileSprite(0, 0, width, height, "sky");
    sky.tileScaleX = width;
    sky.tileScaleY = 2;
    sky.setOrigin(0, 0);

    clouds = scene.add.tileSprite(0, height / 5, width, height, "clouds");
    clouds.scaleX = 1;
    clouds.scaleY = 1.5;
    clouds.setOrigin(0, 0);

    sea = scene.add.tileSprite(0, height / 2, width, height, "sea");
    sea.scaleX = 1;
    sea.scaleY = 3.5;
    sea.setOrigin(0, 0);

    farGrounds = scene.add.tileSprite(0, height / 2 + 25, width, height, "farGrounds");
    farGrounds.scaleX = 1;
    farGrounds.scaleY = 2.5;
    farGrounds.setOrigin(0, 0);
}

function moveBackground(scene) {
    sky.tilePositionX += 0.5;
    clouds.tilePositionX += 0.5;
    sea.tilePositionX += 0.5;
    farGrounds.tilePositionX += 0.5;
}

function setTileset(scene) {
    ground1 = scene.add.tileSprite(200, 200, 150, 150, "tileset");
    ground1.setTileScale(1.5, 1.5);
    ground1.setOrigin(0, 0);
}
