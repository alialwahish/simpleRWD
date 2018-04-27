



$(document).ready(function(){

    var wid=$(window).width();
    if(wid<=480){
                               
        $('title').text("Phone");
    }
    if(wid>480 && wid<=1024){
        $('title').text("Tablet");
    }
    if(wid>1024){
        $('title').text("desktop");
    }

        $(window).resize(function(){
            wid=$(window).width();
            if(wid<=480){
                               
                $('title').text("Phone");
            }
            if(wid>480 && wid<=1024){
                $('title').text("Tablet");
            }
            if(wid>1024){
                $('title').text("desktop");
            }
           
        });
    

})