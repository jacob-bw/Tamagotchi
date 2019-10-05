import '../styles/main.scss';

import eat from './components/eat';
import play from './components/play';
import sleep from './components/sleep';

const init = () => {
  eat.eatQuadrant();
  play.playQuadrant();
  sleep.sleepQuadrant();
};

init();
