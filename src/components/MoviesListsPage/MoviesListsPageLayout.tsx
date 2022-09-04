
import { FC } from "react";
import { useLocation } from "react-router";
import { MainPageMenu } from "../mainPage/MainPageMenu/MainPageMenu"
import { MoviesList } from "./MoviesList";
import './MoviesListsPageLayout.scss';

export const MoviesListsPageLayout: FC<any> = () => {

  const location = useLocation().pathname;

  return (
    <main className="movies-list-page">
      <MainPageMenu />
      <div className="movies-list-page__content">
        {
          location === '/recommend' ? 
          <>
            <h2 className="movies-list-page__title">Рекомендации</h2>
            <MoviesList url={"v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"} listType="recommend"></MoviesList>
          </>
          :
          <>
            <h2 className="movies-list-page__title">Новинки</h2>
            <MoviesList url={"v2.2/films/premieres?year=2022&month=AUGUST"} listType="new"></MoviesList>
          </>
        }
      </div>
    </main>
  )
}
