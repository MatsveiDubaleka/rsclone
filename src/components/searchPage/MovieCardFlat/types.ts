export interface IDropdownMovie {
	num: number,
	nameRu: string,
	nameEn: string,
	posterUrlPreview: string,
	year: number,
	rating?: number,
	ratingKinopoisk?: number,
	filmId?: number,
	kinopoiskId?: number,
	filmLength?: string,
	genres: [
		{
			genre?: string | undefined
    },
	],
	countries: [
		{
			country?: string | undefined
    }
	],
}

export interface IDropdownMovieList {
	movies: IDropdownMovie[]
}
