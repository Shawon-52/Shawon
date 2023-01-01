$(document).ready(function(){
    $(window).scroll(function(){
    
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

  
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        
        $('html').css("scrollBehavior", "smooth");
    });

    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    
    var typed = new Typed(".typing", {
        strings: ["Freelancer"],
        typeSpeed: 500,
        backSpeed: 500,
        
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Student"],
        typeSpeed: 500,
        backSpeed: 500,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: [ "2016"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });
    var typed = new Typed(".typing-4", {
        strings: [ "2018"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });
    var typed = new Typed(".typing-5", {
        strings: [ "Running Student"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });
    var typed = new Typed(".typing-6", {
        strings: [ "HTML","CSS","JS"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });
    var typed = new Typed(".typing-7", {
        strings: [ "Adobe 7.0"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });   
    var typed = new Typed(".typing-9", {
        strings: [ "Microsoft Word","Xcel","Slide"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });
    var typed = new Typed(".typing-10", {
        strings: [ " this is my website, so I have to say something about myself. It's hard to talk about myself, get to know me through my work. Hope to continue serving you ."],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
    
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 5000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});