import "./AdvancedSearchForm.scss"

export const AdvancedSearchForm = () => {
	return (
		<div className="advanced-search-form">
			<div className="advanced-search-form__title">Расширенный поиск</div>
			<div className="advanced-search-form__subtitle">Искать фильм:</div>
			<form action="" method="" className="advanced-search-form__form" id="advanced-search-form__form" >
				<div className="advanced-search-form__row">
					<label htmlFor="search-form-film-title">Полное или частичное название фильма</label>
					<input id="search-form-film-title" className="advanced-search-form__row_film-title" type="text" name="filmTitle" />
					<label htmlFor="search-form-film-year">Год</label>
					<input id="search-form-film-year" className="advanced-search-form__row_film-year" type="text" name="filmYear" />
					<label htmlFor="search-form-film-minYear" className="advanced-search-form__row_label-minYear">...или интервал:</label>
					<input id="search-form-film-minYear" className="advanced-search-form__row_film-minYear" type="text" name="minYear" />
					<input id="search-form-film-maxYear" className="advanced-search-form__row_film-maxYear" type="text" name="maxYear" />
				</div>
				<div className="advanced-search-form__row">
					<label htmlFor="search-form-film-country">Страна</label>
					<input id="search-form-film-country" className="advanced-search-form__row_film-country" type="text" name="filmCountry" />
					<label htmlFor="search-form-film-rating">Рейтинг</label>
					<input id="search-form-film-rating" className="advanced-search-form__row_film-rating" type="text" name="filmRating" />
					<label htmlFor="search-form-film-minRating" className="advanced-search-form__row_label-minRating">...или интервал:</label>
					<input id="search-form-film-minRating" className="advanced-search-form__row_film-minRating" type="text" name="minYear" />
					<input id="search-form-film-maxRating" className="advanced-search-form__row_film-maxRating" type="text" name="maxYear" />
				</div>
				<div className="advanced-search-form__row">
					<label htmlFor="search-form-film-genre">Жанр</label>
					<input id="search-form-film-genre" className="advanced-search-form__row_film-genre" type="select" name="filmGenre" />
					<span className="advanced-search-form__row_film-genre_down-icon" id="down-icon"></span>
				</div>
				<button type="submit" className="advanced-search-form__button-search">Искать</button>
			</form>
		</div>
	)
}
