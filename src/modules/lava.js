/* eslint-disable consistent-return */
import State from './state.js';
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

Lava.prototype.collide = (state) => new State(state.level, state.actors, 'lost');

Lava.prototype.update = function update(time, state) {
  const newPos = this.pos.plus(this.speed.times(time));

  if (!state.level.touches(newPos, this.size, 'wall')) {
    return new Lava(newPos, this.speed, this.reset);
  } if (this.reset) {
    return new Lava(this.reset, this.speed, this.reset);
  }
  return new Lava(this.pos, this.speed.times(-1));
};

export default Lava;