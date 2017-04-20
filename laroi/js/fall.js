function Leaf() {
  this.x = random(-width, width);
  this.y = random(-500, -10);
  this.speed = random(2, 5);
  this.img = loadImage("/img/1.png");

  this.update = function() {
    this.x += this.speed;
    this.y += this.speed;
    if (this.y > height && this.x > width) {
      this.x = random(-width, width);
      this.y = random(-200, -10);
    }
  }

  this.show = function() {
    image(this.img, this.x, this.y, this.img.width/5, this.img.height/5);
  }
}


// function Rain() {
//   this.x = random(width);
//   this.y = random(-500, -10);
//   this.speed = random(3, 10);

//   this.fall = function() {
//     this.y += this.speed;
//     if ( this.y > height ) {
//       this.y = random(-200, -10);
//     }
//   }

//   this.show = function() {
//     fill(this.hue, this.hue, this.hue);
//     rect(this.x, this.y, 30, 10);
//   }

// }