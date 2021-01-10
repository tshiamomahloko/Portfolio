$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-item').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-item i').toggleClass("active");
    });
});