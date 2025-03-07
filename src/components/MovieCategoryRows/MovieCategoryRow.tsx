import { Movie, MovieRowProps } from '@/types/APIResponse'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Link from 'next/link'
import Image from 'next/image'

export default function MovieCategoryRow({ data, title }: MovieRowProps) {
	return (
		<section className='h-full flex flex-col md:flex-row px-6 md:px-12 gap-12'>
			<div className='uppercase flex flex-col justify-between md:w-96'>
				<h2 className='text-2xl md:text-5xl max-w-xs font-semibold text-[#E50914]'>{title}</h2>
			</div>

			<Carousel
				opts={{
					align: 'start',
				}}
				orientation='horizontal'
				className='w-full py-5'>
				<CarouselContent className='-mt-1 h-80'>
					{data.length &&
						data.map((movie: Movie) => (
							<CarouselItem className='sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5' key={movie.id}>
								<Link href={`/movie/${movie.id}`} className='block w-full'>
									<div className='relative w-full aspect-[4/5]'>
										<Image
											fill
											sizes='100%'
											quality={100}
											alt={movie.title}
											src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
											placeholder='blur'
											blurDataURL={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
										/>
									</div>
								</Link>
							</CarouselItem>
						))}
				</CarouselContent>
				<CarouselNext className='hidden md:flex' />
				<CarouselPrevious className='hidden md:flex' />
			</Carousel>
		</section>
	)
}
