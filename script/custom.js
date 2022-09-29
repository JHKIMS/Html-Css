$('p').css({'display':'none'});

$('.show-btn').click(function(){
    $('p').css({'display':'block'});
});
$('.hide-btn').click(function(){
    $('p').css({'display':'none'});
});

// 구분선

$('.btn-box').mouseenter(function(){
    $('#box1').show()
})

$('.btn-box').mouseleave(function(){
    $('#box1').hide()
})

// 구분선2
// slideDown(), slideUp(), slideToggle()
// fadeIn(), fadeOut(), fadeToggle()
// ()안에는 지속시간을 넣는다. or 'slow' , 'fast'로도 가능
$('.show-container').click(function(){
    $('.container div').slideDown()
})
$('.hide-container').click(function(){
    $('.container div').fadeOut()
})
$('.toggle-container').click(function(){
    $('.container div').slideToggle()
    // toggle은 hide,show 두개 다 가지고 있다.
})


// 구분선3

$('.add-btn').click(function(){
    $('.container div').addClass('active')
})

$('.remove-btn').click(function(){
    $('.container div').removeClass('active')
})

$('.toggle-btn').click(function(){
    $('.container div').toggleClass('active')
})