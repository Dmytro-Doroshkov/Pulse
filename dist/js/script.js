$(document).ready(function() {




// //////////////////////slick slider with jquery

// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
//         responsive: [
//             {
//               breakpoint: 992,
//               settings: {
//                 dots: true,
//                 arrows: false
//               }
//             }
//         ]
//       });
//   });


// $(document).ready(function() {
//     $(function() {
      
//         $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
//           $(this)
//             .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
//             .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
//         });
//     });

//     function toggleCatalogItem(item) {
//         $(item).each(function(i){
//             $(this).on('click', function(e){
//                 e.preventDefault();
//                 $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//                 $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//             })
//         })
//     }

//     toggleCatalogItem('.catalog-item__link');
//     toggleCatalogItem('.catalog-item__back');
// });



////////////////////////tiny slider


const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: false
  });

document.querySelector('.prev').addEventListener('click', () => {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', () => {
    slider.goTo('next');
});

const content = document.querySelectorAll('.catalog-item__content');
const list = document.querySelectorAll('.catalog-item__list');
const link = document.querySelectorAll('.catalog-item__link');
const back = document.querySelectorAll('.catalog-item__back');


link.forEach((item, i) => {
    item.addEventListener('click', (e) => {
    e.preventDefault();
    content[i].classList.remove('catalog-item__content_active');
    list[i].classList.add('catalog-item__list_active');
    })
});

back.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        list[i].classList.remove('catalog-item__list_active');
        content[i].classList.add('catalog-item__content_active');
    });
});




function tabs (tabSelector, contentSelector, tabActiveClass, contentActiveClass) {
    const tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);


    function hideTabContent () {
        tab.forEach(item => {
            item.classList.remove(tabActiveClass);
        });
        content.forEach(item => {
            item.classList.remove(contentActiveClass)
        })
    };

    function showTabContent (i = 0) {
        tab[i].classList.add(tabActiveClass);
        content[i].classList.add(contentActiveClass);
    }
    hideTabContent();
    showTabContent();

    tab.forEach((item, i) => {
        item.addEventListener('click' , () => {
            hideTabContent();
            showTabContent(i);
        });
    });
};

tabs('.catalog__tab', '.catalog__content', 'catalog__tab_active', 'catalog__content_active');

// modal


// jquery


// modal

$('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow')
});

$('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order').fadeOut('slow');
})

$(window).on('click', function (e) {
    if (e.target.classList.contains('overlay')) {
        $('.overlay, #consultation, #order').fadeOut('slow');
    }
});

$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtittle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    });
})

// validation

function validateForms(form) {
    $(form).validate({
        rules: {
            name: 'required',
            phone: 'required',
            email: {
                required: true,
                email: true
            }
    
        }
    });
}

validateForms('#consultation form');
validateForms('#consultation-form');
validateForms('#order form');

$('input[name=phone]').mask('(099) 999-99-99');

// $('form').submit(function(e) {
//     e.preventDefault();
//     // if (!$(this).valid()) {
//     //     return;
//     // }
//     $.ajax({
//         type: 'POST',
//         url: 'mailer/smart.php',
//         data: $(this).serialize()
//     }).done(function() {
//         $(this).find('input').val('');
//         $('#consultation, #order').fadeOut('slow');
//         $('.overlay, #thanks').fadeIn('slow');
//         $('form').trigger('reset');
//     });
//     return false;
// });

$('form').submit(function(e) {
    e.preventDefault();

    //     if (!$(this).valid()) {
    //     return;
    // }
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});


// const modalBtn = document.querySelectorAll('[data-modal=consultation]');
// const overlay = document.querySelector('.overlay');
// const modalId = document.getElementById('consultation');
// const closeBtn = document.querySelectorAll('.modal__close');

// function hideModal () {
//     overlay.style.display = 'none';
//     modalId.style.display = 'none';
// }

// function showmodal () {
//     overlay.style.display = 'block';
//     modalId.style.display = 'block';
// }

// modalBtn.forEach(item => {
//     item.addEventListener('click', () => {
//         showmodal();
//     })
// });

// overlay.addEventListener('click', (e) => {
//     if (e.target.classList.contains('overlay')) {
//         hideModal();
//     }
// });

// closeBtn.forEach(item => {
//     item.addEventListener('click', () => {
//         hideModal();
//     });
// });

// smooth scroll and pageup

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn('slow');
    } else {
        $('.pageup').fadeOut('slow');
    }
});


new WOW().init();



});