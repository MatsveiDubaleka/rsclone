import { MainPageMenu } from "../MainPageMenu/MainPageMenu"
import MovieCard from "../MovieCard/MovieCard"
import MovieCardsList from "../MovieCardsList/MovieCardsList"
import { YouInterestedList } from "../YouInterestedList/YouInterestedList"
import "./MainPageLayout.scss"

export const MainPageLayout = () => {
	return(
		<main className="main-page">
			<MainPageMenu></MainPageMenu>
			<div className="main-page__content">
				<MovieCardsList title="Рекомендации"></MovieCardsList>
				<MovieCardsList title="Новинки"></MovieCardsList>
				<YouInterestedList></YouInterestedList>
			</div>
		</main>
	)
}