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


// export interface IDropdownMovieList {
// 	movies: IDropdownMovieItem[]
// }

// export interface IDropdownMovie { // тип данных который возвращается на запос по ключевому слову
// 	filmId: number,
// 	nameRu: string,
// 	nameEn?: string,
// 	type: string,
// 	year: string,
// 	description: string,
// 	filmLength: string,
// 	countries: country[],
// 	genres: genres[],
// 	rating: string,
// 	ratingVoteCount: number,
// 	posterUrl: string,
// 	posterUrlPreview: string
// }

// type country = {
// 	country: string
// }

// type genres = {
// 	genre: string
// }

// "filmId": 42782,
//       "nameRu": "Операция «Ы» и другие приключения Шурика",
//       "type": "FILM",
//       "year": "1965",
//       "description": "Студент Шурик попадает в самые невероятные ситуации: сражается с хулиганом Верзилой, весьма оригинальным способом готовится к экзамену и предотвращает «ограбление века», на которое идёт троица бандитов — Балбес, Трус и Бывалый.",
//       "filmLength": "01:35",
//       "countries": [
//         {
//           "country": "СССР"
//         }
//       ],
//       "genres": [
//         {
//           "genre": "комедия"
//         },
//         {
//           "genre": "криминал"
//         },
//         {
//           "genre": "мелодрама"
//         }
//       ],
//       "rating": "8.7",
//       "ratingVoteCount": 694753,
//       "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/42782.jpg",
//       "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/42782.jpg"
//     },