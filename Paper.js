class Paper
{
    constructor(x,y,radius){
    
       var boptions = {

            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5
        }

        
        this.body=Bodies.circle(x,y,radius,boptions)


        this.radius=radius;
        this.image = loadImage("paper.png");


        World.add(engine.world, this.body)
    }

    display()
    {
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,80,80);
        pop();
    }
}