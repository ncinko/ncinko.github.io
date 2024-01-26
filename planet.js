// Adopted From:
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/EpgB3cNhKPM

var slider = document.getElementById("myRange");


class Planet {
  constructor(x, y, vx, vy, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  attract(planet) {
    let force = p5.Vector.sub(this.pos, planet.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let G = 0.5;
    let strength = (G * (this.mass * planet.mass)) / distanceSq;
    force.setMag(strength);
    planet.applyForce(force);
  }

  update() {
    this.vel.add(this.acc.copy().mult(0.1*slider.value));
    this.pos.add(this.vel.copy().mult(0.1*slider.value));
    this.acc.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
