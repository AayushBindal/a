class Roof{
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER);
        fill("red");
        rect(width/2+20, 100, 400, 20);
      }
}