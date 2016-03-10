var color= ["lightblue", "seagreen", "salmon", "tan", "blueviolet"];

var colorIndex=0

  $(document).ready (function(){
    $("button").click(function(){
        if (colorIndex==color.length){
            colorIndex=0;
        }
      
        $("body").css ("background-color", color[colorIndex]);
             colorIndex= colorIndex+1
      
        $("ul").html("")
        for (var i=0; i<color.length; i = i + 1) {
            console.log(color[i]); 
        $("ul").append("<li>" + color[i] + "</li>"); 
           
        }
    });
  });
  
