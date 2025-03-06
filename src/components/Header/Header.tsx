import Link from 'next/link'

export default function Header({ title }: { title: string }) {
	return (
		<header className='flex top-0 p-5 md:px-12 px-6 h-20 z-20 transition-all ease-in duration-500'>
			<div className='flex justify-between'>
				<Link href='/'>
					<h1 className='text-3xl font-bold uppercase text-[#E50914]'>{title}</h1>
				</Link>
			</div>
		</header>
	)
}
