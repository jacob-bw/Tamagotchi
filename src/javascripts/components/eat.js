import utilities from '../helpers/utilities';

const eatQuadrant = () => {
  let domString = '';
  let full = 100;
  domString = `
    <p><progress value="${full}" max="100" id="eatTotal">Full</progress></p>
    <p><button class='primary' id='healthy'>Granola</button> <button class ='primary' id='junk'>Cheetos</button></p>
  `;
  utilities.printToDom(domString, 'eat');
  const healthyBtn = document.getElementById('healthy');
  const junkBtn = document.getElementById('junk');

  healthyBtn.addEventListener('click', () => {
    if (full < 100) {
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
