console.log('color');

class ColorPicker {
  constructor(target, width, height) {
    this.target = target;
    this.width = width;
    this.height = height;
    this.target.width = width;
    this.target.height = height;
    //get context
    this.context = this.target.getContext("2d");
    //circle - needs x and y and width and height
    this.pickerCircle = { x: 10, y: 10, width: 7, height: 7 };

    this.listenForEvents();
  }
//draw function
  draw() {
    this.build();
  }

// build function - gradients

build() {
  let gradient = this.context.createLinearGradient(0, 0, this.width, 0); // takes x position, y position, width, height

    //Adds Color Stops to the Gradient (from 0 to 1)
  gradient.addColorStop(0, "rgb(255, 0, 0)");
  gradient.addColorStop(0.15, "rgb(255, 0, 255)");
  gradient.addColorStop(0.33, "rgb(0, 0, 255)");
  gradient.addColorStop(0.49, "rgb(0, 255, 255)");
  gradient.addColorStop(0.67, "rgb(0, 255, 0)");
  gradient.addColorStop(0.84, "rgb(255, 255, 0)");
  gradient.addColorStop(1, "rgb(255, 0, 0)");
  //Adds color picker colors (red, green, blue, yellow...)
  //Renders the Color Gradient from the 0's position to the full width and height
  this.context.fillStyle = gradient; ///, set it's style to be the color gradient
  this.context.fillRect(0, 0, this.width, this.height); ///< renders it

  //Apply black and white (on the height dimension instead of the width)
  gradient = this.context.createLinearGradient(0, 0, 0, this.height);
  //two colors so 0, 0.5 and 1 needs to be used.
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
  gradient.addColorStop(0.5, "rgba(0, 0, 0, 0)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
  //set style and render it.
  this.context.fillStyle = gradient;
  this.context.fillRect(0, 0, this.width, this.height);

  //circle selector
  this.context.beginPath();
  this.context.arc(this.pickerCircle.x, this.pickerCircle.y, this.pickerCircle.width, 0, Math.PI * 2); // mathematics of a circle
  this.context.strokeStyle = "black";
  this.context.stroke();
  this.context.closePath();

  }

  //listen for mouse events
  listenForEvents() {
    let isMouseDown = false;
    const onMouseDown = (e) => {
      let currentX = e.clientX - this.target.offsetLeft;
      let currentY = e.clientY - this.target.offsetTop;
      if (currentY > this.pickerCircle.y && currentY < this.pickerCircle.y + this.pickerCircle.width && currentX > this.pickerCircle.x && currentX < this.pickerCircle.x + this.pickerCircle.width) {
        isMouseDown = true;
      } else {
        this.pickerCircle.x = currentX;
        this.pickerCircle.y = currentY;
      }
    }

    const onMouseMove = (e) => {
      if(isMouseDown) {
        let currentX = e.clientX - this.target.offsetLeft;
        let currentY = e.clientY - this.target.offsetTop;
          this.pickerCircle.x = currentX;
          this.pickerCircle.y = currentY;
      }
    }

    const onMouseUp = () => {
      isMouseDown = false;
    }
    //register the event
    this.target.addEventListener("mousedown", onMouseDown);
    this.target.addEventListener("mousemove", onMouseMove);
    this.target.addEventListener("mousemove", () =>
      this.onChangeCallback(this.getPickedColor()));

    document.addEventListener("mouseup", onMouseUp);
  }


  getPickedColor() {
    let imageData = this.context.getImageData(this.pickerCircle.x, this.pickerCircle.y, 1, 1); // holds an array
    return { r: imageData.data[0], g: imageData.data[1], b:imageData.data[2] };
  }

  onChange(callback) {
    this.onChangeCallback = callback;
  }
}


let picker = new ColorPicker(document.getElementById("color-picker"),
400, 370);

//draw
setInterval(() => picker.draw(), 1);

picker.onChange((color) => {
  let selected = document.getElementsByClassName("selected")[0];
  selected.style.backgroundColor = `rgb(${ color.r }, ${ color.g }, ${ color.b })`
  document.getElementById('rgb').innerHTML = `rgb(${ color.r }, ${ color.g }, ${ color.b })`;
});
