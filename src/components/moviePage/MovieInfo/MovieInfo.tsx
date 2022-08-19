import "./MovieInfo.scss";

export const MovieInfo = () => {
	return(
		<div className="movie-info">
			<div className="movie-info__column-1">
				<div className="movie-info__poster"></div>
				<div className="movie-info__trailer"></div>
			</div>
			<div className="movie-info__column-2">
				<h2 className="movie-info__title">Бойся темноты (2021)</h2>
				<div className="movie-info__buttons">
					<button className="movie-info__to-watch-btn"></button>
					<button className="movie-info__to-rate-btn"></button>
				</div>
				<h3 className="movie-info__about-title">О фильме</h3>
				<div className="movie-info__main">
					<p>Год производства</p>
					<p className="movie-info__year">2021</p>
					<p>Страна</p>
					<p className="movie-info__countries">Бельгия, Франция</p>
					<p>Жанр</p>
					<p className="movie-info__genres">ужасы, фентези, драма</p>
					<p>Слоган</p>
					<p className="movie-info__slogan">“Не дай тьме поглотить тебя”</p>
					<p className="movie-info__director">Режиссёр</p>
					<p>информация недоступна</p>
					<p>Сценарий?????</p>
					<p>информация недоступна</p>
					<p>Продюсер?????</p>
					<p>информация недоступна</p>
					<p>Оператор?????</p>
					<p>информация недоступна</p>
					<p>Композитор?????</p>
					<p>информация недоступна</p>
					<p>Монтаж?????</p>
					<p>информация недоступна</p>
					<p>Сборы в мире</p>
					<p className="movie-info__fees-world">$ 96 448</p>
					<p>Премьера в России</p>
					<p className="movie-info__premiere-russia">4 августа 2022, “Capella Film”</p>
					<p>Премьера в мире</p>
					<p className="movie-info__premiere-world">4 августа 2022, “Capella Film”</p>
					<p>Цифровой релиз</p>
					<p>8 сентября 2022, “Capella Film”</p>
					<p>Время</p>
					<p className="movie-info__movie-length">103 мин./ 01:43</p>
				</div>
			</div>
			<div className="movie-info__column-3">
				<p className="movie-info__rating negative">4.3</p>
				<p className="movie-info__ratings-total">322 оценки</p>
				<p className="movie-info__reviews-total">3 рецензии</p>
				<div className="movie-info__cast">
					<h4 className="movie-info__cast-title">В главных ролях</h4>
					<p className="movie-info__actor">Имя фамилия</p>
					<p className="movie-info__actor">Имя фамилия</p>
					<p className="movie-info__actor">Имя фамилия</p>
					<p className="movie-info__actor">Имя фамилия</p>
					<p className="movie-info__actor">Имя фамилия</p>
					<p className="movie-info__actor">Имя фамилия</p>
					<p className="movie-info__actor">Имя фамилия</p>
					<p className="movie-info__actor">Имя фамилия</p>
					<p className="movie-info__actor">Имя фамилия</p>
				</div>
			</div>
		</div>
	)
}