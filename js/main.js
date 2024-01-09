var answersActive = 0,
    answersNext = 1,
    answersNextNext = 2;


$('.answers__btn').click(function () {
    answersActive = answersActive+1,
    answersNext = answersNext+1,
    console.log(answersActive)
    answersNextNext = answersNextNext+1;
    $('.test__answers[data-tab="'+ answersNext +'"]').removeClass('non-active')
    $('.test__answers[data-tab="'+ answersNextNext +'"]').addClass('non-active')
    $('.test__answers[data-tab="'+ answersNextNext +'"]').removeClass('dn')
    $('.test__answers[data-tab="'+ 1 +'"] ').addClass('dn')
})
var clicks = 1;
var next = 2
$('.answers__btn').click(function() {
    clicks = clicks + 1;
    next = next + 1;
        contenttab = $('.test__breadcrumb[data-tab="'+ clicks +'"]');
        nexttab = $('.test__breadcrumb[data-tab="'+ next +'"]');
    $('.test__breadcrumb').removeClass('active'); // 1
    $('.test__breadcrumb').removeClass('next'); // 1
    contenttab.addClass('active')
    nexttab.addClass('next')
  });


  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.navigation__dots',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.navigation__btnRight',
      prevEl: '.navigation__btnLeft',
    },
  
  });