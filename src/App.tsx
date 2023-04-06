import { useState, useEffect } from 'react';
import Board from './components/Board';

type DataType = {
  id: number,
  name: string,
  url: string,
  created: string,
  status: 'Dead' | 'Alive' | 'unknown',
  species: string,
  type: string,
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown',
  origin: { name: string, url: string },
  location: { name: string, url: string },
  image: string,
  episode: string[],
}

type JSONResponseType = {
  info: {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null,
  },
  results: DataType[],
}

export type CharacterType = Pick<DataType, 'id' | 'name' | 'image'>;

const App = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);

  useEffect(() => {
    const geCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
      const data: JSONResponseType = await response.json();
      const pre: CharacterType[] = [];
      data.results.map(ch => {
        pre.push({ id: ch.id, name: ch.name, image: ch.image })
      })
      setCharacters(pre)
    };
    geCharacters();
  }, []);

  return (
    <>
      <h1>Rick and Morty</h1>
      <Board
        title='Characters'
        desc='This board shows 20 random characters of the R&M show'
        content={characters}
        maxContent={5}
      />
    </>
  );
}

export default App;