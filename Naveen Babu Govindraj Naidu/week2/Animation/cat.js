console.log("hello");

const img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
// function catWalk() {
//   img.style.left = (parseInt(img.style.left) + 10) + 'px';
// }


function catWalk() {
  const currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + 10) + 'px';
  if (currentLeft > (innerWidth-img.width)) {
    img.style.left = '0px';
  }
}
setInterval(catWalk, 50);
