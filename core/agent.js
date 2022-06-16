class agent extends Entity {
  constructor({ position , 
  acceleration = new vec2({
    x: 0,
    y: 0
  }), velocity = new vec2({
    x: 0,
    y: 0
  }),
  color = "#FFFFFF",
  angle = 0
}) {
    super({ position: position , color: color});
    this.angle = angle;
    this.size = 20;
    this.acceleration = acceleration;
    this.velocity = velocity;
    this.angularAcceleration = 0;
    this.angularVelocity = 0;
    this.type = "agent";
    this.maxAcceleration = 10;
    this.maxVelocity = 10;
    this.maxAngularAcceleration = 0.314;
    this.maxAngularVelocity = 0.314;
  }

  update() {

    let SPF = 1/60; // seconds per frame

    //this.acceleration.add(vec2.scale(this.acceleration,SPF));
    this.velocity.add(this.acceleration);
    let v = vec2.scale(this.velocity,SPF);
    this.position.add(v);
    this.velocity.subtract(v);

    this.angularVelocity += this.angularAcceleration;
    let aV = this.angularVelocity * SPF;
    this.angle += aV;
    this.angularVelocity -= aV;

    if(this.angle < -2*Math.PI){
      this.angle += 2*Math.PI;
    }else if(this.angle > 2*Math.PI){
      this.angle -= 2*Math.PI;
    }
    
  }

  draw(
    cam = new camera({
      position: new vec2({
        x: 0,
        y: 0,
      }),
    }),
    game
  ) {
    let offset = this.get_screen_positon(cam);
    game.ctx.fillStyle = this.color;
    game.ctx.beginPath();
    game.ctx.arc(offset.x, offset.y, this.size, 0, 2 * Math.PI);
    game.ctx.fill();
    game.ctx.closePath();
    game.ctx.beginPath();
    game.ctx.moveTo(offset.x, offset.y);
    game.ctx.lineTo(
      offset.x + Math.sin(this.angle) * this.size,
      offset.y + Math.cos(this.angle) * this.size
    );
    game.ctx.stroke();
  }
}
