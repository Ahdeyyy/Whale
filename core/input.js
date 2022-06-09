window.addEventListener("keydown",function(event){
    if (event.defaultPrevented) {
        return;
      }
      if (event.code === "ArrowDown"){
          // Handle "down"
          game.cam.position.y += 2;
      } else if (event.code === "ArrowUp"){
          // Handle "up"
          game.cam.position.y -= 2;
      } else if (event.code === "ArrowLeft"){
          // Handle "left"
          game.cam.position.x -= 2;
      } else if (event.code === "ArrowRight"){
          // Handle "right"
          game.cam.position.x += 2;
        //   game.mObjects.entities[0].position.x += 3;
      }

      else if(event.code === "Enter"){
        
          for(let entity of game.mObjects.entities){
              Entity.serialize(entity);
          }
        //localStorage.clear();
        
        console.log(localStorage);
      }
      else if(event.code === "KeyC"){
        
        this.localStorage.clear();
      //localStorage.clear();
      
      console.log(localStorage);
    }
    else if(event.code === "KeyD"){
        
        for(let i = 1; i <= localStorage.length ; i++){
            game.mObjects.add_entity(Entity.deserialize(i));
        }
      //localStorage.clear();
      
      console.log(localStorage);
    }
      event.preventDefault();
    }, true);

    game.canvas.addEventListener("click", function(event){
        let Mx = event.offsetX;
        let My = event.offsetY;

        game.mObjects.add_entity(new Entity({
            position: new vec2({
                x: Mx + game.cam.position.x,
                y: My + game.cam.position.y,

            }) 
        }));


    })