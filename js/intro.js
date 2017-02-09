$(document).ready(function (){
            
    if ($(window).width() > 625) {/*Intro to site animation on desktop*/               

        function pt1(){
            $('.title-image').delay(1000).addClass("uk-background-blend-darken").animate({backgroundColor: 'hsla(0, 0%, 20%, 0.6)'}, 'slow');

            $('#pt1').delay(1000).toggle("bounce", { times: 3 }, "slow"         ).delay(1000).fadeToggle(1000);
        };

        function pt2(){                        
            $('#pt2').removeClass("uk-hidden").delay(1000).toggle("drop", { direction: 'left' }, "slow").delay(2000).fadeToggle(1000);
        };

        function pt3(){                        
            $('#pt3').removeClass("uk-hidden").delay(1000).toggle("drop", { direction: 'up' }, "slow").delay(500).animate({lineHeight: '-=35px'}, "slow").show(0, function(){
                $('.small-span').fadeToggle(1500).delay(2000).show(0, function(){
                    $('#pt3').fadeToggle(1000);
                    $('.title-image').animate({backgroundColor: 'hsla(0, 0%, 20%, 0)'}, 'slow');
                });
            });
        };

        pt1();
        setTimeout(pt2, 3000);
        setTimeout(pt3, 7000);                

    } else {/*Intro to site animation on mobile*/                 

        function pt4(){   
            $('.title-image').delay(1000).addClass("uk-background-blend-darken").animate({backgroundColor: 'hsla(0, 0%, 20%, 0.6)'}, 'slow');
            $('#pt3').removeClass("uk-hidden").delay(1000).toggle("drop", { direction: 'up' }, "slow").show(0, function(){
                $('.small-span').fadeToggle(1500).delay(2000).show(0, function(){
                    $('#pt3').fadeToggle(1000);
                    $('.title-image').animate({backgroundColor: 'hsla(0, 0%, 20%, 0)'}, 'slow');
                });
            });
        };

        pt4();

    }

});