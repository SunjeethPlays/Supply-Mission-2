class Boxwall {
    constructor(x,y,width,height,) {

        var options = {
            restitution : 0.5,
            density : 5.0,
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = width;
        this.width = height;
        
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
    }
}