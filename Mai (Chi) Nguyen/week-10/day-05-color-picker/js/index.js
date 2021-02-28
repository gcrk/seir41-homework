$(document).ready(() => {

  const $page = $('<div class="color">').css({height: '100vh'});
  $page.appendTo('body');


  $(window).on('mousemove', (e) => {
    console.log(e);
    const {pageX:x, pageY:y} = e;
    // console.log(x, y);
    console.log(255/x*100, 255/y*100);
    $page.css({backgroundColor: `rgba(${255/x*100}%, ${255*2/(x+y)*100}%, ${255/y*100}%, 100)`})
  })

})
