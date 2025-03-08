import { getMovieDetails, getSimiliarMovies } from '@/actions/actions'
import { APIResponse, MovieDetails } from '@/types/APIResponse'

import Banner from '@/components/Banner/Banner'

export default async function Page(props: { params: Promise<{ id: string }> }) {
	const params = await props.params
	const { id: movieId } = params
	const movieDetails: MovieDetails = await getMovieDetails(movieId)
	const similiarMovies: APIResponse = await getSimiliarMovies(movieId)

	return <Banner movieDetails={movieDetails} similiarMovies={similiarMovies} />
}
