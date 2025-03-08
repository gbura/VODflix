import { Movie } from '@/types/APIResponse'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link'
import Image from 'next/image'
import MovieCardContent from '@/components/MovieCard/MovieCardContent'

export default function MovieCard({ movie }: { movie: Movie }) {
	return (
		<Card className='bg-transparent border-none p-0 overflow-hidden max-w-max'>
			<CardContent className='p-0'>
				<Link href={`/movie/${movie.id}`}>
					<div className='relative w-full h-96'>
						<Image
							src={
								movie.poster_path
									? `https://image.tmdb.org/t/p/original${movie.poster_path}`
									: 'https://placehold.co/500'
							}
							alt={movie.title}
							width={500}
							height={500}
							className='h-full w-full object-contain'
							priority
							placeholder='blur'
							blurDataURL={
								movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'https://placehold.co/300'
							}
						/>

						<div className='absolute inset-0 bg-gradient-to-t from-[#222020] to-transparent' />

						<MovieCardContent movie={movie} />
					</div>
				</Link>
			</CardContent>
		</Card>
	)
}
