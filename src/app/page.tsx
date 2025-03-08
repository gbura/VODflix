import MainBanner from '@/components/MainBanner/MainBanner'
import MovieCategoryRows from '@/components/MovieCategoryRows/MovieCategoryRows'
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/actions/actions'
import { APIResponse } from '@/types/APIResponse'

export default async function Page() {
	const banners: APIResponse = await getNowPlayingMovies()
	const popularMovies: APIResponse = await getPopularMovies()
	const topRatedMovies: APIResponse = await getTopRatedMovies()
	const upcomingMovies: APIResponse = await getUpcomingMovies()

	return (
		<>
			<MainBanner banners={banners} />

			<MovieCategoryRows
				popularMovies={popularMovies.results}
				topRatedMovies={topRatedMovies.results}
				upcomingMovies={upcomingMovies.results}
			/>
		</>
	)
}
