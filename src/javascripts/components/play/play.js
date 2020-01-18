import utilities from '../../helpers/utilities';
import './play.scss';

const playQuadrant = () => {
  let domString = '';
  let fun = 100;
  domString = `
  <div class="play-zone">
    <p><progress value="${fun}" max="100" id="playTotal"{fun</progress></p>
    <p><button class='primary' id='lots-of-fun'>Dungeons and Dragons</button> <button class ='primary' id='less-fun'>Risk</button></p>
  </div>
    `;
  utilities.printToDom(domString, 'play');
  const maxFunBtn = document.getElementById('lots-of-fun');
  const lessFunBtn = document.getElementById('less-fun');

  maxFunBtn.addEventListener('click', () => {
    if (fun + 25 < 101) {
      fun += 25;
      document.getElementById('playTotal').value = fun;
    }
  });
  lessFunBtn.addEventListener('click', () => {
    if (fun + 10 < 101) {
      fun -= 10;
      document.getElementById('playTotal').value = fun;
    }
  });
};

export default { playQuadrant };
