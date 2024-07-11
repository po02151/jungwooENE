$(document).ready(function(){
	accordion();
    slideBtntab();
    tabMenu();

    langBtn();
    hamburger();
    mobileHeaderAccordion();

    mainSlider();

    topBtn();

    scrollHeader();

    fileUpload();
});


function fileUpload(){
    $("#sampleFile").change(function(e){
        console.log(e);
        resumeFile = e.target.files[0];
        $("#contactUs_fileName").val(e.target.files[0].name);
        // $('.uploadName').addClass('active');

        if($('#sampleFile').val()){
            $(this).parent('.inputBox').addClass('active');
        }else if(!$('#sampleFile').val()){
            $(this).parent('.inputBox').removeClass('active');
        }

    })
}

function scrollHeader(){
    let lastScroll = 0;
    if($(window).width() > 768) {
        // window 크기가 768보다  클 때
            $(window).on('scroll', function(){
                let scrollTop = $(this).scrollTop();
                if(scrollTop > lastScroll) {
                    //down
                    $('.main header').addClass('active');
                } else {
                    // up
                    $('.main header').removeClass('active');
                }
                lastScroll = scrollTop;
            });
        }
}

function topBtn(){
    $(window).scroll(function(){
        if($(this).scrollTop() == 0){
            $('.topBtn').fadeOut();
        }else if($(this).scrollTop() >= 100){
            $('.topBtn').fadeIn();
        }
    });
    $(".topBtn").click(function() {
        $('html, body').stop().animate({
            scrollTop : 0
        }, 700);
        return false;
    });
}

function mainSlider(){
    
    $('.mainSection_3 ul').slick({
        autoplay: true,
        arrows: true,
        appendArrows: $('.mainSection_3 .arrowBox'),
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        // variableWidth: true,

        responsive: [
              {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
              }
            ]
    });

}

function hamburger(){
    $('.header_mo .hamburger').click(function(){
        $(this).parents('.header_mo').toggleClass('active');

        if($('.header_mo').hasClass('active')){
			$('body').addClass('active');
		}else if(!$('.header_mo').hasClass('active')){
            $('body').removeClass('active');
        }
    })
}

function mobileHeaderAccordion(){
    $('.header_mo .nav > ul > li > span').click(function(){
        $(this).toggleClass('active');
        $(this).nextAll('ul').slideToggle('fast');
        $(this).parent().siblings('li').children('ul').slideUp('fast')
            .parent('li').find('span').removeClass('active');
        return false;
        
    })
}

function langBtn(){
    $('.langBox > button').click(function(){
        $('.langBox > div').toggleClass('active');
    })

}

function accordion(){

    $('.accordionBox .titleBox').click(function(){        
        $('.accordionBox .titleBox').removeClass('active');

        if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else if(!$(this).hasClass('active')){
            $(this).addClass('active');
        }
    })

}


function slideBtntab(){
    $('.slide_tabBtnBox button').click(function(){
        $('.slide_tabBtnBox button').removeClass('active');
        $(this).addClass('active');
        
        if($('.slide_tabBtnBox .tabBtn_1').hasClass('active')){
			$(this).parent('.slide_tabBtnBox').removeClass('active_2 active_3 active_4 active_5');
			$('.slide_tabBtnBox').addClass('active_1');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox .tabContent_1').addClass('active');
		}
		if($('.slide_tabBtnBox .tabBtn_2').hasClass('active')){
			$(this).parent('.slide_tabBtnBox').removeClass('active_1 active_3 active_4 active_5');
			$('.slide_tabBtnBox').addClass('active_2');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox .tabContent_2').addClass('active');
		}
		if($('.slide_tabBtnBox .tabBtn_3').hasClass('active')){
			$(this).parent('.slide_tabBtnBox').removeClass('active_1 active_2 active_4 active_5');
			$('.slide_tabBtnBox').addClass('active_3');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox .tabContent_3').addClass('active');
		}
		if($('.slide_tabBtnBox .tabBtn_4').hasClass('active')){
			$(this).parent('.slide_tabBtnBox').removeClass('active_1 active_2 active_3 active_5');
			$('.slide_tabBtnBox').addClass('active_4');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox .tabContent_4').addClass('active');
		}
		if($('.slide_tabBtnBox .tabBtn_5').hasClass('active')){
			$(this).parent('.slide_tabBtnBox').removeClass('active_1 active_2 active_3 active_4');
			$('.slide_tabBtnBox').addClass('active_5');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox .tabContent_5').addClass('active');
		}
    })
}


function tabMenu(){

    $('.tabBtnBox button, .tabBtnBox li').click(function(){
        $('.tabBtnBox button, .tabBtnBox li').removeClass('active');
        $(this).addClass('active');
        
        if($('.tabBtn_1').hasClass('active')){
			$('.tabContentBox > div').removeClass('active');
			$('.tabContentBox .tabContent_1').addClass('active');
		}
		if($('.tabBtn_2').hasClass('active')){
			$('.tabContentBox > div').removeClass('active');
			$('.tabContentBox .tabContent_2').addClass('active');
		}
		if($('.tabBtn_3').hasClass('active')){
			$('.tabContentBox > div').removeClass('active');
			$('.tabContentBox .tabContent_3').addClass('active');
		}
        
    })
}