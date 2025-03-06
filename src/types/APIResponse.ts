export interface APIResponse {
	page: number
	results: Movie[]
	total_pages: number
	total_results: number
}

export interface Movie {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
	media_type?: string
}

export interface MovieDetails extends Movie {
	genres: Genre[]
	runtime: number
	status: string
	tagline: string
	spoken_languages: {
		name: string
	}[]
}

export type Genre = {
	id: number
	name: string
	color?: string
}

export type MovieRowProps = {
	data: Movie[]
	title: string
}
