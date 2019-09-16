
$(document).ready(function()
{
  
      usr= $("#usr");
     pwd= $("#pwd");

     fn =$("#inFn");
     ln =$("#inLn");
     email =$("#email");
     gm = $("#inGM").prop("checked");
     gf = $("#inGF").prop("checked");
     dob =$("#dateofbirth");
    
  
     pwd1 =$("#pwd1");
     pwd2 =$("#pwd2");

     pwd1img= $("#pwd1img"); 
     pwd2img= $("#pwd2img");

         right  = "../img/svg/right.svg";
         wrong  =  "../img/svg/wrong.svg";
         warning=  "../img/svg/warning.svg";
    

     chkcaptcha = $("#chkcaptcha");
     captcha    = $("#captcha");
     captchaimg = $("#captchaimg");

  min=1000; 
  max=9999;  
  var random =Math.floor(Math.random() * (+max - +min)) + +min; 
   
  
  $("#captcha").text(random);


 

$("#PopSignUp").hover(function()
{
    $("#SignUpContainer").show(100);
    $("#btnX").show(1000);

    $("#LoginA").hide(500);
    $("#LoginContainer").hide(1000);
   
   });




    

$("#btnX").click(function()
{
  $("#SignUpContainer").hide(500);
    $("#LoginContainer").show(1000);
      $("#LoginA").show(1000);
        $("#btnX").hide(500);
   });




    $("#logo").mouseenter(function ()
    {
      $("#logo").attr("src","../img/svg/logotxt-c.svg");
  });


    $("#logo").mouseleave(function ()
    {
      $("#logo").attr("src","../img/svg/logotxt-bw.svg");
  });

  $("#logo-f").mouseenter(function ()
    {
     
      $("#logo-f").attr("src","../img/svg/logotxt-w.svg");
  

  });


    $("#logo-f").mouseleave(function ()
    {
      $("#logo-f").attr("src","../img/svg/logotxt-bw.svg");

  });




$("#btnLogin").click(function()

{
   
    if(usr.val()==""  && pwd.val()== "")
        {
              
                $("#btnLogin").addClass("animated shake");
                $("#btnLogin").css("background-color","red");
                $("#txt").fadeIn(500);
                $("#txt").text("Credentials needed");

              window.setTimeout(function() 
              {
            $("#btnLogin").removeClass("animated shake");
            $("#btnLogin").css("background-color","#1da1f2");
             $("#txt").fadeOut(500);
            }, 2000);
            
        }
    
    else if(usr.val()==""  | pwd.val()== "")    
       {
          $("#btnLogin").addClass("animated shake");
                $("#btnLogin").css("background-color","red");
                $("#txt").fadeIn(500);
                $("#txt").text("Invalid credentials");
                
              window.setTimeout(function() 
              {
            $("#btnLogin").removeClass("animated shake");
            $("#btnLogin").css("background-color","#1da1f2");
             $("#txt").fadeOut(500);
            }, 2000);
             
        
       }

     else if(usr.val()=="admin"  && pwd.val()== "admin")    
       {   
             window.location.replace("../html/chef-user.html");
        
       }   

   

    else  
        {
                $("#btnLogin").addClass("animated shake");
                $("#btnLogin").css("background-color","red");
                $("#txt").fadeIn(500);
                $("#txt").text("Incorrect credentials");
                
           window.setTimeout(function() 
              {
            $("#btnLogin").removeClass("animated shake");
            $("#btnLogin").css("background-color","#1da1f2");
             $("#txt").fadeOut(500);
            }, 2000);

        }  
});



$("#eye").mouseenter(function ()
    {
        $("#pwd").attr("type" , "text");
    });


$("#eye").mouseleave(function ()
    {
        $("#pwd").attr("type" , "password");
    });





//$(".food1 input[type='checkbox']").checked
//if ($('#isAgeSelected'))

//  $("#txtAge").toggle(this.checked);
//$(".food1 input[type='checkbox']").checked


//   $(" #cart").css("border-bottom", " 5px #555555 solid");










  $("#pwd1").blur(function () 
  {
      
    if ($("#pwd1").val().length==0) 
        {
            $("#pwd1img").show();           
             $("#pwd1img").attr("src","../img/svg/warning.svg");
           
           window.setTimeout(function()   
           {
            $("#pwd1img").hide();
            }, 3000);
}
});

    $("#pwd2").blur(function () 
    {
      
    if (pwd1.val().length>0) 
        {
             

           if(pwd1.val()==pwd2.val())
           {
           
            pwd2img.show();           
            pwd2img.attr("src",right);
           
           window.setTimeout(function()   {
  
            pwd2img.hide();
          
            }, 4000);
           }
           else
             {
            
            if(pwd2.val().length==0)
            {
            pwd2img.show();
            pwd2img.attr("src",warning);
           
           window.setTimeout(function()   {
          
            pwd2img.hide();
          
            }, 2000);
            }
            else
              {
                pwd2img.show();
                pwd2img.attr("src",wrong);
           
           window.setTimeout(function()   {
            pwd2img.hide();
          
            }, 2000);
           
           }
        }
      }
    
      
    else
        {
           if(pwd2.val().length==0)
        {   
            pwd2img.show();
            pwd2img.attr("src",warning);
             
           window.setTimeout(function()   {
            pwd2img.hide();          
            }, 2000);
           
        }
            pwd1img.show();
           pwd1img.attr("src",warning);
            
           
           window.setTimeout(function()   {
            pwd1img.hide();          
            }, 2000);
           
           }
        });









    $("#chkcaptcha").blur(function () 
    {
     
      if (chkcaptcha.val().length==0 ) 
      {   
          captchaimg.show();
          captchaimg.attr("src",warning);
            
           
           window.setTimeout(function()   
           {
           captchaimg.hide();          
            }, 2000);
      }

      else if (chkcaptcha.val().length>4 || chkcaptcha.val().length<4 )

      {

          captchaimg.show();
          captchaimg.attr("src",wrong);
            
           
           window.setTimeout(function()   
           {
            captchaimg.hide();          
            }, 2000);
      }
       else if (captcha.text()  == chkcaptcha.val()  ) 

      {

          captchaimg.show();
          captchaimg.attr("src",right);
            
           
           window.setTimeout(function()   
           {
            captchaimg.hide();          
            }, 4000);
      }
      else
      {

          captchaimg.show();
          captchaimg.attr("src",wrong);
            
           
           window.setTimeout(function()   
           {
            captchaimg.hide();          
            }, 2000);
      }



     });   


  $("#btnSignUp").click(function()
  {
    var gm = $("#inGM").prop("checked");
    var gf = $("#inGF").prop("checked");



   
    if( fn.val()=="" )
      {
         
          fn.css("border"," 1px solid #ff4c4c");
            
           window.setTimeout(function()   {
           
            fn.css("border"," 1px solid #e6ecf0");
          
            }, 2000);
           
      }
     
      if( ln.val()=="" )
      {
         
         
          ln.css("border"," 1px solid #ff4c4c");
            
           window.setTimeout(function()   {
          
            ln.css("border"," 1px solid #e6ecf0");
          
            }, 2000);
           
      }

      if( email.val()=="" )
      {
       
         
          email.addClass("animated shake");
          email.css("border"," 1px solid #ff4c4c");
            
           window.setTimeout(function()   {
            email.removeClass("animated shake");
            email.css("border"," 1px solid #e6ecf0");
          
            }, 2000);
           
      }

      if (gm==false && gf==false)
       {

          $("#lblF").css("color","  #ff4c4c");
          $("#lblM").css("color","  #ff4c4c");  
           window.setTimeout(function()   {
           
          $("#lblM").css("color"," #555555");
          $("#lblF").css("color","  #555555");
            }, 2000);
            
      }
       if( dob.val()=="" )
      {
         
          dob.css("border"," 1px solid #ff4c4c");
            
           window.setTimeout(function()   {
           
            dob.css("border"," 1px solid #e6ecf0");
          
            }, 2000);
           
      }
      
      if( pwd1.val()=="" )
      {
         
        
         pwd1.css("border"," 1px solid #ff4c4c");
            
           window.setTimeout(function()   {
          
            pwd1.css("border"," 1px solid #e6ecf0");
          
            }, 2000);
           
      }
      if( pwd2.val()=="" )
      {
         
         
         pwd2.css("border"," 1px solid #ff4c4c");
            
           window.setTimeout(function()   {
           
            pwd2.css("border"," 1px solid #e6ecf0");
          
            }, 2000);
           
      }
      

       if(  chkcaptcha.val()=="" )
      {
         
           chkcaptcha.css("border"," 1px solid #ff4c4c");
            
           window.setTimeout(function()   {
           
            chkcaptcha.css("border"," 1px solid #e6ecf0");
          
            }, 2000);
           
      }


      if( $("#captcha").text()== chkcaptcha.val() && pwd1.val()== pwd2.val() && pwd1.val().length>0 && fn.val().length>0  && ln.val().length>0 
                  && email.val().length>0 && dob.val().length>0 && gm==true || gf==true )
      {

        
         
    $("#popup1").css("visibility", "visible");
       $("#popup1").css( "opacity", "1");
        
        $("#popup1").click(function()
        {
           
        
             
        $("#popup1").css("visibility", "hidden");
        $("#popup1").css( "opacity", "0");
        $("#SignUpContainer").hide(500);
        $("#LoginContainer").show(1000);
        $("#LoginA").show(1000);
        $("#btnX").hide(500);
        });
        
       
       
      }

      else
      {
         if( $("#captcha").text()==$ ("#chkcaptcha").val() )
          {}
          else
          {
           chkcaptcha.css("border"," 1px solid #ff4c4c");
            
           window.setTimeout(function()   {
           
            chkcaptcha.css("border"," 1px solid #e6ecf0");
          
            }, 2000);
           
      }
          if(  $("#pwd1").val()== $("#pwd2").val() )
            {}
          else
          {
         
           $("#pwd2").css("border"," 1px solid #ff4c4c");
           $("#pwd1").css("border"," 1px solid #ff4c4c");
            
           window.setTimeout(function()   {
           
            $("#pwd1").css("border"," 1px solid #e6ecf0");
            $("#pwd2").css("border"," 1px solid #e6ecf0");
          
            }, 2000);
           
      }
              
                $("#btnSignUp").css("background-color","red");
                
              window.setTimeout(function() 
              {
           
            $("#btnSignUp").css("background-color","#1da1f2");
              }, 2000);

    }



  });


});


