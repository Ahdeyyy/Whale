class Entity_list{
    constructor(){
        this.entities = new Array();
        this.index = 0;
        this.cam = new camera({
           position: new vec2({
               x: 100,
               y:100
           })
        });
    }
    add_entity(entity){
        this.entities[this.index] = entity;
        entity.uId = this.index + 1;
        this.index++;
    }

    update(){
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        //this.cam.follow(this.entities[0]);
        // console.log("entity: ",this.entities[0].position);
        // console.log("camera: ",this.cam.position);
        for(let entity of this.entities){
            entity.update();
            entity.draw(this.cam);
        }
    }

}