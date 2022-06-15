class camera {
  constructor({ position }) {
    this.position = position;
  }

  follow(entity) {
    let dir = new vec2({
      x: ( this.position.x - entity.position.x),
      y: ( this.position.y - entity.position.y ),
    });
    dir.normalize();
    console.log(vec2.subtract(entity.position, this.position).length());
    if(vec2.subtract(entity.position, this.position).length() > 100){
      this.position.add(vec2.scale(dir,entity.velocity.length() * 2));
    }
    //console.log(this.position);
  }
}
