function Leaf() {
  this.x = random(width);
  this.y = random(-500, -10);
  this.speed = random(2, 5);
  this.img = loadImage("/img/1.png");
  this.rotate = random(PI/360);

  this.update = function() {
    // this.y += this.speed;
    // if (this.y > height) {
    //   this.x = random(width);
    //   this.y = random(-200, -10);
    // }

  }

  this.show = function() {
    // image(this.img, this.x, this.y, this.img.width/5, this.img.height/5);
    // translate( width/2, -(height - this.img.height)/2);
    // translate(width/2, height/2);
    translate(800, 100);
    rotate(radians(90));
    image(this.img, 0, 0 );
    // image(this.img, (width - this.img.width)/2, (height - this.img.height)/2 );
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