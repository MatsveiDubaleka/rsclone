import { FC } from "react";
import "./MovieDescription.scss";

type MovieDescriptionProps = {
	description: string | undefined,
}

export const MovieDescription : FC<MovieDescriptionProps> = ({ description }) => {
	return(
		<div className="movie-description">
			<h3 className="movie-description__title">Обзор</h3>
			<p className="movie-description__text">{description}</p>
		</div>
	)
}
