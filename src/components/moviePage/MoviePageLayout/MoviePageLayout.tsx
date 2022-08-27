import { FC } from "react"
import { InterestingFacts } from "../InterestingFacts/InterestingFacts"
import { MovieDescription } from "../MovieDescription/MovieDescription"
import { MovieInfo } from "../MovieInfo/MovieInfo"
import { MovieRating } from '../MovieRating/MovieRating'
import { UsersReviews } from "../UsersReviews/UsersReviews"
import "./MoviePageLayout.scss"

export type MovieIdProps = {
	movieId: number;
}

export const MoviePageLayout : FC<MovieIdProps> = ({ movieId }) => {
	return(
		<main className="movie-page">
			<MovieInfo movieId={ movieId }></MovieInfo>
			<div className="movie-page__content">
				<div className="movie-page__column-1">
					<MovieDescription></MovieDescription>
					<MovieRating />
					<InterestingFacts movieId={ movieId }></InterestingFacts>
					<UsersReviews movieId={ movieId }></UsersReviews>
				</div>
				<div className="movie-page__column-2">
					Этот блок под вопросом пусть пока будет тут
				</div>
			</div>
		</main>
	)
}