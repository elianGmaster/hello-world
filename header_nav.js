

$(document).ready(function(){
    navMobile();
    navSlide();
})

function navMobile()
 
{
    
    var newImg = document.createElement("img");
    newImg.src = "_images/Hamburger_icon.png";
    id_icon.appendChild(newImg);
    
    var mobileNav = document.createElement("div");
    mobileNav.className = "mobile_nav";
    id_icon.appendChild(mobileNav);
    
    
    $(".mobile_nav").hide();
    $(".mobile_nav").html("<ul><li>PRODUCTS</li><li>FARTNERS</li>\n\
    <li>START EXAMPELS</li><li>MEDIA</li><li>ABOUT</li><li>CONTACT</li></ul>")
    
}

function navSlide()
{
//    $("#id_icon").on("click",function(){
//        $(".mobile_nav").slideToggle(50);
        
       if($( window ).width() > 728){
           $("#id_icon").off();
            
        } 
        else{
          $("#id_icon").on("click",function(){
          $(".mobile_nav").slideToggle(50);  
        })
    }
//    });

}