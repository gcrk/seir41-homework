console.log('hi')


const img = document.getElementsByTagName('img')[0];

img.style.left = '0px';




const makeCatWalk = function (){



  img.style.position = 'absolute';

const oldLeft = parseInt(img.style.left);


  if (parseInt(img.style.left)<=1800){
  const newLeft = oldLeft + 10;
  img.width = img.width + 2;
  img.style.left = newLeft + 'px';
} else if (parseInt(img.style.left)>1800) {

  img.style.left = '0px';
}


};

setInterval(makeCatWalk, 50);



// const img = document.getElementsByTagName('img')[0];
// img.style.position = 'absolute';
// img.style.top = '0px';
// const watchBillFall = function() {
//   const oldTop = parseInt(img.style.top);
//   const newTop = oldTop + 1;
//   img.style.top = newTop + 'px';
// };
//
// setInterval(watchBillFall, 25);
