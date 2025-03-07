import { Movie } from '@/types/APIResponse'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Star, CalendarRange } from 'lucide-react'

export default function MovieCard({ movie }: { movie: Movie }) {
	return (
		<Card className='bg-transparent border-none p-0 overflow-hidden max-w-max'>
			<CardContent className='p-0'>
				<Link href={`/movie/${movie.id}`}>
					<div className='relative w-full h-96'>
						<Image
							src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
							alt={movie.title}
							width={500}
							height={500}
							className='h-full w-full object-contain'
							priority
						/>

						<div className='absolute inset-0 bg-gradient-to-t from-[#222020] to-transparent' />

						<div className='absolute bottom-0 left-0 right-0 p-4 text-gray-300'>
							<h3 className='text-xl font-semibold'>{movie.title}</h3>
							<div className='flex justify-between gap-1'>
								<p className='text-sm mt-1 flex gap-1 items-center'>
									<span>
										<CalendarRange size={14} />
									</span>
									{movie.release_date.split('-')[0]}
								</p>
								<p className='text-sm mt-1 flex gap-1 items-center'>
									<span>
										<Star size={14} />
									</span>
									{movie.vote_average.toFixed(1)}
								</p>
							</div>
						</div>
					</div>
				</Link>
			</CardContent>
		</Card>
	)
}
