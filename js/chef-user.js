
$(document).ready(function()
{


$(".food input[type='checkbox']").click(function()
{
 if($(this).is(':checked'))
   
   {
    $(" #cart").css("border-bottom", " 5px #555555 solid");
  
  window.setTimeout(function()   
           {
               $(" #cart").css("border-bottom", " 0px #555555 solid");
            }, 500);
 }

});



});





 
function openNav() {
  $(".openbtn").hide(0);
  $("#mySidebar").css("width" , "250px");

}

function closeNav() {
  $(".openbtn").show(500);
  $("#mySidebar").css("width" , "0px");
}




  function currentMenu() {
 


     var d = new Date();
  var hr= d.getHours();
  //var hr= parseInt(prompt());



    $(".food").css("display","none");
    $(".food1").css("display","none");



if(9<=hr && hr<22)
{
  
if(9<=hr && hr<12)
{
 $("#nasta").css("display","flex");
}

if(12<=hr && hr<16)
{
  $("#lunch").css("display","flex");
}

if(16<=hr && hr<20)
{
   $("#break").css("display","flex");
  
}

if(20<=hr && hr<22)
{
 $("#dinner").css("display","flex");  
}
}


else
{
$("#closed").css("display","flex"); 
}}




 function allMenu()
  {
     $(".food").css("display","none");
    $(".food1").css("display", "inline-block");
  
  }


