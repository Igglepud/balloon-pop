export default class preloadScene extends Phaser.Scene {
    constructor() {
      super("Preload");
    }
  
    //init
    init = function () {
      console.log("preload");
    };
  
    preload = function () {


  //loading box
  var progressBar = this.add.graphics();
  var progressBox = this.add.graphics();
  progressBox.fillStyle(0x222222, 0.8);
  progressBox.fillRect(240, 270, 320, 50);
  progressBox.y = this.sys.game.config.width / 2;
  progressBox.x = this.sys.game.config.height / 2;

  //create loading screen
  this.load.on("progress", function (value) {
    console.log(value);
    progressBar.clear();
    progressBar.fillStyle(0xffffff, 1);
    progressBar.fillRect(250, 280, 300 * value, 30);
  });

  this.load.on("fileprogress", function (file) {
    console.log(file.src);
  });

  this.load.on("complete", function () {
    console.log("complete");
    progressBar.destroy();
    progressBox.destroy();
    loadingText.destroy();
  });

  var width = this.cameras.main.width;
  var height = this.cameras.main.height;
  var loadingText = this.make.text({
    x: width / 2,
    y: height / 2 - 50,
    text: "Loading text here...",
    style: {
      font: "20px monospace",
      fill: "#ffffff",
    },
  });
  loadingText.setOrigin(0.5, 0.5);


  this.load.audio('balloonPop', 'assets/sounds/pop.wav')

        this.load.atlas('balloons', '/assets/images/balloons.png', '/assets/images/balloons.json');

     };
  
    create = function () {



  //create animations from atlas
  this.anims.create({
    key: "pop",
    frames: this.anims.generateFrameNames("balloons", {
      prefix: "balloon_explode_0",
      start: 1,
      end: 6,
    }),
    repeat: 0,
    frameRate: 15,
  });


        this.scene.start("Game");


  }

  update(){}
}