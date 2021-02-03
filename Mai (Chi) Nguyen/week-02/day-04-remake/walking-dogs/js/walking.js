// # Exercises: Animation
//
// ## The Cat Walk


//DOG 1
  $('#dog1').animate({width: "+=550"}, 6000, function () {
    $( this ).hide();
  });



//DOG 2
// const img2 = document.getElementById('dog2');
// img2.style.left = '-100px';
//
// const delayDog2 = function () {
//   img2.style.visibility = 'visible';
// }
//
// setTimeout(delayDog2, 6500);
//
// const walk2 = function () {
//   const oldLeft = parseInt(img2.style.left);
//   const newLeft = oldLeft + 1;
//   img2.style.left = newLeft + 'px';
//
//   if (newLeft > 1500) {
//     img2.style.left = '-100px';
//   }
// }
//
// const walkDog2 = function () {
//   setInterval(walk2, 4);
// }
//
// setTimeout(walkDog2, 6500);

$('#dog2').delay(4000).show(4000).animate({left: '+=1500'}, 4000).css({'left': '-100px'});
// }).animate({left: '+=10'}, 1000)
// .show().animate({left: '+=10'}, 1000);
// $('#dog2').repeat(1000).each($).animate({left: '+=10'}, 1000).wait(50);


//DOG 3

const img3 = document.getElementById('dog3');
img3.style.left = '-100px';

const delayDog3 = function () {
  img3.style.visibility = 'visible';
}

setTimeout(delayDog3, 6500);

let dir = true;

const walk3 = function () {
  let oldLeft = parseInt(img3.style.left);

  if (oldLeft !== 0) {
    if (oldLeft !== 1200) {
      if (dir === true) {
        let newLeft = oldLeft + 2;
        img3.style.left = newLeft + 'px';
      } else {
        let newLeft = oldLeft - 2;
        img3.style.left = newLeft + 'px';
      }
    } else if (oldLeft === 1200) {
      if (dir === true) {
        img3.style.transform = 'scaleX(-1)';
        dir = false;
      } else {
      let newLeft = oldLeft - 2;
      img3.style.left = newLeft + 'px';
      }
    }
  } else {
    if (dir === false) {
      img3.style.transform = 'scaleX(+1)';
      dir = true;
    } else {
      let newLeft = oldLeft + 2;
      img3.style.left = newLeft + 'px';
    }
  }

}

// let timer1 = setInterval(walk3, 2);
const walkDog3 = function () {
  setInterval(walk3, 2);
}

let timer = setTimeout(walkDog3, 6500);


// DOG 4
//
// const img4 = document.getElementById('dog4');
//
//
// const delayDog4 = function () {
//   img4.style.visibility = 'visible';
// }
//
// setTimeout(delayDog4, 6500);
//
//
//
// const walk4 = function () {
//   let oldLeft = parseInt(img3.style.left);
//
//   if (oldLeft !== 0) {
//     if (oldLeft !== 1200) {
//       if (dir === true) {
//         let newLeft = oldLeft + 2;
//         img4.style.left = newLeft + 'px';
//       } else {
//         let newLeft = oldLeft - 2;
//         img3.style.left = newLeft + 'px';
//       }
//     } else if (oldLeft === 600) {
//       if (dir === true) {
//         img3.style.transform = 'scaleX(-1)';
//         dir = false;
//       } else {
//       let newLeft = oldLeft - 2;
//       img3.style.left = newLeft + 'px';
//       }
//     }
//   } else {
//     if (dir === false) {
//       img3.style.transform = 'scaleX(+1)';
//       dir = true;
//     } else {
//       let newLeft = oldLeft + 2;
//       img3.style.left = newLeft + 'px';
//     }
//   }
// }

// DOG 5

const img5 = document.getElementById('dog5');


const delayDog5 = function () {
  img5.style.visibility = 'visible';
}

setTimeout(delayDog5, 7000);

const disDog5 = function () {
  img5.style.visibility = 'hidden';
}

setTimeout(disDog5, 15000);

// clearTimeout(timer5, 10000);


// let timer1 = setInterval(walk3, 2);
// const walkDog4 = function () {
//   setInterval(walk4, 2);
// }

// let timer4 = setTimeout(walkDog4, 6500);

// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// - Bonus #4: Pretty much go nuts or whatever.
