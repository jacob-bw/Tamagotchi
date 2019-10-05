import utilities from '../helpers/utilities';

const playQuadrant = () => {
  let domString = '';
  let fun = 100;
  domString = `
    <p><progress value="${fun}" max="100" id="playTotal"{fun</progress></p>
    <p><button class='primary' id='lots-of-fun'>Dungeons and Dragons</button> <button class ='primary' id='less-fun'>Risk</button></p>
  `;
  utilities.printToDom(domString, 'play');
  const maxFunBtn = document.getElementById('lots-of-fun');
  const lessFunBtn = document.getElementById('less-fun');

  maxFunBtn.addEventListener('click', () => {
    if (fun < 100) {
      fun += 50;
      document.getElementById('playTotal').value = fun;
    }
  });
  lessFunBtn.addEventListener('click', () => {
    if (fun < 100) {
      fun += 2;
      document.getElementById('playTotal').value = fun;
    }
  });
};

export default { playQuadrant };
