"use strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 10 * 100;

let Circle = function(
  circleX,
  circleY,
  circleRadius,
  circleDistance,
  circleForce
) {
  this.circleX = circleX;
  this.circleY = circleY;
  this.circleRadius = circleRadius;
  this.circleDistance = circleDistance;
  this.circleForce = circleForce;

  this.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(this.circleX, this.circleY, this.circleRadius, 0, Math.PI * 2);
    ctx.fill();
  };

  this.update = function() {
    for (let i of circles) {
      this.circleDistance = Math.sqrt(
        Math.pow(Math.abs(this.circleX - i.circleX), 2) +
          Math.pow(Math.abs(this.circleY - i.circleY), 2)
      );

      this.circleForce =
        gravity *
        ((this.circleRadius * i.circleRadius) / Math.pow(this.circleDistance, 2));
      this.circleForce = this.circleForce.toFixed(3);

        console.log(this.circleForce * Math.cos(this.circleX));
        // let x = (this.circleForce * Math.cos(this.circleX));

      // this.circleX = x;

      //SIZE CHANGE  NADO DOPELIT!!!!!!

      // if (this.circleRadius + i.circleRadius <= distance) {
      //   if (this.circleRadius > i.circleRadius) {
      //     this.circleRadius += i.circleRadius / 2;
      //   } else {
      //     this.circleRadius = i.circleRadius + this.circleRadius / 2;
      //   }
      // }
    }

    this.draw();
  };
};

let count = 0;

let circles = [];

for (let i = 0; i < 2; i++) {
  let circleRadius = Math.round(Math.random() * (20 - 5) + 5);
  let circleX = Math.round(
    Math.random() * (canvas.width - 2 * circleRadius) + circleRadius
  );
  let circleY = Math.round(
    Math.random() * (canvas.height - 2 * circleRadius) + circleRadius
  );
  let circle = new Circle(circleX, circleY, circleRadius);
  circles.push(circle);
}

console.log(circles);

let animate = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i of circles) {
    i.update();
  }
  requestAnimationFrame(animate);
};

animate();
