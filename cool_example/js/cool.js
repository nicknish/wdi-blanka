function init() {
    stand();
    blanka.style.left = "0px";
    blanka.style.top = "100px";
    var ball = document.getElementById("ball");
    ball.style.left = window.innerWidth - 300 + 'px';
    ball.addEventListener("click", moveball);
}

function moveball(element) {
    blanka.className = "crouch";
    var sfx = new Audio('sound/A00304.ogg'); // from http://www.bolzplatz2006.de/
    intervalID = setInterval(function() {
        if (ball.style.left == blanka.style.left) {
            window.clearInterval(intervalID);
            sfx.play();
            ball.style.left = parseInt(ball.style.left) + 800 + 'px';
            // alert('GOAL!');
        } else {
            ball.style.left = parseInt(ball.style.left) - 1 + 'px'; // until blanka.style.left
        }
    }, 1);

    ball.className += "spin";
}

function stand() {
    // make blanka famous and accessible!
    var blanka = document.getElementById("blanka");
    blanka.className = "stand";
}

function move_that_beast(keyEvent) {
    console.log("Blanka likes to move it");


    switch (keyEvent.keyCode) {
        case 39: // -> arrow
            blanka.className = "walk";
            if (blanka.style.left == "") {
                blanka.style.left = "8px";
            } else {
                blanka.style.left = parseInt(blanka.style.left) + 8 + 'px';
            }
            break;
        case 37: // <- arrow
            blanka.className = "walk";
            blanka.style.left = parseInt(blanka.style.left) - 8 + 'px';
            break;
        case 40: // <- arrow
            blanka.className = "walk";
            blanka.style.top = parseInt(blanka.style.top) + 8 + 'px';
            break;
        case 38: // <- arrow
            blanka.className = "walk";
            blanka.style.top = parseInt(blanka.style.top) - 8 + 'px';
            break;
        default:
            blanka.classList.remove("stand");
            console.log(keyEvent.keyCode);
    }
}


window.onload = init;
window.onkeydown = move_that_beast;
window.onkeyup = stand;