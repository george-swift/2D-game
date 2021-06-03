const elt = (name, attrs, ...children) => {
  const dom = document.createElement(name);
  Object.keys(attrs).forEach((attribute) => {
    dom.setAttribute(attribute, attrs[attribute]);
  });

  [...children].forEach((child) => {
    dom.appendChild(child);
  });

  return dom;
};

const scale = 40;

const drawGrid = (level) => elt('table', {
  class: 'background',
  style: `width: ${level.width * scale}px`,
}, ...level.rows.map((row) => elt('tr', { style: `height: ${scale}px` }, ...row.map((type) => elt('td', { class: type })))));

const drawActors = (actors) => elt('div', {}, ...actors.map((actor) => {
  const rect = elt('div', { class: `actor ${actor.type}` });

  rect.style.width = `${actor.size.x * scale}px`;
  rect.style.height = `${actor.size.y * scale}px`;
  rect.style.left = `${actor.pos.x * scale}px`;
  rect.style.top = `${actor.pos.y * scale}px`;

  return rect;
}));

class DOMDisplay {
  constructor(parent, level) {
    this.dom = elt('div', { class: 'game' }, drawGrid(level));
    this.actorLayer = null;
    parent.appendChild(this.dom);
  }

  clear() {
    this.dom.remove();
  }
}

DOMDisplay.prototype.scrollPlayerIntoView = function scroll(state) {
  const width = this.dom.clientWidth;
  const height = this.dom.clientHeight;
  const margin = width / 3;

  const left = this.dom.scrollLeft;
  const top = this.dom.scrollTop;
  const right = left + width;
  const bottom = top + height;

  const { player } = state;
  const center = player.pos.plus(player.size.times(0.5)).times(scale);

  if (center.x < left + margin) {
    this.dom.scrollLeft = center.x - margin;
  } else if (center.x > right - margin) {
    this.dom.scrollLeft = center.x + margin - width;
  }

  if (center.y < top + margin) {
    this.dom.scrollTop = center.y - margin;
  } else if (center.y > bottom - margin) {
    this.dom.scrollTop = center.y + margin - height;
  }
};

DOMDisplay.prototype.syncState = function sync(state) {
  if (this.actorLayer) this.actorLayer.remove();
  this.actorLayer = drawActors(state.actors);
  this.dom.appendChild(this.actorLayer);
  this.dom.className = `game ${state.status}`;
  this.scrollPlayerIntoView(state);
};

export default DOMDisplay;