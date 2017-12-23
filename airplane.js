var player = {
    left: 450,
    top: 620
};

var enemies = [
    { // Enemy 1
        left: 350, 
        top: 200
    },
    { // Enemy 2
        left: 450, 
        top: 250
    },
    { // Enemy 3
        left: 550, 
        top: 300
    },
    { // Enemy 4
        left: 400, 
        top: 150
    },
    { // Enemy 5
        left: 200, 
        top: 300
    },
    { // Enemy 6
        left: 550, 
        top: 400
    }
];

function drawPlayer () {
    var content = "<div class='player' style='left:" + player.left + "px; top:" + player.top + "px'></div>";
    
    document.getElementById("players").innerHTML = content;
}

function drawEnemies () {
    var content = "";
    for (var i = 0; i < enemies.length; i++) {
        content += "<div class='enemy' style='left:" + enemies[i].left + "px; top:" + enemies[i].top + "px'></div>";
    }
    document.getElementById("enemies").innerHTML = content;
}

document.onkeydown = function (e) {
    if (e.keyCode == 37) { // Left
        player.left = player.left - 10;
    }
    if (e.keyCode == 39) { // Right
        player.left = player.left + 10;
    }
    if (e.keyCode == 38) { // Up
        player.top = player.top - 10;
    }
    if (e.keyCode == 40) { // Down
        player.top = player.top + 10;
    }
    drawPlayer();
}

drawPlayer();
drawEnemies();