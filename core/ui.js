var colorPicker = document.querySelector("#color-picker");
colorPicker.value = "#ffffff";

function loadColor() {
  var colorPicker = document.querySelector("#color-picker");
  for (let entity of game.mObjects.entities) {
    entity.color = colorPicker.value;
  }
}

function applyForce() {
  let force = document.querySelector("#force");
  for (let agent of game.mObjects.entities.filter(
    (agent) => agent.type === "agent"
  )) {
    let acc = new vec2({
      x: Math.sin(agent.angle) * agent.size * Number(force.value),
      y: Math.cos(agent.angle) * agent.size * Number(force.value),
    });
    agent.acceleration.add(acc);
  }
}

function applyAngularForce() {
  let force = document.querySelector("#angular-force");
  for (let agent of game.mObjects.entities.filter(
    (agent) => agent.type === "agent"
  )) {
   
    agent.angularAcceleration += Number(force.value) * (Math.PI / 10) ;
  }
}
