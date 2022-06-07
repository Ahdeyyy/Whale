canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;

ctx.fillStyle = "black";
ctx.fillRect(0,0,canvas.width,canvas.height);

let objects = new Entity_list();
let box1 = new Entity({
    position :new vec2({
        x: 50,
        y: 70
    })
})

let box2 = new Entity({
    position :new vec2({
        x: 150,
        y: 170
    })
})

objects.add_entity(box1);
objects.add_entity(box2);


console.log(box1.uId);
console.log(box2.uId);
let run = function(){
    requestAnimationFrame(function(){
        run()
    })
    objects.update();
}
run();