import { FC } from 'react';
import Card from './Card';
import { CharacterType } from '../App';

type PropsType = {
  title: string,
  desc: string,
  content: CharacterType[],
  maxContent?: number,
}

const Board: FC<PropsType> = ({ title, desc, content, maxContent }) => {

  return (
    <div style={{ border: '1px solid black', borderRadius: '3px', padding: '10px' }}>
      <h1>{title}</h1>
      <p style={{ fontSize: '20px', borderBottom: '1px solid black' }}>{desc}</p>
      {!!maxContent && <div style={{ textAlign: 'center', marginBottom: '10px' }}><button>prev</button>{'  '}<button>next</button></div>}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
        {content.map(el => <Card key={el.id} name={el.name} image={el.image} />)}
      </div>
    </div>
  );
}

export default Board;