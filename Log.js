class Log extends BaseClass {
    constructor(x, y, height, angle) {
     
     super(x,y,50,50)
     this.image=loadImage("sprites/wood2.png")
      Matter.Body.setAngle(this.body, angle);
      
    }
   
}