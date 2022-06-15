function serialize(obj) {
  localStorage.setItem(obj.uId, JSON.stringify(obj));
}

function deserialize(uId) {
  let obj = JSON.parse(localStorage.getItem(uId));
  switch (obj.type) {
    case "agent":
      return new agent({
        position: new vec2({x:obj.position.x, y:obj.position.y}),
        acceleration: new vec2({x: obj.acceleration.x,y: obj.acceleration.y}),
        velocity: new vec2({x:obj.velocity.x, y:obj.velocity.y}),
        angle: obj.angle,
        color: obj.color
      });
   
    default:
      return new Entity({
        position: new vec2({x:obj.position.x,y:obj.position.y})
      });
  }
}
