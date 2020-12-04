class Dustbin{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body1 = Bodies.rectangle(1400,550,20,20,options);
        this.body2 = Bodies.rectangle(1450,650,200,20,options);
        this.body3 = Bodies.rectangle(1500,550,20,20,options);
        this.image = loadImage("dustbin.png");
        // this.width = width;
        // this.height = height;
        World.add(world,this.body1);
        World.add(world,this.body2);
        World.add(world,this.body3);

    }
        display(){
            var pos1 = this.body1.position;
            var angle1 = this.body1.angle;
            var pos2 = this.body2.position;
            var angle2 = this.body2.angle;
            var pos3 = this.body3.position;
            var angle3 = this.body3.angle;
            push();
            translate(pos1.x,pos1.y);
            rotate(angle1);
            angleMode(RADIANS);
            rectMode(CENTER);
            fill("blue");
            rect(0,0,20,180);
            pop();
            push();
            translate(pos3.x,pos3.y);
            rotate(angle3);
            angleMode(RADIANS);
            rectMode(CENTER);
            fill("blue");
            rect(0,0,20,180);
            pop();
            push();
            translate(pos2.x,pos2.y);
            rotate(angle2);
            angleMode(RADIANS);
            rectMode(CENTER);
            fill("blue");
           //rect(0,0,180,20);
            imageMode(CENTER);
            image(this.image,0,-100,200,200)
            pop();
        }
    
};