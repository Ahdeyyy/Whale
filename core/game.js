class Game {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 1024;
    this.canvas.height = 576;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.mObjects = new Entity_list();
    this.cam = new camera({
      position: new vec2({
        x: 0,
        y: 0
      }),
    });
  }

  run(game,time) {
    this.mObjects.update(this.cam, game);
  }
}
