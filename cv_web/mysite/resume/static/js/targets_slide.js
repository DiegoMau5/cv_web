var target = 0;
$(document).ready(function(){

  document.getElementById('arrow_next').addEventListener("click", next);
  document.getElementById('arrow_back').addEventListener("click", back);
});

function next(){

  if (target == 0 ) {
      $('#target_0').fadeOut()
      .css({
        "display":"none"
      });
      $('#target_1').fadeOut()
      .css({

        "display":"block"
      });
      target = target + 1
  }

  else if (target == 1) {
    $('#target_1').fadeOut()
    .css({

      "display":"none"
    });
    $('#target_2').fadeOut()
    .css({

      "display":"block"
    });
    target = target + 1
  }

}
function back(){

  if (target == 1 ) {
      $('#target_1').fadeOut()
      .css({
        "display":"none"
      });
      $('#target_0').fadeOut()
      .css({

        "display":"block"
      });
      target = target - 1
  }
  else if (target == 2) {
      $('#target_2').fadeOut()
      .css({
        "display":"none"
      });
      $('#target_1').fadeOut()
      .css({

        "display":"block"
      });
      target = target - 1
  }
}
