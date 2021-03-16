class Stone{
    constructor(x,y,diameter){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,diameter,option);
        World.add(world,this.body);
        this.diameter=diameter;
        this.image=loadImage("stone.png");
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,diameter);
        pop()
    }
}