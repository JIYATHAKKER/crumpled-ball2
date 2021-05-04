class Paper{
    constructor(x,y,radius){
        var option = {
            'isStatic':false,
            'restitution':0.3,
            'density':1.2,
            'friction':0.5
        }

        this.body=Bodies.circle(x,y,20,option);
        this.radius=radius;
        this.image=loadImage('paper.png');
        World.add(world,this.body);
    }

        display(){
            var angle=this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            fill("purple");
            image(this.image,0,0,this.radius,this.radius);
            pop();
        }

}