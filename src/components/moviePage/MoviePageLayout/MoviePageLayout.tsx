import { InterestingFacts } from "../InterestingFacts/InterestingFacts"
import { MovieDescription } from "../MovieDescription/MovieDescription"
import { MovieInfo } from "../MovieInfo/MovieInfo"
import { UsersReviews } from "../UsersReviews/UsersReviews"
import "./MoviePageLayout.scss"




export const MoviePageLayout = () => {
	return(
		<main className="movie-page">
			<MovieInfo></MovieInfo>
			<div className="movie-page__content">
				<div className="movie-page__column-1">
					<MovieDescription></MovieDescription>
					<InterestingFacts></InterestingFacts>
					<UsersReviews movieId={333}></UsersReviews>
				</div>
				<div className="movie-page__column-2">
					Этот блок под вопросом пусть пока будет тут
				</div>
			</div>
		</main>
	)
}