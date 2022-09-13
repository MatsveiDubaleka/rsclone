import { useParams } from "react-router"
import { InterestingFacts } from "../InterestingFacts/InterestingFacts"
import { MovieInfo } from "../MovieInfo/MovieInfo"
import { UsersReviews } from "../UsersReviews/UsersReviews"
import "./MoviePageLayout.scss"

export type MovieIdProps = {
	movieId: number;
}

export const MoviePageLayout = () => {

	const {id} = useParams();

	return(
		<main className="movie-page">
			<MovieInfo movieId={ Number(id) }></MovieInfo>
			<div className="movie-page__content">
				<div className="movie-page__column-1">
					<InterestingFacts movieId={ Number(id) }></InterestingFacts>
					<UsersReviews movieId={ Number(id) }></UsersReviews>
				</div>
			</div>
		</main>
	)
}
