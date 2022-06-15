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
    this.type = "agent";
  }

  update() {

    let SPF = 1/60; // seconds per frame

    this.acceleration.add(vec2.scale(this.acceleration,SPF));
    this.velocity.add(this.acceleration);
    let v = vec2.scale(this.velocity,SPF);
    this.position.add(v);
    this.velocity.subtract(v);
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
