import Vec from './vector.js';

class Player {
  constructor(position, speed) {
    this.pos = position;
    this.speed = speed;
    this.value = 'player';
  }

  get type() {
    return this.value;
  }

  static create(position) {
    return new Player(position.plus(new Vec(0, -0.5)), new Vec(0, 0));
  }
}

Player.prototype.size = new Vec(0.8, 1.5);

export default Player;