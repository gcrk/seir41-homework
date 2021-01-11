const img = document.querySelector ("img");

img.style.left = "0px";

const catWalk1 = function () {
  let oldLeft = parseInt(img.style.left);
  let newLeft = oldLeft + 10;
  img.style.left = newLeft + "px";

  if (img.style.left >= "955px") {
    img.style.left = "0px";
  }
}


const catWalk2 = function () {
  let oldLeft = parseInt(img.style.left);
  let newLeft = oldLeft + 10;
  img.style.left = newLeft + "px";

  if (img.style.left >= "960px") {
    img.style.transform = "scaleX(-1)";
    let newLeft = oldLeft - 10;
    img.style.left = newLeft + "px";
  }
}

const walkTimer = setInterval (catWalk2, 50)
