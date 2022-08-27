export interface IDropdownMovie {
	num: number,
	nameRu: string,
	nameEn: string,
	posterUrlPreview: string,
	year: number,
	rating: number,
	filmId?: number,
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