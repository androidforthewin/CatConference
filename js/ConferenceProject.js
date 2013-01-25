$(document).ready(function()
{

// script for the image slider on the front page
var pics = ['img/cat1.jpg', 'img/cat2.jpg', 'img/cat4.jpg', 'img/cat5.jpg', 'img/cat6.jpg', 'img/cat7.jpg', 'img/cat3.jpg'];

var count = pics.length;

$(function() {
  setInterval(Slide, 5000);
});

function Slide() 
{
  $('#imageSlide').fadeOut("slow", function() 
  {
    $(this).attr('src', pics[(pics.length++) % count]).fadeIn("slow");
  });
}


// script for the Countdown clock
// Created By: Tim Henderson
// variable for the event date
// date is in the format (year, month(0-11), day(1-31), hours(0-23), minutes(0-59), seconds(0-59), milliseconds(0-999))
var eventDate = new Date(2012, 11, 1, 9, 0, 0, 0);
  
// other variables
var currentDate, milli, seconds, minutes, hours, days, output;
  
// loop for the counter
var interval = setInterval(function()
{
  // variable for the current date
  currentDate = new Date();
    
  // get the difference in the dates
  milli = DateDiff(eventDate, currentDate);
  seconds = Math.floor(milli / 1000);
  minutes = Math.floor(seconds / 60);
  hours = Math.floor(minutes / 60);
  days = Math.floor(hours / 24);
    
  // vars are now totals, reduce
  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24 - 1;
    
  // output the result
  if (milli <= 0) {
    seconds = minutes = hours = days = 0;
    $("#Countdown #Days").html(days);
    $("#Countdown #Hours").html(hours);
    $("#Countdown #Minutes").html(minutes);
    $("#Countdown #Seconds").html(seconds);
    clearInterval(interval);
  }
  else {
    if ($("#Countdown #Days").html() != days)
      $("#Countdown #Days").html(days);
    if ($("#Countdown #Hours").html() != hours)
      $("#Countdown #Hours").html(hours);
    if ($("#Countdown #Minutes").html() != minutes)
      $("#Countdown #Minutes").html(minutes);
    if ($("#Countdown #Seconds").html() != seconds)
      $("#Countdown #Seconds").html(seconds);
  }
    
}, 500);
  
// returns the milliseconds that have occured between the two dates
function DateDiff(date1, date2) {
  return date1.getTime() - date2.getTime();
}

// menu script
$(".myMenu li").mouseenter(function() 
{
  $(this).find("ul").slideDown("fast");
});

$(".myMenu li").mouseleave(function() 
{
  $(this).find("ul").slideUp("fast");
});

// faq script
$("#holder h3").click(function() 
{
  if($(this).next().css('display')=='none')
    $(this).next().slideDown("fast");
  else
    $(this).next().slideUp("fast");
});

});