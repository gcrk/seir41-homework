const image = document.getElementsByTagName('img')[0];

image.style.left = '0px';


const catWalk = function () {
  const position = parseInt(image.style.left);
  const movingForward = position + 1;
  image.style.left = movingForward + 'px';
    if (image.style.left === '1440px') {
      clearInterval(walkTimer);
      image.style.transform = 'rotateY(3.142rad)';
    };
};

const walkTimer = setInterval(catWalk, 1);
