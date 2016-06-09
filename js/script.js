(function() {

  'use strict';

  var home = document.getElementById('home');
  var cycling = document.getElementById('cycling');
  var camping = document.getElementById('camping');
  var arrowUp = document.getElementById('arrow-nav-up');
  var arrowDown = document.getElementById('arrow-nav-down');
  var windowHeight = window.innerHeight;

  $('body').scrollspy({ target: '#navi-main' })
  $(".navbar-nav li a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

  var running = false;

  document.onkeydown = function(e) {
    if(e.keyCode == 37 || e.keyCode == 38 && running == false) {
      event.preventDefault(e);
      running = true;
      $('html, body').animate({
    scrollTop: window.pageYOffset - windowHeight
 }, 500);
      setTimeout(function(){ running = false; }, 500);
    }

    if(e.keyCode == 39 || e.keyCode == 40 && running == false) {
      event.preventDefault(e);
      running = true;
      windowHeight = window.innerHeight;
      $('html, body').animate({
    scrollTop: window.pageYOffset + windowHeight
 }, 500);
      setTimeout(function(){ running = false; }, 500);
    }

    else {
      return;
    }
  }

  arrowUp.addEventListener('click', function() {
    if(running == false) {
      running = true;
      $('html, body').animate({
    scrollTop: window.pageYOffset - windowHeight
 }, 500);
      setTimeout(function(){ running = false; }, 500);
    }
  });

  arrowDown.addEventListener('click', function() {
    if(running == false) {
      running = true;
      windowHeight = window.innerHeight;
      $('html, body').animate({
    scrollTop: window.pageYOffset + windowHeight
 }, 500);
      setTimeout(function(){ running = false; }, 500);
    }
  });


var timeStamp = new Date().getTime();


  $('body').bind('DOMMouseScroll', function(e){
    var timeNow = new Date().getTime();

  // Need to prevent the default scrolling behavior


  // If the last mousescroll happened less that 100 ms ago, update
  // timeStamp and do nothing
  if (timeNow - timeStamp < 5) {
      timeStamp = timeNow;
      return;
      }

      else {
        timeStamp = timeNow;
      if(e.originalEvent.detail > 0 && running == false) {
          //scroll down
          running = true;
          windowHeight = window.innerHeight;
          $('html, body').animate({
        scrollTop: window.pageYOffset + windowHeight
     }, 500);
        setTimeout(function(){ running = false; }, 500);
        return;

      }else {
          //scroll up
          if(running == false) {
            running = true;
            $('html, body').animate({
          scrollTop: window.pageYOffset - windowHeight
       }, 500);
            setTimeout(function(){ running = false; }, 500);
            return;
          }
      }
    }

      //prevent page fom scrolling
      return false;
  });

  //IE, Opera, Safari
  $('body').bind('mousewheel', function(e){
    var timeNow = new Date().getTime();

  // Need to prevent the default scrolling behavior
  event.preventDefault();

  // If the last mousescroll happened less that 100 ms ago, update
  // timeStamp and do nothing
  if (timeNow - timeStamp < 100) {
      timeStamp = timeNow;
      return;
  } else {
    timeStamp = timeNow;
      if(e.originalEvent.wheelDelta < 0) {
          //scroll down
          running = true;
          windowHeight = window.innerHeight;
          $('html, body').animate({
        scrollTop: window.pageYOffset + windowHeight
     }, 500);
     setTimeout(function(){ running = false; }, 500);
     return;

      }else {
          //scroll up
          if(running == false) {
            running = true;
            $('html, body').animate({
          scrollTop: window.pageYOffset - windowHeight
       }, 500);
            setTimeout(function(){ running = false; }, 500);
          return;}
      }
    }

      //prevent page fom scrolling
      return false;
  });










}());
