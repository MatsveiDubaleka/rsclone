export interface IDropdownMovie {
	nameRu: string,
	nameEn: string,
	posterUrlPreview: string,
	year: number,
	filmId?: number
}

export interface IDropdownMovieList {
	trailers: IDropdownMovie[]
}
