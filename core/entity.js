class Entity{
    constructor({position}){
        this.position = position;
        this.uId ;
    }

    update(){
        
    }

    get_screen_positon(camera){
        return new vec2({
            x:  this.position.x - camera.position.x,
            y:  this.position.y - camera.position.y
        })
    }

    draw(cam = new camera({
        position:new vec2({
            x:0,
            y:0
        })
    })){
        let offset = this.get_screen_positon(cam)
        ctx.fillStyle = "red";
        ctx.fillRect(offset.x,offset.y,50,50);
    }
}