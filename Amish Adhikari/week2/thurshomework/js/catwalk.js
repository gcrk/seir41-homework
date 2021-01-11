


    $(document).ready(function() {

     function goLeft() {

      $('#cat').css('transform', 'scaleX(-1)');
      $('#cat').animate({'left':0}, 5000, goRight);
    }

    function goRight() {
      $('#cat').css('transform', 'scaleX(1)');
      $('#cat').animate({'left': $(document).width()-($('#cat').width())}, 5000, goLeft);
    }
      goRight();

    });
    
