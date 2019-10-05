import utilities from '../../helpers/utilities';
import './sleep.scss';

const sleepQuadrant = () => {
  let domString = '';
  let energy = 100;
  domString = `
    <p><progress value="${energy}" max="100" id="sleepTotal"{energy</progress></p>
    <p><button class='primary' id='deep-sleep'>Deep Sleep</button> <button class ='primary' id='short-nap'>Short Nap</button></p>
  `;
  utilities.printToDom(domString, 'sleep');
  const deepSleepBtn = document.getElementById('deep-sleep');
  const shortNapBtn = document.getElementById('short-nap');

  deepSleepBtn.addEventListener('click', () => {
    if (energy + 60 < 100) {
      energy += 60;
      document.getElementById('sleepTotal').value = energy;
    }
  });
  shortNapBtn.addEventListener('click', () => {
    if (energy + 50 < 100) {
      energy += 50;
      document.getElementById('sleepTotal').value = energy;
    }
  });
};

export default { sleepQuadrant };
