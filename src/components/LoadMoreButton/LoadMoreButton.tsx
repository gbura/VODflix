'use client'

import { MoveRight } from 'lucide-react'
import { Button } from '../ui/button'

export default function LoadMoreButton({ onClick, loading }: { onClick: () => void; loading: boolean }) {
	return (
		<Button
			variant='default'
			className='text-gray-300 mt-10 cursor-pointer bg-transparent hover:bg-transparent text-base'
			onClick={onClick}
			disabled={loading}>
			{loading ? 'Loading...' : 'Load More'}
			<MoveRight size={25} />
		</Button>
	)
}
