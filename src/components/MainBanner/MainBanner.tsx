'use client'
import Image from 'next/image'
import { Movie, APIResponse } from '@/types/APIResponse'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import MainBannerContent from '@/components/MainBanner/MainBannerContent'

export default function MainBanner({ banners }: { banners: APIResponse }) {
	return (
		<Carousel
			opts={{
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 3000,
				}),
			]}
			orientation='horizontal'
			className='w-full'>
			<CarouselContent className='-mt-1 h-[640px]'>
				{banners.results.length &&
					banners.results.map((banner: Movie) => (
						<CarouselItem key={banner.id} className='pt-1 w-full'>
							<div className='relative h-full w-full'>
								<Image
									src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`}
									alt={banner.original_title}
									fill
									priority
									quality={100}
									className='absolute top-0 left-0 object-cover lg:object-fill'
									placeholder='blur'
									blurDataURL={`https://image.tmdb.org/t/p/w300${banner.backdrop_path}`}
								/>
								<div className='absolute inset-0 bg-black opacity-50' />
								<div className='absolute inset-0 bg-gradient-to-t from-black to-transparent' />

								<MainBannerContent banner={banner} />
							</div>
						</CarouselItem>
					))}
			</CarouselContent>
		</Carousel>
	)
}
