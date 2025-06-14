var rn = 0;
var score = 0;
var timer = 60;
var intervalId;

function increase() {
    score += 10;
    document.querySelector(".score").textContent = score;
}

function createbubble() {
    var clutter = "";

    for (let index = 0; index < 144; index++) {
        let random = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${random}</div>`;
    }

    document.querySelector(".framebtm").innerHTML = clutter;
}

function getnewhit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector(".hit").textContent = rn;
}

function playGameOverSound() {
    const gameOverSound = document.getElementById("gameover");
    gameOverSound.pause();
    gameOverSound.currentTime = 0;
    gameOverSound.play();
}

function runtimer() {
    intervalId = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#Timer").textContent = timer;
        } else {
            clearInterval(intervalId);
            document.querySelector(".framebtm").innerHTML = `
                <h1>Game Over</h1>
                <button class="restart" onclick="startGame()" >Restart</button>
            `;
            playGameOverSound();
        }
    }, 1000);
}

function startGame() {
    score = 0;
    timer = 60;
    document.querySelector(".score").textContent = score;
    document.querySelector("#Timer").textContent = timer;
    const StartSound = document.getElementById("gamestart");
        StartSound.pause();
        StartSound.currentTime = 0;
        StartSound.play();
    createbubble();
    getnewhit();
    runtimer();
}

document.querySelector("#playBtn").addEventListener("click", function () {
    this.style.display = "none"; 
    
    startGame();
});

document.querySelector(".framebtm").addEventListener("click", function (e) {
    var clickednum = Number(e.target.textContent);
    if (clickednum === rn && timer > 0) {
        const popSound = document.getElementById("popSound");
        popSound.pause();
        popSound.currentTime = 0;
        popSound.play();

        increase();
        createbubble();
        getnewhit();
    }
});
