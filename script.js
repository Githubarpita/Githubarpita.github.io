$(document).ready(function(){
    $(window).scroll(function(){
     if(this.scrollY > 20){
       $('.navbar').addClass("sticky");
     }else{
       $('.navbar').removeClass("sticky");
     }
     if(this.scroll > 500){
       $('.scroll-up-button').addClass("show");
     }else{
       $('.scroll-up-button').removeClass("show");
     }
     
    });

    $('.scroll-up-button').click(function(){
      $('html').animate({scrollTop: 0});
    });



    $('.menu-button').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-button i').toggleClass("active");
    });
});




var typed = new Typed(".typing",{
 strings:["MOBILITY"," E-COMMERCE" ,"Investments"],
 typeSpeed: 100,
 backSpeed: 60,
 loop: true
});

var typed = new Typed(".typing-2",{
 strings:["Excellent Transaction","Smarter Way To Rent","Single KYC","Vast Selection"],
 typeSpeed: 100,
 backSpeed: 60,
 loop: true
});
