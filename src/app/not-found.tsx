import Link from 'next/link'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
	return (
		<div className='min-h-screen flex flex-col justify-center items-center text-white gap-5'>
			<div className='relative w-full max-w-[600px] md:max-w-[900px] max-h-[300px] aspect-square'>
				<Image src='/images/404.webp' alt='404 page' fill className='object-contain' priority />
			</div>
			<div className='text-center'>
				<h1 className='text-3xl md:text-5xl'>It looks like you've got lost.</h1>
			</div>
			<Button variant='destructive'>
				<Link href='/' className='p-2 flex items-center gap-2'>
					Go back to Home
					<MoveRight size={24} />
				</Link>
			</Button>
		</div>
	)
}
