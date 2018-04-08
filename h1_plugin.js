
var ajax_ar;
var json_ar;
$(function(){
    callingAjax();
    
});

function callingAjax()
{
    $.ajax({
       url:"offer.json",
       dataType:"json",
       crossDomain:true,
       success:function(data)
       {
           console.log(data);
           json_ar = data;
           createOfferBox();        
       }
    });
}

function createOfferBox()
{
   for(var i in json_ar)
   {
       var val = json_ar[i];
       var offer_blanks = new BlankClass(id_package,val.header,val.descp,val.image);
       offer_blanks.addToHtml();
       
   } 
}

