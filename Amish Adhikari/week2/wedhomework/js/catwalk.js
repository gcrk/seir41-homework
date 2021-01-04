document.body.style.backgroundColor = "#8f1805";

const img = document.getElementsByTagName('img')[0];
  img.style.position = 'absolute';
  img.style.left = '0px';



const victoriasecretcatwalk2020  = function() {

  let i = 0;
  let moveRight = true;
  let limit = window.innerWidth - 296;
  console.log(limit);

  setInterval(function(){
    if(i <= limit && moveRight === true){
      img.style.left = i + 'px';
      i++;

      if(i === limit){
        moveRight = false;
        img.style.transform = "scaleX(-1)";
    }
    }
    else{
      img.style.left = i + 'px';
      i--;

      if(i === 0){
        moveRight = true;
        img.style.transform = "scaleX(1)";
      }
    }
  }, .05);
};

victoriasecretcatwalk2020()
