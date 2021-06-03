import State from './state.js';
import Vec from './vector.js';

class Coin {
  constructor(pos, basePos, wobble) {
    this.pos = pos;
    this.basePos = basePos;
    this.wobble = wobble;
    this.value = 'coin';
  }

  get type() {
    return this.value;
  }

  static create(pos) {
    const basePos = pos.plus(new Vec(0.2, 0.1));
    return new Coin(basePos, basePos, Math.random() * Math.PI * 2);
  }
}

Coin.prototype.size = new Vec(0.6, 0.6);

Coin.prototype.collide = function vanish(state) {
  const filtered = state.actors.filter((a) => a !== this);
  let { status } = state;

  if (!filtered.some((a) => a.type === 'coin')) status = 'won';

  return new State(state.level, filtered, status);
};

const wobbleSpeed = 8;
const wobbleDist = 0.07;

Coin.prototype.update = function update(time) {
  const wobble = this.wobble + time * wobbleSpeed;
  const wobblePos = Math.sin(wobble) * wobbleDist;
  return new Coin(this.basePos.plus(new Vec(0, wobblePos)), this.basePos, wobble);
};

export default Coin;