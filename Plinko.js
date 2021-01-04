class Plinko {
    constructor(x, y, r) {
       var options = {
          restitution:0.4
       }
       this.r = r;
    }
    display(){
        // var pos = this.body.position;
        // var angle = this.body.angle;
 
        push();
        // translated(pos.x, pos.y);
        // rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("white")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
 };