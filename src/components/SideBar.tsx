import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Button } from './Button';
import '../styles/sidebar.scss';

export function SideBar() {
  // Complete aqui

  interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }
  interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }

  const [selectedGenreId, setSelectedGenreId] = useState(1)

  const [genres, setGenres] = useState<GenreResponseProps[]>([])

  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps)

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data)
    })
  }, [])

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenre}`).then(response => {
      setSelectedGenre(response.data)
    })
  }, [setSelectedGenreId])

  function handleClickButton(id: number) {
    setSelectedGenreId(id)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className='sidebar'>
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre =>
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          )}
        </div>
      </nav>
    </div>
  )
}