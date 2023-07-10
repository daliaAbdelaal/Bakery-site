//active class
$('.navbar-nav li a').click(function () {
        $('.navbar-nav').find(".active").removeClass("active");
        $(this).parent().addClass("active");
    })

var homeOffest=$('#home').offset().top;
//change navbar background when scroll
$(window).scroll(function(){
        let topOffset=$(window).scrollTop();
      

        if($(document).innerWidth()<=991&&topOffset<=homeOffest)
        {
                $('.navbar-brand img').attr('src','images/bakery-color.png');
        }
        else if(topOffset>homeOffest)
        {
                $('.navbar').css({'background-color':'#fff','transition':'.4s all','box-shadow': '0 13px 8px -10px #0000001a'});
                $('.navbar-brand img').attr('src','images/bakery-color.png');
                $('.nav-link').css({'color':'#999'});
                $('.navbar-toggler-icon i').css({'color':'#8e7754'})
                // $('.nav-link').not('.active>.nav-link').hover(function(){
                //         $(this).css({'color':'#111'})
                // },function(){
                //         $(this).css({'color':'#999'})
                // })
                $('.active>.nav-link').css('color','#111');
    
        }else
        {
                $('.navbar').css({'background-color':'transparent','box-shadow':'none'});
                $('.navbar-brand img').attr('src','images/bakery-light-1.png');
            
                $('.nav-link').css({'color':'#fff'})
                $('.navbar-toggler-icon i').css({'color':'#fff'})
                // $('.nav-link').not('.active>.nav-link').hover(function(){
                //         $(this).css({'color':'#8e7754'})
                // },function(){
                //         $(this).css({'color':'#fff'})
                //         })
                $('.active>.nav-link').css('color','#e0dcd2');

        }
        //scrollup button
        if(topOffset>homeOffest)
        {
                $('.scrollup i').fadeIn(500)
        }else
        {
                $('.scrollup i').fadeOut(500)
        }

})
$('.scrollup i').click(function(){
        $('body,html').animate({scrollTop:0},500)
})

//wheel
$('.scroll').click(function(){
        let aboutOffest=$('#about').offset().top;
        $('body,html').animate({scrollTop:aboutOffest},500)
})
//scroll mothing
$('.nav-link').not('.dropdown-toggle').click(function(){
        let currentLink=$(this).attr('href');
        let currentOffset=$(currentLink).offset().top;
        $('body,html').animate({scrollTop:currentOffset},500)
})


//loading page untill document ready
$(document).ready(function(){
        $('.load').fadeOut(1000,function(){
                $('body').css('overflow','visible')
        })
})

// $('.navbar-toggler-icon').click(function(){
//         let icon=$(this).html();
//         let open='<i class="fas fa-bars "></i>';
//         if(icon==open)
//         {
//                 $(this).html('<i class="fas fa-times"></i>');
//                 $('.navbar-collapse').slideDown(1000)
//         }else
//         {
//                 $(this).html('<i class="fas fa-bars "></i>') ;
//                 $('.navbar-collapse').slideUp(1000)
//         }
        
// })

//side bar
var bgColor=['#218FE6','#F44336','#E91E63','#9C27B0','#3F51B5','#2196F3','#00BCD4','#009688','#4CAF50','#8DBF53','#FFC107','#FF9800','#FF5722','#795548','#607D8B']
for(var i=0;i<bgColor.length;i++)
{
        $('.color-option li').eq(i).css('background-color',bgColor[i]);  
}
$('.color-option li').click(function()
{
        var color=$(this).css('background-color');
        $('.bgChange').css('background-color',color);
        $('.textChange').css('color',color)
})


var width=$('.color-option').outerWidth();
$('.color-box').css('right',-width);
 
$('.color-box i').click(function(){
     if($('.color-box').css('right')=='0px')
     {
        $('.color-box').animate({'right':-width},1000); 

     }else
     {
        $('.color-box').animate({'right':0},1000); 

     }
})