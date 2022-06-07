class Entity_list{
    constructor(){
        this.entities = new Array();
        this.index = 0;
    }
    add_entity(entity){
        this.entities[this.index] = entity;
        entity.uId = this.index + 1;
        this.index++;
    }

    update(){
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        for(let entity of this.entities){
            entity.update();
            entity.draw();
        }
    }

}