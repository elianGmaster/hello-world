
var ajax_ar;
$(function(){
    callAjax();
});


function callAjax()
{
    $.ajax({
        url:"series.json",
        dataType:"json",
        crossDomain:true,
        success:function(data){
          console.log(data.item); 
//            ajax_ar = data;
//            createSeries();
        }
    });
}

function createSeries()
{
    for(var i in ajax_ar)
    {
        var val = ajax_ar[i];
        var series = new SeriesClass(id_blocks,val.image,val.name,val.description,
        val.release_date,val.rate_a,val.rate_c);
        series.createSeries();
    }
}