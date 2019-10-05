import utilities from '../../helpers/utilities';
import './eat.scss';

const eatQuadrant = () => {
  let domString = '';
  let full = 100;
  domString = `
    <div class="eat-buttons">
      <p><progress value="${full}" max="100" id="eatTotal">Full</progress></p>
      <p><button class='primary' id='healthy'>Granola</button> <button class ='primary' id='junk'>Cheetos</button></p>
    </div>
      `;
  utilities.printToDom(domString, 'eat');
  const healthyBtn = document.getElementById('healthy');
  const junkBtn = document.getElementById('junk');

  healthyBtn.addEventListener('click', () => {
    if (full + 10 < 100) {
      full += 10;
      document.getElementById('eatTotal').value = full;
    }
  });
  junkBtn.addEventListener('click', () => {
    if (full - 3 >= 0) {
      full -= 3;
      document.getElementById('eatTotal').value = full;
    }
  });
};

export default { eatQuadrant };
