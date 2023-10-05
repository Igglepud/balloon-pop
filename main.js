import gameScene from '/game.js'
import preloadScene from '/preload.js'
// set game configuration
let config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 900,
  scene: [preloadScene,
      gameScene, 
     ],
  pixelArt: false,
  scale:{mode:Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY},
  backgroundColor: 0x0000ff,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 },
      // debug: true,
    },
  },
};

//create new game and send configuration
let game = new Phaser.Game(config);
