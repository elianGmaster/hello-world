

var fs = require('fs');
var vals_ar = [];
var ext;
var searchString;

process.argv.forEach(function (val, index, array) {
    vals_ar.push(val);
    //console.log(index + ': ' + val);
  });

ext = vals_ar[2];
searchString = vals_ar[3];

checkDir("./");

function checkDir(_dir){
    checkFile(ext,searchString,_dir);
    fs.readdir(_dir, (err, files) => {
        for(let i in files){
            let val = _dir+"/"+files[i]
            //console.log(val);
            fs.stat(val,function(err,item){
                if(item.isDirectory()){
                   // console.log(val);
                    checkDir(val);
                    
                }
            })
           // console.log(val);
        };
    })
}

var files_ar = [];
function checkFile(_ext,_string,_dir){
    fs.readdir(_dir, (err, files) => {
        for(let i in files){
            let val = files[i]
            fs.stat(_dir+"/"+val,function(err,item){
                if(item.isFile()){
                    if(val.indexOf("."+_ext) > 0 && val.indexOf("."+_ext) >= val.length-(_ext.length+1)  && val.indexOf(_string) >= 0){
                        var theFile = _dir+"/"+val;
                        theFile = theFile.replace(".//","./")
                        files_ar.push(theFile);
                    }
                    if(i == files.length-1){
                        showFilesArray();
                    }
                }
            })
           // console.log(val);
        };
    })
}

//checkFile(ext,searchString,"./");

var myTimer;

function showFilesArray(){
    clearTimeout(myTimer);
    myTimer = setTimeout(showFiles, 150);
    
    
}

function showFiles(){
    
    for(let i in files_ar){
        console.log(files_ar[i]);
    }
   console.log("-------")
}
//console.log(ext)
//console.log(searchString)