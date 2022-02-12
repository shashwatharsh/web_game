let healthp1 = 100
let healthp2 = 100
let attack =0
let pointp1 = 0
let pointp2 = 0
let tmatch = 0
let chmove = false
let chstart = false

nogame= () =>{
    document.getElementById('pause').style.display = "none"
document.getElementById('reset').style.display = "none"
document.getElementById('start').style.display = "block"
chstart=false;
}


gamstart = () =>
{
    chstart = true;
    document.getElementById('start').style.display = "none"
    document.getElementById('pause').style.display = "block"
    document.getElementById('reset').style.display = "block"
}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
attackp1 = ()=>{
    if(chstart == true && chmove == false){
    attack = getRandomArbitrary(0,5);
    healthp2 = healthp2 - attack
    console.log(healthp2)
    console.log("attack = "+ attack)
    updateh1()
    chmove=true;
    }else{
        alert("Player 2nd chance or click on 'Start' button");
    }
}
attackp2 = ()=>{
    if(chstart == true && chmove == true){
    attack = getRandomArbitrary(0,5);
    healthp1= healthp1 - attack
    console.log(healthp1)
    console.log("attack = "+ attack)
    chmove= false
    updateh2()
    }else{
        alert("Player 1st chance or click on 'Start' button");
    }
}

updateh1 = () =>{
    document.getElementById('uph2').textContent = healthp2;
    if(healthp2 <= 0 || healthp1 <= 0){
        healthd();
    }
}
updateh2 = () =>{
    document.getElementById('uph1').textContent = healthp1;
    if(healthp1 <= 0 || healthp2 <=0){
        healthd();
    }
}
healathd = () => {
    tmatch = tmatch+1;
    healthp1 = 100;
    healthp2 = 100;
    updateh1()
    updateh2()
    checkwin()
    alert("Match " + tmatch+ " completed.")
    if(tmatch>5){
        winner()
    }
}
pause =()=>{
    alert("Game Paused!, click Ok to continue. ")
}
reset = () =>{
 healthp1 = 100
 healthp2 = 100
 attack =0
 pointp1 = 0
 pointp2 = 0
 tmatch = 0
 chmove = false
 chstart = false
nogame()
}

winner=()=>{
    if(pointp1<pointp2){
        console.log("player 1 won");
    }
    else if(pointp1 == pointp2){
        console.log("Match tie");
    }
    else{
        console.log("Player 2 won")
    }
}
checkwin = () =>{
    if(healthp1<healthp2){
        pointp1= pointp1+1
    }
    else{
        pointp2 = pointp2 +1
    }
}