(function() {

  'use strict';

  var home = document.getElementById('home');
  var about = document.getElementById('about');
  var camping = document.getElementById('camping');
  var hunting = document.getElementById('hunting');
  var skateboarding = document.getElementById('skateboarding');
  var skiing = document.getElementById('skiing');
  var fishing = document.getElementById('fishing');
  var paddlesports = document.getElementById('paddlesports');
  var cycling = document.getElementById('cycling');
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

   $(window).on('beforeunload', function() {
       $(window).scrollTop(0);
   });


var running = false;
var windowOffsetScroll = window.pageYOffset;
var windowHeight = window.innerHeight;

document.onkeydown = function(e) {
  if(e.keyCode == 37 || e.keyCode == 38 && running == false) {
    event.preventDefault(e);
    windowOffsetScroll = window.pageYOffset;

    //scroll to #home
    if(running == false && windowOffsetScroll <= $('#about').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#home').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to #about
    if(running == false && windowOffsetScroll > $('#about').offset().top && windowOffsetScroll <= $('#camping').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#about').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to #camping
    if(running == false && windowOffsetScroll > $('#camping').offset().top && windowOffsetScroll <= $('#hunting').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#camping').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to #hunting
    if(running == false && windowOffsetScroll > $('#hunting').offset().top && windowOffsetScroll <= $('#skateboarding').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#hunting').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to #skateboarding
    if(running == false && windowOffsetScroll > $('#skateboarding').offset().top && windowOffsetScroll <= $('#skiing').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#skateboarding').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to #skiing
    if(running == false && windowOffsetScroll > $('#skiing').offset().top && windowOffsetScroll <= $('#fishing').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#skiing').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to #fishing
    if(running == false && windowOffsetScroll > $('#fishing').offset().top && windowOffsetScroll <= $('#paddlesports').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#fishing').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to #paddlesports
    if(running == false && windowOffsetScroll > $('#paddlesports').offset().top && windowOffsetScroll <= $('#cycling').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#paddlesports').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to #cycling
    if(running == false && windowOffsetScroll >= $('#cycling').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#paddlesports').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
  }

  if(e.keyCode == 39 || e.keyCode == 40 && running == false) {
    event.preventDefault(e);
    windowOffsetScroll = window.pageYOffset;
    //scroll to #about
    if(running == false && windowOffsetScroll < $('#about').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#about').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to #camping
    if(running == false && windowOffsetScroll >= $('#about').offset().top && windowOffsetScroll < $('#camping').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#camping').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to #hunting
    if(running == false && windowOffsetScroll >= $('#camping').offset().top && windowOffsetScroll < $('#hunting').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#hunting').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to #skateboarding
    if(running == false && windowOffsetScroll >= $('#hunting').offset().top && windowOffsetScroll < $('#skateboarding').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#skateboarding').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to skiing
    if(running == false && windowOffsetScroll >= $('#skateboarding').offset().top && windowOffsetScroll < $('#skiing').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#skiing').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to fishing
    if(running == false && windowOffsetScroll >= $('#skiing').offset().top && windowOffsetScroll < $('#fishing').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#fishing').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to paddlesports
    if(running == false && windowOffsetScroll >= $('#fishing').offset().top && windowOffsetScroll < $('#paddlesports').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#paddlesports').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
    //scroll to cycling
    if(running == false && windowOffsetScroll >= $('#paddlesports').offset().top && windowOffsetScroll < $('#cycling').offset().top) {
      running = true;
      $('html, body').animate({
        scrollTop: $('#cycling').offset().top}, 500);
        setTimeout(function(){ running = false;}, 500);
    }
  }

  else {
    return;
  }
}

arrowUp.addEventListener('click', function() {

  windowOffsetScroll = window.pageYOffset;

  //scroll to #home
  if(running == false && windowOffsetScroll <= $('#about').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#home').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to #about
  if(running == false && windowOffsetScroll > $('#about').offset().top && windowOffsetScroll <= $('#camping').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#about').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to #camping
  if(running == false && windowOffsetScroll > $('#camping').offset().top && windowOffsetScroll <= $('#hunting').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#camping').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to #hunting
  if(running == false && windowOffsetScroll > $('#hunting').offset().top && windowOffsetScroll <= $('#skateboarding').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#hunting').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to #skateboarding
  if(running == false && windowOffsetScroll > $('#skateboarding').offset().top && windowOffsetScroll <= $('#skiing').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#skateboarding').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to #skiing
  if(running == false && windowOffsetScroll > $('#skiing').offset().top && windowOffsetScroll <= $('#fishing').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#skiing').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to #fishing
  if(running == false && windowOffsetScroll > $('#fishing').offset().top && windowOffsetScroll <= $('#paddlesports').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#fishing').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to #paddlesports
  if(running == false && windowOffsetScroll > $('#paddlesports').offset().top && windowOffsetScroll <= $('#cycling').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#paddlesports').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to #cycling
  if(running == false && windowOffsetScroll >= $('#cycling').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#paddlesports').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
});

arrowDown.addEventListener('click', function() {

  windowOffsetScroll = window.pageYOffset;
  //scroll to #about
  if(running == false && windowOffsetScroll < $('#about').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#about').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to #camping
  if(running == false && windowOffsetScroll >= $('#about').offset().top && windowOffsetScroll < $('#camping').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#camping').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to #hunting
  if(running == false && windowOffsetScroll >= $('#camping').offset().top && windowOffsetScroll < $('#hunting').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#hunting').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to #skateboarding
  if(running == false && windowOffsetScroll >= $('#hunting').offset().top && windowOffsetScroll < $('#skateboarding').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#skateboarding').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to skiing
  if(running == false && windowOffsetScroll >= $('#skateboarding').offset().top && windowOffsetScroll < $('#skiing').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#skiing').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to fishing
  if(running == false && windowOffsetScroll >= $('#skiing').offset().top && windowOffsetScroll < $('#fishing').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#fishing').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to paddlesports
  if(running == false && windowOffsetScroll >= $('#fishing').offset().top && windowOffsetScroll < $('#paddlesports').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#paddlesports').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }
  //scroll to cycling
  if(running == false && windowOffsetScroll >= $('#paddlesports').offset().top && windowOffsetScroll < $('#cycling').offset().top) {
    running = true;
    $('html, body').animate({
      scrollTop: $('#cycling').offset().top}, 500);
      setTimeout(function(){ running = false;}, 500);
  }

});





/* up down button navigation

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


*/

/* disable scroll

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

*/








}());
