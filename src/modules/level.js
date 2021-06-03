import Coin from './coin.js';
import Lava from './lava.js';
import Player from './players.js';
import Vec from './vector.js';

const levelChars = {
  '.': 'empty',
  '#': 'wall',
  '+': 'lava',
  '@': Player,
  o: Coin,
  '=': Lava,
  '|': Lava,
  v: Lava,
};

class Level {
  constructor(plan) {
    const rows = plan.trim().split('\n').map((l) => [...l]);
    this.height = rows.length;
    this.width = rows[0].length;
    this.startActors = [];
    this.rows = rows.map((row, y) => row.map((ch, x) => {
      const type = levelChars[ch];
      if (typeof type === 'string') return type;
      this.startActors.push(
        type.create(new Vec(x, y), ch),
      );
      return 'empty';
    }));
  }
}

Level.prototype.touches = function gridChecker(position, size, type) {
  const xStart = Math.floor(position.x);
  const xEnd = Math.ceil(position.x + size.x);
  const yStart = Math.floor(position.y);
  const yEnd = Math.ceil(position.y + size.y);

  for (let y = yStart; y < yEnd; y += 1) {
    for (let x = xStart; x < xEnd; x += 1) {
      const isOutside = x < 0 || x >= this.width || y < 0 || y >= this.height;
      const here = isOutside ? 'wall' : this.rows[y][x];
      if (here === type) return true;
    }
  }

  return false;
};

export default Level;