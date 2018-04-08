var leaders_x;
var countUser = 5;
var NEXT_X = 25;

$(function(){
    
    $("#right_btn").on("click",onRightBtnClick);
    $("#left_btn").on("click",onLeftBtnClick);
    leaders_x = 0 // the left axis of .users_box in the begining
    //if screen of mobile
    if($( window ).width() < 728){
        countUser += 2;
        NEXT_X = 45;
    }
    
})


function onRightBtnClick(){
    //alert("right");
    if(leaders_x > -NEXT_X*(countUser-4))
    {
        leaders_x -= NEXT_X;
        $(".users_box").css("left",leaders_x+"%");
    }
}

function onLeftBtnClick(){
    if(leaders_x < 0){
    leaders_x += NEXT_X;
    $(".users_box").css("left",leaders_x+"%");
    }
}