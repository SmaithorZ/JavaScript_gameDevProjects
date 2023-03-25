let playerState = "run"
const dropDown = document.getElementById("animations")

dropDown.addEventListener("change", function(e){

    playerState = e.target.value;
})

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();

playerImage.src = "images/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;

let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = []
const animationStates =  [

{ 
    Name: "idle",
    frames: 7,

},

{ 
    Name: "jump",
    frames: 7,
    
}, 

{ 
    Name: "fall",
    frames: 7,
    
},

{ 
    Name: "run",
    frames: 9,
    
}, 

{ 
    Name: "dizzy",
    frames: 11,
    
},

{ 
    Name: "sit",
    frames: 5,
    
}, 

{ 
    Name: "roll",
    frames: 7,
    
}, 
{ 
    Name: "bite",
    frames: 7,
    
}, 

{ 
    Name: "ko",
    frames: 12,
    
},

{ 
    Name: "getHit",
    frames: 4,
    
},       
];

animationStates.forEach((state,index) =>{
    let frames = {
        loc: []
    }
    for(let i = 0; i < state.frames; i++){
        let positionX = i*spriteWidth;
        let positionY  = index*spriteHeight;
        frames.loc.push({x: positionX, y: positionY})
    }
    spriteAnimations[state.Name] = frames
})

console.log(spriteAnimations);

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth*position
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight, 0, 0, spriteWidth, spriteHeight)
    
   gameFrame++;
    requestAnimationFrame(animate)
}

animate();