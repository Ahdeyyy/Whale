class camera {
  constructor({ position }) {
    this.position = position;
    }
  
  follow(entity) {
    let velocity = new vec2({
      x: (entity.position.x - this.position.x) / 2,
      y: (entity.position.y - this.position.y) / 2,
    });
    this.position = vec2.add(this.position, vec2.scale(velocity, 0.025));
  }
}
