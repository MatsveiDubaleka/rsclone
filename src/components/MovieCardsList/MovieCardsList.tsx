import "./MovieCardsList.scss";

const MovieCardsList = ({title, array} : any) => {
	return (
		<div className="movie-cards-list">
			<h2 className="movie-cards-list__title">Рекомендации</h2>
			<div className="movie-cards-list__movies">
				{/* сюда передавать компонент MovieCard из другой ветки  */}
			</div>
		</div>
	)
}

export default MovieCardsList;