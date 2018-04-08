
function BlanksClass(_parent,_header,_descp,_image)
{
    this.parent = _parent;
    this.header = _header;
    this.descp = _descp;
    this.image = _image;
}

BlanksClass.prototype.addToHtml = function()
{
  this.newPackage = $("<div class='offer_box'>");
  $(this.parent).append(this.newPackage);
  $(this.newPackage).append("<h2>"+this.header+"</h2>");
  $(this.newPackage).append("<p>"+this.descp+"</p>");
  this.newImg = $("<img src='_images/"+this.image+"'>");
  $(this.newPackage).append(this.newImg);  
};