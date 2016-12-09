$(document).on('ready',function(){
// VARIABLES
// ===========================================
var color = 'white';
var colors = 'red green white yellow blue'
// FUNCTIONS
// ========================================
  $('.box').on('mousedown',function(){
    $('.box').on('mouseenter', function(){
      $(this).addClass(color);
    }),$('.box').on('mouseup',function(){
      $('.box').off('mouseenter');
    })

  })



  $('.box').on('dblclick', function(){
    $(this).removeClass('white');
  })
  $('#reset').on('click',function(){
    $('.box').removeClass('white')
  })

  // COLOR PALLETTE
  // ===================================
  $('#red').on('click',function(){
    color = 'red'
  })
  $('#blue').on('click',function(){
    color = 'blue'
  })
  $('#green').on('click',function(){
    color = 'green'
  })
  $('#yellow').on('click',function(){
    color = 'yellow'
  })
  $('#white').on('click',function(){
    color = 'white'
  })
  // ==========================================

// REMOVE AND ADD CLASS COLOR/ RESET
// =========================================
  $('.box').on('click',function(){
    $(this).addClass(color);
  })
  $('.box').on('dblclick',function(){
    $(this).removeClass(color);
  })
  $('#reset').on('click',function(){
    $('.box').removeClass(colors)
  })





})
