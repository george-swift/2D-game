import './style.css';
import Level from './modules/level.js';
import State from './modules/state.js';
import DOMDisplay from './modules/domDisplay.js';

const simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................
`;

const simpleLevel = new Level(simpleLevelPlan);
const display = new DOMDisplay(document.body, simpleLevel);
display.syncState(State.start(simpleLevel));