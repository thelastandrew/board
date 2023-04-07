import { FC, useState } from 'react';
import Card from './Card';
import { CharacterType } from '../App';
import s from './board.module.css';

type PropsType = {
  title: string,
  desc: string,
  content: CharacterType[],
  maxContent?: number,
}

const Board: FC<PropsType> = ({ title, desc, content, maxContent }) => {
  const [page, setPage] = useState<number>(1);
  let cards: CharacterType[] = [...content];
  let totalPages = 1;

  const setCards = (page: number) => {
    if (maxContent) {
      const startPos = (page - 1) * maxContent;
      const endPos = startPos + maxContent;

      cards = content.slice(startPos, endPos);
    }
  }

  if (maxContent) {
    totalPages = Math.ceil(content.length / maxContent);
    setCards(page);
  }

  const handlePrev = () => {
    setPage(prev => prev -= 1)
  }

  const handleNext = () => {
    setPage(prev => prev += 1)
  }

  return (
    <div className={s.board}>
      <h1>{title}</h1>
      <p className={s.desc}>{desc}</p>
      {!!maxContent &&
        <div className={s.btn}>
          <button onClick={handlePrev} disabled={page === 1}>prev</button>
          {` ${page} `}
          <button onClick={handleNext} disabled={page === totalPages}>next</button>
        </div>
      }
      <div className={s.content}>
        {cards.map(el => <Card key={el.id} name={el.name} image={el.image} />)}
      </div>
    </div>
  );
}

export default Board;