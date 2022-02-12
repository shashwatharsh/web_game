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
        document.getElementById('attackp1').style.display = "none";
        document.getElementById('attackp2').style.display = "block";
    attack = getRandomArbitrary(0,5);
    healthp2 = healthp2 - attack
    console.log(healthp2)
    console.log("attack = "+ attack)
    chmove=true;
    updateh1()
    }else{
        alert("Player 2nd chance or click on 'Start' button");
    }
}
attackp2 = ()=>{
    if(chstart == true && chmove == true){
        document.getElementById('attackp2').style.display = "none";
        document.getElementById('attackp1').style.display = "block";
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
    if(healthp2<=70){
        document.getElementById('uph2').style.color = "green"
    }
    else if(healthp2<=40){
        document.getElementById('uph2').style.color = 'blue'
    }
    else if(healthp2<=10){
        document.getElementById('uph2').style.color = 'red'
    }
    else{
        document.getElementById('uph2').style.color = "black"
    }
    document.getElementById('uph2').textContent = healthp2;
    if(healthp2 <= 0 || healthp1 <= 0){
        healthd();
    }
}
updateh2 = () =>{
    if(healthp1<=70){
        document.getElementById('uph1').style.color = "green"
    }
    else if(healthp1<=40){
        document.getElementById('uph1').style.color = 'blue'
    }
    else if(healthp1<=10){
        document.getElementById('uph1').style.color = 'red'
    }
    else{
        document.getElementById('uph1').style.color = "black"
    }
    document.getElementById('uph1').textContent = healthp1;
    if(healthp1 <= 0 || healthp2 <=0){
        healthd();
    }
}
healthd = () => {
    tmatch = tmatch+1;
    healthp1 = 100;
    healthp2 = 100;
    updateh1()
    console.log(healthp1)
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
    if(healthp1>healthp2){
        pointp1= pointp1+1
        document.getElementById('plr1p').textContent = pointp1
    }
    else{
        pointp2 = pointp2 +1
        document.getElementById('plr2p').textContent = pointp2
    }
}