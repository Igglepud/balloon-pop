export default class gameScene extends Phaser.Scene {
    constructor() {
      super("Game");
    }
  
    //init
    init = function () {

    };
  
    preload = function () { };
  
    create = function () {

      const scene=this;

      console.log(this)
        this.score=0;

        this.scoreText=this.add.text(10,10,'Score: 0',{fontSize: '72px',});
        this.gameTime=60;
        this.timeText=this.add.text(1200,10,'Time: 60',{fontSize: '72px',});

        this.gameTimer=this.time.addEvent({
            delay:Phaser.Math.Between(500,2000),
            callbackScope:this,
            repeat:-1,
            callback:function(){

                let balloon=this.physics.add.sprite(Phaser.Math.Between(0,1600),
                1000,'balloons','balloon_0'+Phaser.Math.Between(1,4));
                balloon.setTint(Phaser.Math.Between(0x000000,0xffffff));
                balloon.depth=2;
              let string=this.physics.add.sprite(balloon.x,balloon.y+balloon.height/2,
              'balloons','string_01');
              string.depth=1;
              balloon.body.setAllowGravity(false);
              string.body.setAllowGravity(false);
              balloon.body.setVelocityY(Phaser.Math.Between(-100,-800));
              string.body.setVelocityY(balloon.body.velocity.y);

              balloon.setInteractive();

              balloon.on('pointerdown',function(){
                //can't click balloon twice
                balloon.disableInteractive();
                  //run animation
                balloon.play('pop');
                //update score variable
                this.score+=Phaser.Math.Between(100,500);
                //update score on screen
                this.scoreText.setText('Score: '+this.score)
                string.destroy();
                this.sound.play('balloonPop')

              },this)

              balloon.on('animationcomplete-pop',function(){
                balloon.destroy();


              },this)

            },
        });


       this.countdownTimer= this.time.addEvent({
        delay:1000,
        repeat:-1,
        callbackScope:this,
        callback:function(){


          this.gameTime--;
          this.timeText.setText('Time: '+this.gameTime)

          if(this.gameTime<=0){
            alert('Final score: '+ this.score)
            this.scene.restart();

          }

        }



       })



  }

  update(){}
}