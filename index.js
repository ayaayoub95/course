
$(function(){
  'use strict'
 // this function will make scroll smooth 
 $('.navbar li a').click(function(e){
  e.preventDefault();

  $('html,body').animate({
      // $(this).data('scroll')===> to obtain id of $(this)

      scrollTop:$('#'+$(this).data('scroll')).offset().top + 1
  },1000);
 
});


// add active class to each link
$('.navbar li a').click(function(){
    $(this).parent().addClass("active").siblings().removeClass("active");

});


//sync navbar links  with scroll
$(window).scroll(function(){
$('.block').each(function(){
if($(window).scrollTop() > $(this).offset().top){
var blockId=$(this).attr('id');
$('.navbar a').removeClass('active');
$('.navbar li a[data-scroll="'+blockId+'"]').addClass('active');

}
});

// scroll to top button
var scrollToTop=$('.scroll-to-top');
if($(window).scrollTop() >= 1000){
   if(scrollToTop.is(':hidden')){
   scrollToTop.fadeIn(400);
}}
else{
scrollToTop.fadeOut(400);

}
});

$('.scroll-to-top').click(function(event){
  event.preventDefault();

  $('html,body').animate({
      // $(this).data('scroll')===> to obtain id of $(this)

      scrollTop:0
  },1000);
 
});




 // home and carousel  height
$(window).scroll(function(){
    $("nav").css("margin-top", "0px");
  });
  var winH=$(window).height();
  var winW=$(window).width();
  var  upperH =$('.upper-bar').innerHeight();
  var  navH=$('.navbar').innerHeight();
    $('.home ').height( winH -( upperH + navH ));
    $('.carousel-item').height( (winH -( upperH + navH ) )- 70);

    if(winW <= 767){
      $('.carousel-item').height( winH -( upperH + navH )+150);
     
   
  }

  // caption of home'position
    var d=($('.home').height()-$('.caption').height())/2;
     $('.caption').css('paddingTop',d);


// timer counter down
   
     // Set the date we're counting down to
     var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
     
     // Update the count down every 1 second
     var x = setInterval(function() {
     
       // Get today's date and time
       var now = new Date().getTime();
         
       // Find the distance between now and the count down date
       var distance = countDownDate - now;
         
       // Time calculations for days, hours, minutes and seconds
       var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 *7));
       var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
       // Output the result in an element with id
       document.getElementById("week").innerHTML = weeks;
       document.getElementById("day").innerHTML = days;
       document.getElementById("hr").innerHTML= hours ;
       document.getElementById("min").innerHTML=minutes ; 
       document.getElementById("sec").innerHTML=seconds ;
         
       // If the count down is over, write some text    
     }, 1000);
  
    

     $('html').niceScroll();
 
});

$(window).on('load', function () {
  // fadeout spinner
     $(".load .sk-cube-grid").fadeOut(2000,
         function(){
      // to show scroll of body becaue we make it hidden in load page
                   
                     
             // fadeout parent of spinner (section)
             $(this).parent().fadeOut(2000,
                function() {
          //remove section
             $(this).remove();
                });
     
         });
     });
     
     