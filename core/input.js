window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return;
    }
    if (event.code === "ArrowDown") {
      // Handle "down"
      game.cam.position.y += 2;
    } else if (event.code === "ArrowUp") {
      // Handle "up"
      game.cam.position.y -= 2;
    } else if (event.code === "ArrowLeft") {
      // Handle "left"
      game.cam.position.x -= 2;
    } else if (event.code === "ArrowRight") {
      // Handle "right"
      game.cam.position.x += 2;
    } else if (event.code === "Enter") {
      for (let entity of game.mObjects.entities) {
        serialize(entity);
      }
    } else if (event.code === "KeyC") {
      this.localStorage.clear();
    } else if (event.code === "KeyD") {
      for (let i = 1; i <= localStorage.length; i++) {
        game.mObjects.entities[i - 1] = deserialize(i);
      }
    } else if (event.code === "KeyW") {
      game.mObjects.entities[0].angle += 0.05;
    }else if (event.code === "KeyQ") {
      game.mObjects.entities[0].angle -= 0.05;
    }
    event.preventDefault();
  },
  true
);

game.canvas.addEventListener("click", function (event) {
  let Mx = event.offsetX;
  let My = event.offsetY;
  switch (document.querySelector("#entity-type").value) {
    case "Entity":
      game.mObjects.add_entity(
        new Entity({
          position: new vec2({
            x: Mx + game.cam.position.x,
            y: My + game.cam.position.y,
          }),
          color: document.querySelector('#color-picker').value
        })
      );
      break;

    case "Agent":
      game.mObjects.add_entity(
        new agent({
          position: new vec2({
            x: Mx + game.cam.position.x,
            y: My + game.cam.position.y,
          }),
          color: document.querySelector('#color-picker').value
        })
      );
      break;
  }
});
