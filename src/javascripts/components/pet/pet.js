import utilities from '../../helpers/utilities';
import './pet.scss';

const petSprite = () => {
  const petImg = '<img src="https://i.imgur.com/5Q5O9TH.gif"></>';
  utilities.printToDom(petImg, 'pet');
};

export default { petSprite };
