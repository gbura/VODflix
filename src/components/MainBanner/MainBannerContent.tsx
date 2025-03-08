import { Badge } from '@/components/ui/badge'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { Genre, Movie } from '@/types/APIResponse'
import { genres } from '@/constants'

export default function MainBannerContent({ banner }: { banner: Movie }) {
	return (
		<div className='flex flex-col ml-4 md:ml-8 pt-40 text-white'>
			<h1 className='text-5xl md:text-6xl lg:text-7xl text-white font-bold z-10'>{banner.original_title}</h1>
			<div className='mt-2 md:mt-4 inline-flex items-center gap-x-2 z-10 text-white'>
				<p>{banner.release_date.split('-')[0]}</p>
				<span className='text-red-500'>•</span>
				<p>{banner.original_language.toUpperCase()}</p>
				<span className='text-red-500'>•</span>
				<div className='flex items-center gap-1 md:gap-2 flex-wrap'>
					{banner.genre_ids.length &&
						banner.genre_ids.map((genreId: number, index: number) => {
							const genre = genres.find((g: Genre) => g.id === genreId)
							return (
								genre && (
									<Badge key={index} variant='outline' className='text-white'>
										{genre.name}
									</Badge>
								)
							)
						})}
				</div>
			</div>

			<p className='mt-4 md:mt-8 text-base md:text-lg max-w-96 md:max-w-4xl z-10'>{banner.overview}</p>
			<Link href={`/movie/${banner.id}`} className='flex items-center gap-1 z-10 text-gray-300 mt-4 md:mt-8 max-w-max'>
				<p className='text-sm'>Check details</p>
				<MoveRight size={14} />
			</Link>
		</div>
	)
}
