class Entity{
    constructor({position}){
        this.position = position;
        this.uId ;
        this.color;
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
        game.ctx.fillRect(offset.x,offset.y,50,50);
    }

    static serialize(obj){
        localStorage.setItem(obj.uId, JSON.stringify(obj));
    }

    static deserialize(uId){
        let obj = JSON.parse(localStorage.getItem(uId));
        return new Entity({
            position: obj.position
        })
    }
}