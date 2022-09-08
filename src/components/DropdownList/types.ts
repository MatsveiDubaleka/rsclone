export interface IDropdownMovie {
	nameRu: string,
	nameEn: string,
	posterUrlPreview: string,
	year: number,
	rating: number,
	filmId?: number
}

export interface IDropdownMovieList {
	movies: IDropdownMovie[]
}
