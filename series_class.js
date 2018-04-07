function SeriesClass(_blocks,_img,_name,_description,_release_date,_rate_a,_rate_c)
{
    this.blocks = _blocks;
    this.img = _img;
    this.name = _name;
    this.description = _description;
    this.release_date = _release_date;
    this.rate_a = _rate_a;
    this.rate_c = _rate_c;
}

SeriesClass.prototype.createSeries = function()
{
    
    this.newBox = $("<div class='box'>");
    $(this.blocks).append(this.newBox);
    this.newImg = $("<img src='_images/"+this.img+"'>");
    $(this.newBox).append(this.newImg);
    $(this.newBox).append("<h2>"+this.name+"</h2>");
    $(this.newBox).append("<div>"+this.description+"</div>");
    $(this.newBox).append("<div>"+this.release_date+"</div>");
    $(this.newBox).append("<div>"+this.rate_a+"</div>");
    $(this.newBox).append("<div>"+this.rate_c+"</div>");
    
};

