async function play() {
    console.log("Before Delay");
    await sleep(Math.random() * 2000 + 500);

    
    select_level(lev, num, negative2, count);

}

var num = 0;
var lev = 1;
var count = 0;
var le = 0;
var negative = 0;
var negative2 = 0;

const insert = (random_height, random_top, random_left, order, a) => {

    if (order == 1) {
        document.querySelector(".area").innerHTML = `<div><img class= "fruit" style="height: ${random_height}px; margin-left: ${random_left}px; margin-top:${random_top}px z-index:5" src="./basket/gavava.png" alt=""></div>`;
    }
    if (order == 2) {
        document.querySelector(".area").innerHTML = `<div><img class= "fruit" style="height: ${random_height}px; margin-left: ${random_left}px; margin-top:${random_top}px z-index:5" src="./basket/apple.png" alt=""></div>`;
    }
    if (order == 3) {
        document.querySelector(".area").innerHTML = `<div><img class= "fruit" style="height: ${random_height}px; margin-left: ${random_left}px; margin-top:${random_top}px z-index:5" src="./basket/custard apple.png" alt=""></div>`;
    }
    if (order == 4) {
        document.querySelector(".area").innerHTML = `<div><img class= "fruit" style="height: ${random_height}px; margin-left: ${random_left}px; margin-top:${random_top}px z-index:5" src="./basket/mango.png" alt=""></div>`;
    }
    if (order == 5) {
        document.querySelector(".area").innerHTML = `<div><img class= "fruit" style="height: ${random_height}px; margin-left: ${random_left}px; margin-top:${random_top}px z-index:5" src="./basket/orange.png" alt=""></div>`;
    }
    if (order == 6) {
        document.querySelector(".area").innerHTML = `<div><img class= "fruit" style="height: ${random_height}px; margin-left: ${random_left}px; margin-top:${random_top}px z-index:5" src="./basket/stroberry.png" alt=""></div>`;
    }
    if (order == 7) {
        document.querySelector(".area").innerHTML = `<div><img class= "fruit" style="height: ${random_height}px; margin-left: ${random_left}px; margin-top:${random_top}px z-index:5" src="./basket/Water melon.png" alt=""></div>`;
    }
    if (order == 8){
        negative2 = negative2 + 1;
        document.querySelector(".area").innerHTML = `<div><img class= "fruit" style="height: ${random_height}px; margin-left: ${random_left}px; margin-top:${random_top}px z-index:5" src="./basket/bomb.png" alt=""></div>`;
        document.querySelector(".Total").innerHTML = `${a + negative2}`;
    }

    document.querySelector(".Total").innerHTML = `${a}`;
    
    play();

    num = num + 1;

    console.log('----------------' + num + '---------------');

    document.querySelector(".fruit").addEventListener("click", (e)=>{

        if (order == 8) {
            negative = negative + 3;
            
            var audio = new Audio('./basket/bomb_blast.mp3');
            audio.play();
        }

        else{
            var audio = new Audio('./basket/chopping.mp3');
            audio.play();
        }

        document.querySelector(".fruit").id = "click_fruit"

        count = count + 1 - negative;
        negative = 0;
        console.log(count);
        document.querySelector(".Score").innerHTML = `${count}`;

        document.querySelector(".area").innerHTML = "<div></div>";

        e.stopPropagation();
    })
}

const select_level = (a, b, c, d) => {

    le = a*10 + c;
    if (b < le) {
        random();
    }
    else if(b == le){
        document.querySelector(".area").innerHTML = `<div> </div>`;

        var persent = (d*100) / b;

        if((d <= 4*le) && (d >= 0)){
            alert(`Your score is ${persent} Try to improve next time`);
        }
        else if((d <= 7*le) && (d >= 5*le)){
            alert(`Your score is ${persent} Your meal is juicy`);
        }
        else if((d <= 9*le) && (d >= 8*le)){
            alert(`Your score is ${persent} You played like champion`);
        }
        else if(d <= 10*le){
            alert(`Your score is ${persent} Master returned`);
        }
    }
    return le;
}

const random = () => {
    var random_h = Math.floor(Math.random() * 200 + 50);
    var random_l = Math.floor(Math.random() * 400 + 50);
    var random_t = Math.floor(Math.random() * 400 + 50);
    var order = Math.floor(Math.random() * 8 + 1);

    console.log(random_h);
    insert(random_h, random_l, random_t, order, le);

}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const selected = (level) =>{

    let a = document.querySelector(".level_selected").className = "level";
    console.log(a)

    if(level == 1){
        lev = 1;
        document.querySelector("#level1").className = "level_selected";

    }
    else if(level == 2){
        lev = 2;
        document.querySelector("#level2").className = "level_selected";
    }
    else if(level == 3){
        lev = 3;
        document.querySelector("#level3").className = "level_selected";
    }
    else if(level == 4){
        lev = 4;
        document.querySelector("#level4").className = "level_selected";
    }
    else if(level == 5){
        lev = 5;
        document.querySelector("#level5").className = "level_selected";
    }
    else if(level == 6){
        lev = 6;
        document.querySelector("#level6").className = "level_selected";
    }
    else if(level == 7){
        lev = 7;
        document.querySelector("#level7").className = "level_selected";
    }
    else if(level == 8){
        lev = 8;
        document.querySelector("#level8").className = "level_selected";
    }
    else if(level == 9){
        lev = 9;
        document.querySelector("#level9").className = "level_selected";
    }
    else if(level == 10){
        lev = 10;
        document.querySelector("#level10").className = "level_selected";
    }
    return lev;
}

const restart = () => {
    num = 0;
    lev = 1;
    count = 0;
    le = 0;
    negative = 0;

    document.querySelector(".Total").innerHTML = "";
    document.querySelector(".Score").innerHTML = "";

    return num, lev, count, le, negative;
}

const about = () => {
    window.location.href = "about.html";
}

const how = () => {
    window.location.href = "how.html" ;
}

const game = () => {
    window.location.href = "index.html" ;
}