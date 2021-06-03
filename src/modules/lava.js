/* eslint-disable consistent-return */
import Vec from './vector.js';

class Lava {
  constructor(pos, speed, reset) {
    this.pos = pos;
    this.speed = speed;
    this.reset = reset;
    this.value = 'lava';
  }

  get type() {
    return this.value;
  }

  static create(pos, ch) {
    if (ch === '=') {
      return new Lava(pos, new Vec(2, 0));
    }
    if (ch === '|') {
      return new Lava(pos, new Vec(0, 2));
    }
    if (ch === 'v') {
      return new Lava(pos, new Vec(0, 3), pos);
    }
  }
}

Lava.prototype.size = new Vec(1, 1);

export default Lava;