$(document).ready(function(){
  contadorScroll = 0
  posicionNav = 0
  control = false
  setTimeout(function(){
    control = true
  },5000)
  $(window).bind('mousewheel', function(e){

      if(e.originalEvent.wheelDelta /120 > 0) {

          if(control == true && posicionNav == 1){
            $('.splash').css({
              "display":"block"
            })
            $(".nav_total").fadeIn()
            .css({"top":"1000","position":'absolute',"display":"block"})
            .animate({top:500}, 800, function() {
          //callback
            });
            $('#about').fadeOut()
            .css({"top":"2000px","position":'inherit',"display":"none"})
            .animate({top:500}, 800, function(){
            //callback
              });

              control = false
              time()
              posicionNav = 0

          }
          if (control == true && posicionNav == 2) {
            $("#skills").fadeOut()
            .css({"top":"2000px","position":'inherit',"display":"none"})
            .animate({top:500}, 800, function(){
            //callback
              });
            $("#about").fadeIn()
            .css({"top":"2000px","position":'inherit',"display":"block"})
            .animate({top:0}, 800, function(){
            //callback
              });

              control = false
              time()
              posicionNav = 1
          }
          if (control == true && posicionNav == 3) {
            $("#education").fadeOut()
            .css({"top":"2000px","position":'inherit',"display":"none"})
            .animate({top:500}, 800, function(){
            //callback
              });
            $("#skills").fadeIn()
            .css({"top":"2000px","position":'inherit',"display":"block"})
            .animate({top:0}, 800, function(){
            //callback
              });

              control = false
              time()
              posicionNav = 2
          }
          if (control == true && posicionNav == 4) {
            $("#experience").fadeOut()
            .css({"top":"2000px","position":'inherit',"display":"none"})
            .animate({top:500}, 800, function(){
            //callback
              });
            $("#education").fadeIn()
            .css({"top":"2000px","position":'inherit',"display":"block"})
            .animate({top:0}, 800, function(){
            //callback
              });

              control = false
              time()
              posicionNav = 3
          }

      }
      else{

        if(control == true && posicionNav == 0){
          $('.splash').css({
            "display":"none"
          })
          $('.nav_total').css({
            "top":"0px",
            "position":"inherit"
          })
          $("#about").fadeIn()
          .css({"top":"2000px","position":'inherit',"display":"block"})
          .animate({top:0}, 800, function(){
          //callback
            });



          control = false
          time()
          posicionNav = 1
        }

        if(control == true && posicionNav == 1){
          $('#about').fadeOut()
          .css({"top":"2000px","position":'inherit',"display":"none"})
          .animate({top:500}, 800, function(){
          //callback
            });
          $('.nav_total').css({
            "top":"0px",
            "position":"inherit"
          })
          $("#skills").fadeIn()
          .css({"top":"2000px","position":'inherit',"display":"block"})
          .animate({top:0}, 800, function(){
          //callback
            });
           control = false
           time()
           posicionNav = 2
        }
        if(control == true && posicionNav == 2){
          $('#skills').fadeOut()
          .css({"top":"2000px","position":'inherit',"display":"none"})
          .animate({top:500}, 800, function(){
          //callback
            });
          $('.nav_total').css({
            "top":"0px",
            "position":"inherit"
          })
          $("#education").fadeOut()
          .css({"top":"2000px","position":'inherit',"display":"block"})
          .animate({top:0}, 800, function(){
          //callback
            });
            control = false
            time()
           posicionNav = 3
        }
        if(control == true && posicionNav == 3){
          $('#education').fadeOut()
          .css({"top":"2000px","position":'inherit',"display":"none"})
          .animate({top:500}, 800, function(){
          //callback
            });
          $('.nav_total').css({
            "top":"0px",
            "position":"inherit"
          })
          $("#experience").fadeOut()
          .css({"top":"2000px","position":'inherit',"display":"block"})
          .animate({top:0}, 800, function(){
          //callback
            });



          control = false
          time()
          posicionNav = 4
        }



      }
  });

  function time(){

    setTimeout(function(){
      control = true
    },2000)
  }

});
