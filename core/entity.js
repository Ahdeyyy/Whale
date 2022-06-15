class Entity{
    constructor({position,color = "#ffffff"
    }){
        this.position = position;
        this.uId ;
        this.color = color;
        this.size = 50;

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
    }),
     game){
        let offset = this.get_screen_positon(cam)
        game.ctx.fillStyle = this.color;
        game.ctx.fillRect(offset.x,offset.y,this.size,this.size);
    }

}