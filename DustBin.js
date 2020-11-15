class Dustbin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dbw = 200;
        this.dbh = 100;
        this.wt = 20;
        this.a = 0;

        this.bB = Matter.Bodies.rectangle(this.x, this.y, this.dbw, this.wt, { isStatic: true });


        this.lB = Matter.Bodies.rectangle(this.x - this.dbw / 2, this.y - this.dbh / 2, this.wt, this.dbh, { isStatic: true })
        Matter.Body.setAngle(this.lB, this.a);
        

        this.rB = Matter.Bodies.rectangle(this.x + this.dbw / 2, this.y - this.dbh / 2, this.wt, this.dbh, { isStatic: true })
        Matter.Body.setAngle(this.rB, -1 * this.a);
      
                
        World.add(world, this.bB);
        World.add(world, this.lB);
        World.add(world, this.rB);
    }
    display() {
        var bBp = this.bB.position;
        var lBp = this.lB.position;
        var rBp = this.rB.position;

        push();
        translation(bBp.x, bBp.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rect(0, 0, this.dbw, this.wt);
        pop();

        push();
        translate(rBp.x, rBp.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(-1 * this.a);
        rect(0, 0, this.wt, this.dbh);
        pop();

        push();
        translate(lBp.x, lBp.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.a);
        rect(0, 0, this.wt, this.dbh);
        pop();
    }
}