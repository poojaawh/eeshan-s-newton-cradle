class Bob{
    constructor(x, y) { // delete numbers 50, 50 from here
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
        }
        this.body = Bodies.circle(x, y, 50, options);// write number 50 as radius here, Bodies.circle
        this.width = 50;
        this.height = 50;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle; // defining angle variable before using it.
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        circle( 0, 0, this.width, this.height);
        pop();
      }
}