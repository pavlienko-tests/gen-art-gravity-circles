"use strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 9.81;

let Circle = function(circleX, circleY, circleRadius, circleDX, circleDY) {
  this.circleX = circleX;
  this.circleY = circleY;
  this.circleRadius = circleRadius;
  this.circleDX = circleDX;
  this.circleDY = circleDY;

  this.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(this.circleX, this.circleY, this.circleRadius, 0, Math.PI * 2);
  };

  this.update = function() {
    for (let i of circles) {
      let distance = Math.sqrt(
        Math.pow(Math.abs(this.circleX - i.circleX), 2) *
          Math.pow(Math.abs(this.circleY - i.circleY), 2)
      );

      //SIZE CHANGE  NADO DOPELIT!!!!!!

      if (this.circleRadius + i.circleRadius <= distance) {
        if (this.circleRadius > i.circleRadius) {
          this.circleRadius += i.circleRadius / 2;
        } else {
          this.circleRadius = i.circleRadius + this.circleRadius / 2;
        }
      }

      let force =
        gravity *
        ((this.circleRadius * i.circleRadius) / Math.pow(distance, 2));
    }

    this.draw();
  };
};

let circles = [];

for (let i = 0; i < 100; i++) {
  let circleRadius = Math.round(Math.random() * (20 - 5) + 5);
  let circleX = Math.round(
    Math.random() * (canvas.width - 2 * circleRadius) + circleRadius
  );
  let circleY = Math.round(
    Math.random() * (canvas.height - 2 * circleRadius) + circleRadius
  );
  let circleDX = 0;
  let circleDY = 0;
  let circle = new Circle(circleX, circleY, circleRadius, circleDX, circleDY);
  circles.push(circle);
}

console.log(circles);

let animate = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // requestAnimationFrame(animate);
};

animate();
