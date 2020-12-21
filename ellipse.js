class Bob{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            'restitution': 0.8,
            'density': 10,
            'friction': 0.9
        }
        this.body = Bodies.circle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("purple");
        ellipse(pos.x, pos.y, this.width, this.height);
    }
}