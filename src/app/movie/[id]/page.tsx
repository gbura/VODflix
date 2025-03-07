import { getMovieDetails, getSimiliarMovies } from '@/actions/actions'
import { APIResponse, Genre, MovieDetails } from '@/types/APIResponse'
import { CalendarRange, Clock, MoveLeft, MoveRight, Speaker, Star } from 'lucide-react'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import SimiliarMoviesCarousel from '@/components/SimiliarMoviesCarousel/SimiliarMoviesCarousel'

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const { id: movieId } = params
    const movieDetails: MovieDetails = await getMovieDetails(movieId)
    const similiarMovies: APIResponse = await getSimiliarMovies(movieId)

    return (
		<div
			className='relative w-full min-h-screen bg-center bg-cover'
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
			}}>
			<div className='absolute inset-0 bg-black opacity-50' />

			<div className='relative z-10 w-full h-full p-6 flex flex-col gap-10'>
				<div className='max-w-max'>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link href='/'>
									<MoveLeft size={60} color='#fff' />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>Go back</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>

				<div className='flex flex-col gap-y-4 text-white'>
					<h1 className='text-5xl md:text-6xl xl:text-7xl'>{movieDetails.title}</h1>

					<div className='flex gap-x-5 items-center max-w-max flex-col justify-center'>
						<div className='border-t border-red-500 w-full h-2 py-2' />
						<div className='flex gap-2'>
							<span className='flex gap-1 items-center'>
								<CalendarRange size={14} />
								{movieDetails.release_date.split('-')[0]}
							</span>

							<span className='text-red-500'>•</span>
							{movieDetails.spoken_languages ? (
								<>
									<span className='flex gap-1 items-center'>
										<Speaker size={14} />
										{movieDetails.spoken_languages?.[0]?.name}
									</span>
									<span className='text-red-500'>•</span>
								</>
							) : null}

							<span className='flex gap-1 items-center'>
								<Clock size={14} />
								{movieDetails.runtime}min
							</span>
							<span className='text-red-500'>•</span>
							<span className='flex gap-1 items-center'>
								<Star size={14} />
								{movieDetails.vote_average.toFixed(1)}
							</span>
						</div>
					</div>
					<div className='flex items-center'>
						{movieDetails.genres.length && (
							<span>{movieDetails.genres.map((genre: Genre) => genre.name).join(' • ')}</span>
						)}
					</div>

					<p className='mt-4 md:mt-6 text-base md:text-lg max-w-96 md:max-w-4xl z-10'>{movieDetails.overview}</p>
				</div>
				<div className='mt-20'>
					<div className='flex gap-2 items-center'>
						<p className='text-lg tracking-wider uppercase text-gray-300'>Similiar movies</p>
						<MoveRight size={40} className='text-gray-300' />
					</div>
					<SimiliarMoviesCarousel data={similiarMovies.results} />
				</div>
			</div>
		</div>
	)
}
