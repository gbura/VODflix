import { APIResponse, MovieDetails } from '@/types/APIResponse'
import Image from 'next/image'
import BannerContent from '@/components/Banner/BannerContent'

export default function Banner({
	movieDetails,
	similiarMovies,
}: {
	movieDetails: MovieDetails
	similiarMovies: APIResponse
}) {
	return (
		<div className='relative h-full w-full min-h-screen'>
			<Image
				src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
				alt={movieDetails.original_title}
				fill
				priority
				quality={100}
				className='absolute top-0 left-0 object-cover lg:object-fill'
				placeholder='blur'
				blurDataURL={`https://image.tmdb.org/t/p/w300${movieDetails.backdrop_path}`}
			/>
			<div className='absolute inset-0 bg-black opacity-50' />

			<BannerContent movieDetails={movieDetails} similiarMovies={similiarMovies} />
		</div>
	)
}
