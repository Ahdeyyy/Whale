window.addEventListener("keydown",function(event){
    if (event.defaultPrevented) {
        return;
      }
      if (event.code === "ArrowDown"){
          // Handle "down"
          objects.cam.position.y += 2;
      } else if (event.code === "ArrowUp"){
          // Handle "up"
          objects.cam.position.y -= 2;
      } else if (event.code === "ArrowLeft"){
          // Handle "left"
          objects.cam.position.x -= 2;
      } else if (event.code === "ArrowRight"){
          // Handle "right"
          objects.cam.position.x += 2;
      }
      event.preventDefault();
    }, true);