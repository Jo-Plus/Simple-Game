let player = document.getElementById('player');
let block = document.getElementById('block');
let scores = document.getElementById('scores');
let keyleft = 0;
let score = 0;


document.addEventListener('keydown', function (params) {
  if (params.key == "ArrowLeft") {
    if (keyleft <= 0) return;
    keyleft -= 100;
    player.style.left = keyleft + 'px';
  } else if (params.key == "ArrowRight") {
    if (keyleft >= 200) return;
    keyleft += 100;
    player.style.left = keyleft + 'px';
  }
})

block.addEventListener('animationiteration', function () {
  let randposts = Math.floor((Math.random()*3))*100;
  block.style.left = randposts + 'px';
  score++;
})

setInterval(()=>{
  scores.innerHTML = `Score : ${score}`;
  let playerleft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
  let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
  if(playerleft == blockleft && blockTop < 450 && blockTop > 310){
    alert(`Game Over..your Score is ${score}`);
    block.style.top = -100 + 'px';
    score = 0;
  }
},1)
