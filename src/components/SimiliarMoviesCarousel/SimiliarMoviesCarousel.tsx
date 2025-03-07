import { Movie } from '@/types/APIResponse'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Link from 'next/link'
import Image from 'next/image'

export default function SimiliarMoviesCarousel({ data }: { data: Movie[] }) {
	return (
		<section className='h-full flex flex-col md:flex-row px-6 md:px-12 gap-12'>
			<Carousel
				opts={{
					align: 'start',
				}}
				orientation='horizontal'
				className='w-full py-5'>
				<CarouselContent className='-mt-1 h-full'>
					{data.length &&
						data
							.filter((movie: Movie) => movie.poster_path)
							.map((movie: Movie) => (
								<CarouselItem className='sm:basis-1/3 lg:basis-1/5 2xl:basis-1/7' key={movie.id}>
									<Link href={`/movie/${movie.id}`} className='block w-full'>
										<div className='relative w-full aspect-[4/5]'>
											<Image
												fill
												sizes='100%'
												quality={100}
												alt={movie.title}
												src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
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
