import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './YouInterestedList.scss';

type LocalStorageMovie = {
  kinopoiskId: number;
  posterUrlPreview: string;
};

type LocalStorageList = LocalStorageMovie[];

export const YouInterestedList = () => {
  const [list, setList] = useState<LocalStorageList>([]);

  useEffect(() => {
    const result = localStorage.getItem('visitedMovies');
    let parsedList: LocalStorageList;
    if (result) {
      parsedList = JSON.parse(result);
      setList(parsedList);
    }
  }, []);

  return (
    <>
      {list.length ? (
        <>
          <div className='you-interested-list'>
            <h2 className='you-interested-list__title'>Вы интересовались</h2>
            <div className='you-interested-list__movies'>
              {list
                ?.reverse()
                .slice(0, 7)
                .map((item: LocalStorageMovie, index: number) => {
                  return (
                    <NavLink
                      to={`/movie/${item.kinopoiskId}`}
                      key={`link-${index}`}
                    >
                      <div
                        id={`${item.kinopoiskId}`}
                        key={`movie-${index}`}
                        className='you-interested-list__movie'
                        style={{
                          backgroundImage: `url(${item.posterUrlPreview})`,
                        }}
                      ></div>
                    </NavLink>
                  );
                })}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
