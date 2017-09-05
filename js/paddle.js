/**
 * Created by zhang on 2017/9/3.
 */
class Paddle extends Element{
    constructor(scene, img, x, y) {
        super(scene, img, x, y);
        this.speed = 15;
        this.init();
    }

    init(){
        this.initKeyEvent();

    }

    initKeyEvent(){
        this.registerAction('keydown','a',this.move_left);
        this.registerAction('keydown','d',this.move_right);
        this.registerAction('keydown','+',this.speedUp);
        this.registerAction('keydown','-',this.speedDown);
    }

    move_left() {
        this.x -= this.speed;
        if(this.x<0){
            this.x = 0;
        }
    };

    move_right() {
        this.x += this.speed;
        if((this.x+this.width)>=this.scene.width){
            this.x = this.scene.width-this.width;
        }
    };

    speedUp(){
        this.speed++;
    }

    speedDown(){
        this.speed--;
    }
}
