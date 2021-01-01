const img1 = document.querySelector("img");
const img2 = img1.cloneNode(true);

img2.style.left = "-1440px";

document.body.appendChild(img2);

img1.style.left = "0px";

const catWalk = function () {
  img1.style.left = `${parseInt(img1.style.left) + 8}px`;
  img2.style.left = `${parseInt(img2.style.left) + 8}px`;
  if (parseInt(img1.style.left) >= window.innerWidth) {
    img1.style.left = `${-parseInt(window.innerWidth)}px`;
  } else if (parseInt(img2.style.left) >= window.innerWidth) {
    img2.style.left = `${-parseInt(window.innerWidth)}px`;
  }
}

setInterval(catWalk, 50);

// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// - Bonus #4: Pretty much go nuts or whatever.
