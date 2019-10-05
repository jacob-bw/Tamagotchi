import utilities from '../helpers/utilities';

const fightQuadrant = () => {
  let domString = '';
  let strength = 100;
  domString = `
    <p><progress value="${strength}" max="100" id="fightTotal"{strength</progress></p>
    <p><button class='primary' id='run'>Run</button> <button class ='primary' id='fight-btn'>Fight</button></p>
  `;

  utilities.printToDom(domString, 'fight');

  const fightBtn = document.getElementById('fight-btn');
  const runBtn = document.getElementById('run');

  fightBtn.addEventListener('click', () => {
    if (strength >= 0) {
      strength -= 10;
      document.getElementById('fightTotal').value = strength;
      console.log(strength);
    }
  });

  runBtn.addEventListener('click', () => {
    if (strength <= 100) {
      strength += 1;
      document.getElementById('fightTotal').value = strength;
      console.log(strength);
    }
  });
};

export default { fightQuadrant };
