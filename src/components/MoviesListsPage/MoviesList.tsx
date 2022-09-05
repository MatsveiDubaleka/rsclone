import axios from "axios";
import { FC, useEffect, useState } from "react"
import { token } from "../../utils/token";
import MovieCardFlatList from "../searchPage/MovieCardFlat/MovieCardFlat"

export const MoviesList: FC<any> = ({url, listType}) => {

  const propType = listType === "new" ? 'items' : 'films';

  const [movies, setMovies] = useState <any>();

  useEffect(()=> {
    axios.get(`https://kinopoiskapiunofficial.tech/api/${url}`, {
      headers: {
        'X-API-KEY': token
      }
    }).then(({ data }) => setMovies(data[propType]));

  }, [setMovies]);

  return (
    <main className="movies-list">
      {movies && 
      <MovieCardFlatList movies={movies}></MovieCardFlatList>
      }
    </main>
  )
}
