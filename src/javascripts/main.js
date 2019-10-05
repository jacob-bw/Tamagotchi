import '../styles/main.scss';

import eat from './components/eat';
import play from './components/play';

const init = () => {
  eat.eatQuadrant();
  play.playQuadrant();
};

init();
