class Entity{
    constructor({position}){
        this.position = position;
        this.uId ;
    }

    update(){
        this.position.add(new vec2({
            x: 0.1, y:0.2
        }));
    }

    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x,this.position.y,50,50);
    }
}