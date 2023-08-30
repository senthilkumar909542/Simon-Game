var level = 0;
var color = ["red", "blue", "green", "yellow"];
var random_pattern=[];
var user_pattern=[];
var random_number;
var next_level =0;
var flag =0;
var highest_score =0;

// Click 
$("#level-2-title").text("Click start!!");
document.addEventListener("keypress",function(event){
  console.log(event.key);
    if(flag===0 && event.key === "s"){
        flag=1;
        start();     
    } 
    if( event.key =="r"){
        reset();
    }
});

// Click
$(".button-box>button").click(function(event){

    if( flag===0 && (event.target).id==="s"){
        flag=1;       
        start();
    }
    if((event.target).id==="r"){
        reset();
    }
   
});

// Start
function start(){

    $("#level-2-title").text("Level "+ ++level);

    highest_score = Math.max(level,highest_score);
    $("#level-3-title").text("High Score: "+ highest_score);
    console.log(highest_score);
    user_pattern=[];
    next_sequence();

}

function  next_sequence(){

    random_number = Math.floor(Math.random()*4);  
    $("#" + color[random_number]).fadeIn(100).fadeOut(100).fadeIn(100);
    random_pattern.push(color[random_number]);
    console.log(random_pattern);
    sound(color[random_number]);
};

$(".btn").click(function(event){
    console.log(this.id);
    user_pattern.push(this.id);  // $(this).attr("id");
    animatePress($(this).attr("id"));
    sound(this.id);
    check();
});

function animatePress(currentColor) {

    if(currentColor!=="wrong"){
        //document.querySelector(".btn").classList.add("pressed");
        $("#" + currentColor).addClass("pressed");
        setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
        }, 100);
    }else{
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 100);        
    }
}

function check(){  
    if(user_pattern[next_level]===random_pattern[next_level]){
        next_level++;
        if(user_pattern.length === random_pattern.length){
            next_level=0; 
            setTimeout(function(){
                start();
            },1000);
        }
    }else{
        random_pattern=[];
        level=0;
        $("#level-2-title").text("Game Over");
        animatePress("wrong"); 
        sound("wrong");
        flag=0;
        // setTimeout(() => {
        //     start();           
        // }, 1000);
    }
}
 
function sound(color){
  
    var audio = new Audio("sounds/"+color+".mp3");
    audio.play();
}

// function sound(color){

//     switch(color){
//         case "green":
//             var audio = new Audio("sound/Remo-Change-Himself-Bgm-Ringtone.mp3");
//             audio.play();
//             break;
        
//         case "yellow":
//             var audio = new Audio("sound/Remo-Comedy-Bgm-Ringtone.mp3");
//             audio.play();
//             break;
//         case "blue":
//             var audio = new Audio("sound/A-Broken-Heart-Bgm-Ringtone.mp3");
//             audio.play();
//             break;
//         case "red":
//             var audio = new Audio("sound/Remo-Is-A-Magician-Bgm-Ringtone.mp3");
//             audio.play();
//             break;
            
//     }
  
    
// }


function reset() {
   
    user_pattern=[];
    random_pattern=[];
    level =0;
    flag=0;


    
    $("#level-2-title").text("Click start!!");

}


