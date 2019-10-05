import utilities from '../helpers/utilities';

const eatHealthy = () => {
  let domString = '';
  let full = 100;
  domString = `
    <p><progress value="${full}" max="100" id="eatTotal">Full</progress></p>
    <p><button class='success' id='healthy'>Healthy</button></p>
  `;
  utilities.printToDom(domString, 'eat');
  const healthyBtn = document.getElementById('healthy');

  healthyBtn.addEventListener('click', () => {
    if (full + 10 <= 110) {
      full += 10;
      document.getElementById('eatTotal').value = full;
    }
  });
};

export default { eatHealthy };
