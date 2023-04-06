import { FC } from 'react';
import { CharacterType } from '../App';

type PropsType = Pick<CharacterType, 'name' | 'image'>

const Card: FC<PropsType> = ({ name, image }) => {

  const cardStyles = {
    border: '1px solid black',
    borderRadius: '3px',
    padding: '10px'
  }

  return (
    <div style={cardStyles}>
      <p>{name}</p>
      <img src={image} alt='' />
    </div>
  );
}

export default Card;