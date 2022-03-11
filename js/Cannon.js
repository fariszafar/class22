class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImage = loadImage("./assets/canon.png");
   this.cannon_BaseImage = loadImage("./assets/cannonBase.png");
  }
  display(){
    push()
    imageMode(CENTER)
    translate (this.x,this.y)
    rotate(angle)
image (this.cannonImage,0,0,this.width,this.height)
pop()
image (this.cannon_BaseImage,70,20,200,200)
noFill()

  }
}

