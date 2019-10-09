import utilities from '../../helpers/utilities';
import './pet.scss';

const petSprite = () => {
  const petImg = '<img src="src/images/sprites/dragon-anim.gif"></>';
  utilities.printToDom(petImg, 'pet');
};

export default { petSprite };
