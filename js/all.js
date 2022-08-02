 function start(){
  function menuHandler(){
    $('.mobile_menu ul').stop().slideToggle()
  }
  $('.hamburger').click(menuHandler)
}

start()