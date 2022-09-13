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
				<MovieCardsList title="Рекомендации" url={"v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"} listType="recommend"></MovieCardsList>
				<MovieCardsList title="Новинки" url={"v2.2/films/premieres?year=2022&month=AUGUST"} listType="new"></MovieCardsList>
				<YouInterestedList></YouInterestedList>
			</div>
		</main>
	)
}
