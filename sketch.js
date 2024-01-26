let planets = [];

function setup() {
  createCanvas(800, 800);

  planets.push(new Planet(0, -200, 3, 0, 50, 50))
  planets.push(new Planet(0.1, 0.0, 0,0.0, 50, 100))
  planets.push(new Planet(0, 200, -3, 0, 50, 200))

  background(0);
}

function draw() {
  background(0, 20);
  translate(width / 2, height / 2);

  for (let planet of planets) {
    for (let other of planets) {
      if (planet !== other) {
        planet.attract(other);
      }
    }
  }
  for (let planet of planets) {
    planet.update();
    planet.show();
    
  }
}


