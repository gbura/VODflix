import { Movie } from '@/types/APIResponse'
import MovieCategoryRow from './MovieCategoryRow'
import GenresRow from '../GenresRow/GenresRow'

export default function MovieCategoryRows({
	popularMovies,
	topRatedMovies,
	upcomingMovies,
}: {
	popularMovies: Movie[]
	topRatedMovies: Movie[]
	upcomingMovies: Movie[]
}) {
	return (
		<div className='py-6 md:py-12 flex flex-col gap-y-10 md:gap-y-20'>
			<MovieCategoryRow title='Popular Now' data={popularMovies} />
			<MovieCategoryRow title='Top Rated' data={topRatedMovies} />
			<MovieCategoryRow title='Upcoming' data={upcomingMovies} />

			<GenresRow />
		</div>
	)
}
