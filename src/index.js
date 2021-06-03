import './style.css';
import Level from './modules/level.js';
import State from './modules/state.js';
import DOMDisplay from './modules/domDisplay.js';
import GAME_LEVELS from './modules/gameLevels.js';

const container = document.querySelector('#container');

const trackKeys = (keys) => {
  const down = Object.create(null);

  const track = (event) => {
    if (keys.includes(event.key)) {
      down[event.key] = event.type === 'keydown';
      event.preventDefault();
    }
  };

  window.addEventListener('keydown', track);
  window.addEventListener('keyup', track);
  return down;
};

const arrowKeys = trackKeys(['ArrowLeft', 'ArrowRight', 'ArrowUp']);

const runAnimation = (frameFunc) => {
  let lastTime = null;

  const frame = (time) => {
    if (lastTime !== null) {
      const timeStep = Math.min(time - lastTime, 100) / 1000;
      if (frameFunc(timeStep) === false) return;
    }
    lastTime = time;
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
};

const runLevel = (level, Display) => {
  const display = new Display(container, level);
  let state = State.start(level);
  let ending = 1;

  return new Promise((resolve) => {
    runAnimation((time) => {
      state = state.update(time, arrowKeys);
      display.syncState(state);

      if (state.status === 'playing') {
        return true;
      } if (ending > 0) {
        ending -= time;
        return true;
      }
      display.clear();
      resolve(state.status);
      return false;
    });
  });
};

const runGame = async (plans, Display) => {
  for (let level = 0; level < plans.length;) {
    // eslint-disable-next-line no-await-in-loop
    const status = await runLevel(new Level(plans[level]), Display);
    if (status === 'won') level += 1;
  }
};

runGame(GAME_LEVELS, DOMDisplay);