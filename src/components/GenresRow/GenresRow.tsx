'use client'
import { Genre } from '@/types/APIResponse'
import { genres } from '@/constants'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'

export default function GenresRow() {
	return (
		<section className='h-full flex flex-col md:flex-row px-6 md:px-12 gap-12'>
			<div className='uppercase flex flex-col justify-between md:w-96'>
				<h2 className='text-2xl md:text-5xl max-w-xs font-semibold text-[#E50914]'>Select Genre</h2>
			</div>

			<Carousel
				opts={{
					align: 'start',
				}}
				plugins={[
					Autoplay({
						delay: 2000,
					}),
				]}
				orientation='horizontal'
				className='w-full overflow-hidden'>
				<CarouselContent>
					{genres.map((genre: Genre) => (
						<CarouselItem key={genre.id} className='sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-80'>
							<Link
								href={`genre/${genre.id}`}
								className='w-full h-full flex items-center justify-center rounded-lg text-white font-bold text-xl'
								style={{ backgroundColor: genre.color }}>
								{genre.name}
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}
