import "./MovieCardFlat.scss"

export const MovieCardFlat = () => {
	return(
		<div className="movie-card-flat">
			<p className='movie-card-flat__number'>1</p>
			<div className="movie-card-flat__poster">
				<div className="movie-card-flat__poster-image">
					<div className="movie-card-flat__poster-rating">7.7</div>
				</div>
			</div>
			<div className='movie-card-flat__info'>
				<h3 className='movie-card-flat__title-ru'>Зеленая миля</h3>
				<div className='movie-card-flat__info-main'>
					<p className='movie-card-flat__title-en'>The Green Mile,</p>
					<p className='movie-card-flat__year'>1999,</p>
					<p className='movie-card-flat__duration'><span>189</span>мин</p>
				</div>
				<div className='movie-card-flat__info-sub'>
					<p className='movie-card-flat__country'>США,</p>
					<p className='movie-card-flat__genre'>драма,</p>
					<p className='movie-card-flat__director'>Режиссёр: <span>Фрэнк Дарбонт</span></p>
				</div>
				<p className='movie-card-flat__cast'>В ролях: <span>Том Хэнкс, Дэвид Морс</span></p>
			</div>
			<p className='movie-card-flat__rating-imdb rating_good'>9.2</p>
			<div className='movie-card-flat__buttons'>
				<button className='movie-card-flat__to-watch-btn'><span className='flag'></span>Буду смотреть</button>
				<button className='movie-card-flat__to-rate-btn'></button>
			</div>

		</div>
	)
}