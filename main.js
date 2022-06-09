let game = new Game();

// let box1 = new Entity({
//     position :new vec2({
//         x: 50,
//         y: 70
//     })
// })

// let box2 = new Entity({
//     position :new vec2({
//         x: 150,
//         y: 170
//     })
// })

// game.mObjects.add_entity(box1);
// game.mObjects.add_entity(box2);

var CurrentTime, ElapsedTime, PreviousTime = Date.now(), LagTime = 0;
var FPS = 60; // Frames per second
var FrameTime = 1 / FPS;
var UpdateIntervalInSeconds = FrameTime;
var MPF = 1000 * FrameTime; // Milliseconds per frame

loop = function(){
    requestAnimationFrame(function(){
        loop();
    })
    //compute how much time has elapsed since the last RunLoop
    CurrentTime = Date.now();
    ElapsedTime = CurrentTime - PreviousTime;
    PreviousTime = CurrentTime;
    LagTime += ElapsedTime;
    //Update the game the appropriate number of times.
    //Update only every Milliseconds per frame.
    //If lag larger then update frames, update until caught up.
    while (LagTime >= MPF) {
    LagTime -= MPF;
    game.run(game);
    }
    
}

loop();