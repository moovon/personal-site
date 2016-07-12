  //projects animation
  $(function() {
        $('#sti-menu').iconmenu({
          animMouseenter  : {
            'mText' : {speed : 400, easing : 'easeOutExpo', delay : 140, dir : 1},
            'sText' : {speed : 400, easing : 'easeOutExpo', delay : 0, dir : 1},
            'icon'  : {speed : 800, easing : 'easeOutBounce', delay : 280, dir : 1}
          },
          animMouseleave  : {
            'mText' : {speed : 400, easing : 'easeInExpo', delay : 140, dir : 1},
            'sText' : {speed : 400, easing : 'easeInExpo', delay : 280, dir : 1},
            'icon'  : {speed : 400, easing : 'easeInExpo', delay : 0, dir : 1}
          }
        });
      });
  //projects animation

$(window).scroll(function(){
      if ($(this).scrollTop() > 135) {
          $('#myButton').addClass('fixed');
      } else {
          $('#myButton').removeClass('fixed');
      }
  });




/* triggers event when bottom of the page is reached*/
 /* $(window).scroll(function() {   
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       alert("bottom!");
   }
});*/

//displaying an element after certain time
   $(document).ready(function() {

      $('#aboutmeinout').hide().delay(500).fadeIn(3200);
      $('#hello').hide().delay(10).fadeIn(7000);
      $('#aboutmeinout').delay().hide().fadeOut(8000);
      $('#propic').hide().delay(3000).fadeIn(2200);
      $('#introdiv').hide().delay(2000).fadeIn(3200);
      $('#contacthead').hide().delay(500).fadeIn(3200);
      $('#aboutmeconclusion').hide().delay(500).fadeIn(3200);
     
      


      //$('#motivation').remove().delay(8000).fadeOut(2200);
});






/*competitve programming- image changing*/
function codechef()
{
var img = document.getElementById("cpprofiles");
img.src="../static/images/cp5.png";
return false;
}

function cp()
{
var img = document.getElementById("cpprofiles");
img.src="../static/images/cp1.png";
return false;
}

function spoj()
{
var img = document.getElementById("cpprofiles");
img.src="../static/images/cp6.png";
return false;
}

function hackerearth()
{
var img = document.getElementById("cpprofiles");
img.src="../static/images/cp7.png";
return false;
}

function others()
{
var img = document.getElementById("cpprofiles");
img.src="../static/images/cp8.png";
return false;
}

/*competitve programming- image changing*/

$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});


/*scrolls smoothly to a specific div when clicked a link*/
/*$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});*/
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

/*scrolls to a specific div when clicked a link*/
/*tooltips*/
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
/*tooltips*/




//profile picture changer js
/*
var imgArray = [ '../static/images/profile8.png', '../static/images/profile2.jpg', '../static/images/profile3.jpg','../static/images/profile4.jpg','../static/images/profile5.jpg','../static/images/profile6.jpg','../static/images/profile.png'];
var counter = 0;
document.getElementById('myButton').onmouseover = function () {  
document.getElementById('myButton').src = imgArray[counter % imgArray.length]; 
counter += 1;
}

document.getElementById('myButton').onmouseout = function () {  
document.getElementById('myButton').src = imgArray[counter % imgArray.length]; 
counter += 1;
}
*/
//contact me form starts
// Input Lock
// Input Lock

//contact me form ends


//carousel

//profiles.html
$('.all-content').hide();

var bgColor;
var effect = 'animated bounceInLeft'; /* bounceIn, bounceInUp, bounceInDown, bounceInLeft,
										 bounceInRight, rotateIn, rotateInUpLeft, rotateInDownLeft,
										 rotateInUpRight, rotateInDownRight  */

$('.content li').click(function(){
	$('.card-front, .card-back').hide();
	$('.content li').removeClass('active').hide().css('border','none');
	$(this).addClass('active').show();
	bgColor = $('.active .card-back').css('background-color');
	$('.content').css('background-color',bgColor);
	$('.close, .all-content').show();
	$('.responsive').append('<span class="close">close</span>').addClass(effect);
});


$('.responsive').on('click', '.close', function(){

	$('.close').remove();
	bgColor = $('.active .card-front').css('background-color');
	$('.responsive').removeClass(effect);
	$('.all-content').hide();
	$('.content li').removeClass('active').show().css({ 'border-bottom':'1px solid #2c2c2c',
													    'border-left':'1px solid #2c2c2c' });
	$('.card-front, .card-back').show();
	$('.content').css('background-color',bgColor);
});
//profiles.html


//map location

   
    var map;
    var geocoder;
    function InitializeMap() {

        var latlng = new google.maps.LatLng(-34.397, 150.644);
        var myOptions =
        {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        map = new google.maps.Map(document.getElementById("map"), myOptions);
    }

    function FindLocaiton() {
        geocoder = new google.maps.Geocoder();
        InitializeMap();

        var address = 'silchar';
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });

            }
            else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });

    }


    function Button1_onclick() {
        FindLocaiton();
    }

    window.onload = InitializeMap;


//map location


//jkm



//blurred background new window

//blurred background new window


//Quotes changing with time
/*function nextMsg() {
    if (messages.length == 0) {
        // once there is no more message, do whatever you want
        //alert("redirecting");
    } else {
        // change content of message, fade in, wait, fade out and continue with next message
        $('#quotes').html(messages.pop()).fadeIn(2500).delay(2000).fadeOut(2500, nextMsg);
    }
};
// list of messages to display
var messages = [
    "Hello!",
    "This is a website!",
    "You are now going to be redirected.",
    "Are you ready?",
    "You're now being redirected..."
].reverse();

// initially hide the message
$('#quotes').hide();

// start animation
nextMsg();*/
//Quotes changing with time


$(window).scroll(function(event) {
  function footer()
    {var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
        var scroll = $(window).scrollTop(); 
         if($(window).scrollTop() + $(window).height() == $(document).height()) { 
            $(".footer-nav").fadeIn("slow").addClass("show");
        }
        else
        {
            $(".footer-nav").fadeOut("slow").removeClass("show");
        }
        
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            if ($('.footer-nav').is(':hover')) {
            footer();
        }
            else
            {
              $(".footer-nav").fadeOut("slow");
            }
    }, 2000));
    }
    footer();
});




/*responsive fonts*/

//responsive fonts*//

