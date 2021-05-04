class Dustbin{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':1.2,
            'isStatic' : true
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage('dustbingreen.png');
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("pink");
      image(this.image,pos.x, pos.y, 170, 200);
    }
}