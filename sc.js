const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const sc = document.getElementById('sc');
var score = 0;

document.addEventListener("keydown", () =>{
   jump();
  

});

function jump() {
   if(dino.classList != "jump"){
    dino.classList.add("jump");
    
   setTimeout(()=>{
    dino.classList.remove("jump");
   }, 800)   
}

}

let isAlive = setInterval(() => {

    let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLEft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

          if(cactusLEft == 50 && cactusLEft > 0 && dinotop < 190){
                 setTimeout(() =>{ 
                    score+=5;
                    sc.innerHTML = "score:" + score;}, 800);
      }
     if(cactusLEft < 50 && cactusLEft > 0 && dinotop >= 190){
        score = 0;
        sc.innerHTML = "score:" + score;
        alert("game over");
        
     }
})
