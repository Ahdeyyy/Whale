class Entity_list {
  constructor() {
    this.entities = new Array();
    this.index = 0;
  }
  add_entity(entity) {
    this.entities[this.index] = entity;
    entity.uId = this.index + 1;
    this.index++;
  }

  update(cam, game) {
    game.ctx.fillStyle = "black";
    game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
    if (this.index !== 0) {
      for (let entity of this.entities) {
        entity.update();
        entity.draw(cam, game);
      }
      for (let agent of game.mObjects.entities.filter(
        (agent) => agent.type === "agent"
      )) {
        agent.acceleration = new vec2({
          x: 0,
          y: 0,
        });
      }
    }
  }
}
