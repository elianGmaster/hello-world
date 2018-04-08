$(function(){
    $("#join_btn").on("click",openMailNews);
    $("#contact_btn").on("click",openMailNews);
    $(".x_btn").on("click",hideMail)
    $("#send_btn").on("click",doAjax)
    // לא תופס את הזכרון
})


function doAjax(){
    var userMail = $("#id_mail").val();
    if(userMail.indexOf("@") > 1 && userMail.indexOf(".") > 1){
    
    $.ajax({
    method: "GET",
    url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
    
  })
    .done(function( msg ) {
      alert( "Data Saved: " + msg );
      hideMail()
    });
    
    //for Post
//     $.ajax({
//    method: "POST",
//    url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
//    data: { name: "John", location: "Boston" }
//  })
//    .done(function( msg ) {
//      alert( "Data Saved: " + msg );
//    });
    }
    else{
        alert("check your email again")
    }
}

function openMailNews(){
    //alert("fff");
    $(".send_mail_newsletter").fadeIn(800);
    $(".send_mail_newsletter").css("display","flex");
    
}

function hideMail(){
    $(".send_mail_newsletter").fadeOut(800);
}