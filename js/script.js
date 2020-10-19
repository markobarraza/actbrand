// Slider Header
  var swiper = new Swiper('.swiper-header', {
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 500,
    effect: 'fade',
  });



  // slider
  var swiper = new Swiper('.swiper-cards', {
    slidesPerView: 1,
    spaceBetween: -30,
    freeMode: true,
    loop: true,
    // init: false,
    // Navigation arrows
    navigation: {
      nextEl: '.icon-arrow_forward_ios',
      prevEl: '.icon-arrow_back_ios',
    },
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    }
  });
// PreLoad
  window.onload = function(){
    $("#preload").fadeOut();
    $("body").removeClass("overflow");
  }
  // scroll to
  $(document).ready(function(){
    $('.scrollspy').scrollSpy( {
      scrollOffset: 10,
      throttle: 10000
    });
    $('.sidenav').sidenav();
    $('.modal').modal();
    // Elige tu ActBrand
    // Sexo a edad
    $(".btn-hombre").on("click", function(){
      $( "#sexo" ).fadeOut(500);
      $( "#edad-hombre" ).delay( 500 ).fadeIn(1000)        
    })
    $(".btn-mujer").on("click", function(){
      $( "#sexo" ).fadeOut(500);
      $( "#edad-mujer" ).delay( 500 ).fadeIn(1000)        
    })
    // edad a intereses
    $(".btn-edad1").on("click", function(){
      $( "#edad-hombre" ).fadeOut(500);
      $( "#edad-mujer" ).fadeOut(500);
      $( "#interes_15-30" ).delay( 500 ).fadeIn(1000)        
    })
    $(".btn-edad2-h").on("click", function(){
      $( "#edad-hombre" ).fadeOut(500);
      $( "#edad-mujer" ).fadeOut(500);
      $( "#interes_30-60-h" ).delay( 500 ).fadeIn(1000)        
    })
    $(".btn-edad2-m").on("click", function(){
      $( "#edad-hombre" ).fadeOut(500);
      $( "#edad-mujer" ).fadeOut(500);
      $( "#interes_30-60-m" ).delay( 500 ).fadeIn(1000)        
    })
    $(".btn-edad3").on("click", function(){
      $( "#edad-hombre" ).fadeOut(500);
      $( "#edad-mujer" ).fadeOut(500);
      $( "#interes_60" ).delay( 500 ).fadeIn(1000)        
    })
    // intereses a final
    // 15 - 30
    $(".btn1-1530").on("click", function(){
      $( "#plantilla" ).fadeOut(500);
      $( "#interes_15-30" ).fadeOut(500);
      $( "#interes_final" ).delay( 500 ).fadeIn(1000)        
      $( "#b-complex" ).delay( 600 ).fadeIn(1000)
    })
    $(".btn2-1530").on("click", function(){
      $( "#plantilla" ).fadeOut(500);
      $( "#interes_15-30" ).fadeOut(500);
      $( "#interes_final" ).delay( 500 ).fadeIn(1000)        
      $( "#multivitamin" ).delay( 600 ).fadeIn(1000)
    })
    // 30 - 60
    $(".btn1-3060-m").on("click", function(){
      $( "#plantilla" ).fadeOut(500);
      $( "#interes_30-60-m" ).fadeOut(500);
      $( "#interes_final" ).delay( 500 ).fadeIn(1000)
      $( "#forwomen" ).delay( 600 ).fadeIn(1000)
    })
    $(".btn1-3060-h").on("click", function(){
      $( "#plantilla" ).fadeOut(500);
      $( "#interes_30-60-h" ).fadeOut(500);
      $( "#interes_final" ).delay( 500 ).fadeIn(1000)        
      $( "#formen" ).delay( 600 ).fadeIn(1000)
    })
    $(".btn2-3060").on("click", function(){
      $( "#plantilla" ).fadeOut(500);
      $( "#interes_30-60-m" ).fadeOut(500);
      $( "#interes_30-60-h" ).fadeOut(500);
      $( "#interes_final" ).delay( 500 ).fadeIn(1000)        
      $( "#b-complex" ).delay( 600 ).fadeIn(1000)
    })
    // 60 más
    $(".btn1-60").on("click", function(){
      $( "#plantilla" ).fadeOut(500);
      $( "#interes_60" ).fadeOut(500);
      $( "#interes_final" ).delay( 500 ).fadeIn(1000)        
      $( "#forsenior" ).delay( 600 ).fadeIn(1000)
    })
    // volver a empezar
    $(".btn-again").on("click", function(){
      $( "#interes_final" ).fadeOut(500);
      $( "#forwomen" ).fadeOut(500);
      $( "#formen" ).fadeOut(500);
      $( "#forsenior" ).fadeOut(500);
      $( "#multivitamin" ).fadeOut(500);
      $( "#b-complex" ).fadeOut(500);
      $( "#sexo" ).delay( 500 ).fadeIn(1000)
      $( "#plantilla" ).delay( 500 ).fadeIn(1000)        
    })
  });

  