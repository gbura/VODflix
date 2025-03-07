'use server'

import { APIResponse, Movie, MovieDetails } from '@/types/APIResponse'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = process.env.TMDB_API_KEY

export async function getNowPlayingMovies(): Promise<APIResponse> {
	const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
	const data: APIResponse = await res.json()
	if (!res.ok) {
		throw new Error('Failed to fetch now playing movies.')
	}

	return data
}

export async function getPopularMovies(): Promise<APIResponse> {
	const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
	const data: APIResponse = await res.json()
	if (!res.ok) {
		throw new Error('Failed to fetch popular movies.')
	}

	return data
}

export async function getTopRatedMovies(): Promise<APIResponse> {
	const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
	const data: APIResponse = await res.json()
	if (!res.ok) {
		throw new Error('Failed to fetch top rated movies.')
	}

	return data
}

export async function getUpcomingMovies(): Promise<APIResponse> {
	const res = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
	const data: APIResponse = await res.json()
	if (!res.ok) {
		throw new Error('Failed to fetch top rated movies.')
	}

	return data
}

export async function getMovieDetails(movieId: string): Promise<MovieDetails> {
	const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`)
	const data: MovieDetails = await res.json()
	if (!res.ok) {
		throw new Error('Failed to fetch top rated movies.')
	}

	return data
}

export async function getSimiliarMovies(movieId: string): Promise<APIResponse> {
	const res = await fetch(`${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`)
	const data: APIResponse = await res.json()
	if (!res.ok) {
		throw new Error('Failed to fetch top rated movies.')
	}

	return data
}

export async function getMoviesByGenre(id: string, page: number = 1): Promise<APIResponse> {
	const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${id}&language=en-US&page=${page}`)
	const data: APIResponse = await res.json()
	if (!res.ok) {
		throw new Error('Failed to fetch movies.')
	}
	return data
}
