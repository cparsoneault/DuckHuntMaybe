var dogTimer;
var dogWalkAnimation = (function(){
  // var timerId;
  return function (width, times, horizontalStartPixel, verticalStartPixel, repeat, element){
    var i = 0;
    dogTimer = setInterval(function(){
      if (i >= times){
        i = 0;
        if (!repeat) clearInterval(dogTimer);
      }
      element.style.backgroundPosition = "-" + (i*width + horizontalStartPixel) + "px " + verticalStartPixel +"px";
      i++;
    }, 300);
  }
})();
var duckTimer;
var duckFlyAnimation = (function(){
  // var timerId;
  return function (width, maxRightFrame, horizontalStartPixel, verticalStartPixel, repeat, element){
    var moveRight = true;
    var moveLeft = false;
    var i = 0;
    duckTimer = setInterval(function(){
      if (i >= maxRightFrame){
        moveLeft = true;
        moveRight = false;
      }
      if (i <= 0){
        if(moveLeft && !repeat){
          clearInterval(duckTimer);
        }
        moveRight = true;
        moveLeft = false;
      }
      element.style.backgroundPosition = "-" + (i*width + horizontalStartPixel) + "px " + verticalStartPixel + "px";
      if (moveRight){
        i++;
      }
      else if (moveLeft){
        i--;
      }
    }, 300);
  }
})();

$(document).ready(function(){
  dogWalkAnimation(120, 5, 0, 0, true, document.getElementById('dog1')); //dog walk
  // duckFlyAnimation(120, 4, 0, 0, true, document.getElementById('dog1')); //dog walk?
  $(".dogAnim").on("click", function(){
    // dogWalkAnimation(120, 3, 0, -115, document.getElementById('dog1')); //dog jump
    console.log("Dog Doh!");
  });
  duckFlyAnimation(75, 2, 0, -230, true, document.getElementById('duck1')); //blue duck horizontal flying
  $(".duckAnim").on("click", function(){
    // duckFlyAnimation(75, 0, 0, -230, false, document.getElementById('duck1')); //blue duck horizontal flying
    clearInterval(duckTimer);
    $('#duck1').css("background-position", "0px -460px");
    // console.log(window);
    // window.clearInterval(timerId);
    console.log("Duck Doh!");
    // duckFlyAnimation(75, 2, 0, -305, document.getElementById('duck1')); //blue duck diagonal flying
    // duckFlyAnimation(75, 2, 0, -380, document.getElementById('duck1')); //blue duck diagonal flying
  });
});
