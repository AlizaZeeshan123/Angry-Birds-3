class Slingshot{
    constructor(body1,body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            length:100,
            stiffness:0.01
        }
        this.sling = Matter.Constraint.create(options)
        World.add(world,this.sling)
    }
    display(){
        //line(x1,y1,x2,y2)
        push()
        strokeWeight(4)
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)
        pop()
    }
}