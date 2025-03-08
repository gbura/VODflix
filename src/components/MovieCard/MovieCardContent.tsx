import { Movie } from '@/types/APIResponse'
import { Star, CalendarRange } from 'lucide-react'

export default function MovieCardContent({ movie }: { movie: Movie }) {
	return (
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
	)
}
