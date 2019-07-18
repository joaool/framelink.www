(function ($) {
    "use strict";
    $(document).ready(function($){
        
        // $(".testimonial-slides").owlCarousel({
        //     items: 1,
        //     loop: true,
        //     autoplay: false,
        //     nav: true,
        //     navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
        // });
        // $("#sticker").sticky({topSpacing:0});
        // document.getElementById("focus").focus();
        // document.body.scrollTop = 0; // For Safari
        // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        console.log("1");
        // alert("zzzzzzzzzzzzz");
    });
    console.log("A");
    $("#sticker").sticky({topSpacing:0});

  //   $('.popup-youtube').magnificPopup({
		// disableOn: 700,
		// type: 'iframe',
		// mainClass: 'mfp-fade',
		// removalDelay: 160,
		// preloader: false,
		// fixedContentPos: false
  //   });
    
    $(".hamburger-menu").on("click",function(){
        $(".mobile-menu-wrap").addClass("menu-active");
    });
    
    $(".cross-btn").on("click",function(){
        $(".mobile-menu-wrap").removeClass("menu-active");
    });

    // js validation
    //    $("#success").hide();
    //    $('.submit').click(function(){

	// 	$.post("send.php", $("#myform").serialize(),  function(response) {   
	// 	 $('#success').html(response);
	// 	 $('#success').show('slow');
	// 	});
	// 	return false;
		
	// });


    jQuery(window).on("load",function(){
        $('#preloader-wrapper').delay(1000).fadeOut('slow');
        // console.log("2");
        // setTimeout(function() {
            $('.site').addClass('loaded');
            // document.body.scrollTop = 0; // For Safari
            // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            // window.scrollTo(0, 0);
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            console.log("---->"+($(document).height() - $(window).innerHeight()));
            // $('html,body').scrollTop(0);
            console.log("2");
            // alert("xxx");
        // }, 1);
        // document.body.scrollTop = 0; // For Safari
        // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        // console.log("3");
    });
    console.log("B");
    // $('#sticker').on('sticky-start', function() { 
    //     console.log("stick force Started");
    //     // alert("xxx"); 
    //     document.body.scrollTop = 0; // For Safari
    //     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    // });

}(jQuery));