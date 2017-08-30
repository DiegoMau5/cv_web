$(document).ready(function(){
  (function(){
  var counter = document.getElementsByClassName('counter');
  var diner = document.getElementById('nombreTitle');
  var menu = ['📱', '📟', '💿', '💻', '💲', '👾'];
  // var menu = ['../images/html5.png','../images/css-3.png','../images/icon (1).png','../images/js.png','../images/sql-simbolo-de-formato-de-archivo.png']
  var noms = ['HTML5', 'CSS', 'JS', 'PYTHON', 'SQL'];
  var finished = 0;

  // animation to play when finished dining
  function jelly(e) {
    diner.removeEventListener('fit', jelly);
    diner.animate(
      [
        { transform: 'scale(' + 1 / e.detail.scaleFactor + ')' },
        { transform: 'scale(1.1)' },
        { transform: 'scale(.9)' },
        { transform: 'scale(1.05)' },
        { transform: 'scale(.98)' },
        { transform: 'scale(1)' }
      ],
      {
        duration:500
      }
    );
  }

  // eat animation
  function nom(index) {

    var nommer = document.getElementById('nommer-' + index);
    var rotation = -20 + (Math.random() * 40);
    var scale = .75 + (Math.random() * .5);

    nommer.animate(
      [
        { opacity:0, transform: 'scale(' + .25 * scale + ') rotateZ(' + rotation + 'deg) translateY(0) ' },
        { opacity:1, transform: 'scale(' + scale + ') rotateZ(' + rotation + 'deg) translateY(-.5em) ' }
      ],
      {
        duration:250
      }
    );

    diner.animate(
      [
        { transform: 'scaleY(1)' },
        { transform: 'scaleY(' + (.7 + (Math.random() * .2)) + ')' },
        { transform: 'scaleY(1)' }
      ],
      {
        duration:100
      }
    );
  }

  // only when animation api is supported
  if ('animate' in diner) {
    diner.addEventListener('fit', jelly);
  }

  // create food items
  var dishes = menu
  .concat(menu) // duplicate icons
  .sort(function() { return .5 - Math.random(); })
  .concat(['🕹']) // unfortunately there's no fly emoji
  .map(function(menuItem, i) {

    var offset = 33.33 + (Math.random() * 33.33);

    var dish = document.createElement('div');
    dish.textContent = menuItem;
    dish.setAttribute('aria-hidden', 'true');
    dish.setAttribute('data-nommer', i);
    dish.className = 'dish';
    dish.style.cssText = 'left:' + offset + '%; transition-delay: ' + ((i * 200) + Math.random() * 100) + 'ms';

    var nommer = document.createElement('div');
    nommer.id = 'nommer-' + i;
    nommer.textContent = noms[Math.floor(Math.random() * noms.length)];
    nommer.setAttribute('aria-hidden', 'true');
    nommer.className = 'nommer';
    nommer.style.cssText = 'left:' + offset + '%; opacity:0;';

    $(counter).append(dish);
    $(counter).append(nommer);


    return dish;
  });

  // animate into view
  setTimeout(function() {
    requestAnimationFrame(function() {
      dishes.forEach(function (dish) {
        dish.classList.add('drop');
        dish.addEventListener('transitionend', burb);
      })
    });
  }, 500);

  // burb after eating dish
  function burb(e) {
    e.target.removeEventListener('transitionend', burb);
    e.target.style.opacity = 0;

    finished++;
    if (finished === dishes.length) {
      full();
      // $(".nav_total").css("display","block")
      $(".nav_total").fadeIn()
      .css({"top":"1000","position":'absolute',"display":"block"})
      .animate({top:500}, 800, function() {
    //callback
});
    }
    else if ('animate' in diner) {
      nom(e.target.getAttribute('data-nommer'));
    }
  }

  // so full!
  function full() {
    // $(diner).css("font-size","5em")
    $( diner ).css({
     "font-size":"5em",
     "font-weight": "bold"
   });

  }
}());
});