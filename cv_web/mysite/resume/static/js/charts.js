$(document).ready(function(){

  document.getElementById('frameworks').addEventListener("click", clickChart);
  document.getElementById('languages').addEventListener("click", clickChart);
  document.getElementById('extras').addEventListener("click", clickChart);

  document.getElementById('academic_education').addEventListener("click", clickEducation);
  document.getElementById('language_education').addEventListener("click", clickEducation);


});
function clickChart(event){
  var x = event.target.id
  // console.log(x)
  if (x == "frameworks") {
    $('#chart_language').fadeOut()
    .css({
      "display":"none"
    })
    $('#chart_extra').fadeOut()
    .css({
      "display":"none"
    })
    $('#chart_framework').fadeOut()
    .css({
      "display":"block"

    })
  }
  if (x == "languages") {
    $('#chart_language').fadeOut()
    .css({
      "display":"block"

    })
    $('#chart_framework').fadeOut()
    .css({
      "display":"none"
    })
    $('#chart_extra').fadeOut()
    .css({
      "display":"none"
    })
  }
  if(x == "extras"){
    $('#chart_language').fadeOut()
    .css({
      "display":"none"

    })
    $('#chart_framework').fadeOut()
    .css({
      "display":"none"
    })
    $('#chart_extra').fadeOut()
    .css({
      "display":"block"
    })
  }


}
function clickEducation(event){
    var x = event.target.id
    if(x == "language_education"){
      $('#div_education').fadeOut()
      .css({
        "display":"none"
      })

      $('#education_languages').fadeOut()
      .css({
        "display":"block"

      })
    }
    if(x == "academic_education"){
      $('#education_languages').fadeOut()
      .css({
        "display":"none"
      })

      $('#div_education').fadeOut()
      .css({
        "display":"block"

      })
    }
}
