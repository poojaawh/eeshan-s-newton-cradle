class Rope {
    constructor(bodyA, bodyB ){
       var options= {
           bodyA: bodyA,
    bodyB : bodyB,
    length: 10,
    stiffness : 0.09
       }
        this.rope = Matter.Constraint.create(options);
    World.add(world, this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        
    }
    }