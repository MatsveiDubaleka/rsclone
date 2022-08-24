import { MainPageMenu } from "../MainPageMenu/MainPageMenu"
import MovieCardsList from "../MovieCardsList/MovieCardsList"
import MovieVideo from '../MovieVideo/MovieVideo'
import { YouInterestedList } from "../YouInterestedList/YouInterestedList"
import "./MainPageLayout.scss"

export const MainPageLayout = () => {
	return(
		<main className="main-page">
			<MainPageMenu></MainPageMenu>
			<div className="main-page__content">
				<MovieVideo />
				<MovieCardsList title="Рекомендации"></MovieCardsList>
				<MovieCardsList title="Новинки"></MovieCardsList>
				<YouInterestedList></YouInterestedList>
			</div>
		</main>
	)
}