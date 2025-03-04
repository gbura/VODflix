'use server'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = process.env.TMDB_API_KEY

export async function getNowPlayingMovies() {
	const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
	const data = res.json()
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return data
}
