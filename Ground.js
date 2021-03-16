class Ground{
    constructor(){
        var options={
            isStatic:true,
            friction:0.04

        }

        this.body=Bodies.rect(500,625,1200,20,options);
        World.add(world.this.body);

    }

    display(){
    
    rectMode(CENTER);
    fill("yellow");
    rect(500,625,1200,20);
    }
}