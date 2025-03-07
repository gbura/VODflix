'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export default function LoadingScreen() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (isLoading) {
			document.body.style.overflow = 'hidden'
		}
		const timer = setTimeout(() => {
			setIsLoading(false)
			document.body.style.overflow = 'auto'
		}, 3000)

		return () => {
			clearTimeout(timer)
			document.body.style.overflow = 'auto'
		}
	}, [isLoading])

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className='fixed inset-0 z-50 flex items-center justify-center bg-[#111] select-none'>
					<div className='relative flex flex-col items-center'>
						<motion.h1
							initial={{ scale: 0.5, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{
								duration: 0.8,
								ease: 'easeOut',
							}}
							className='text-6xl font-bold text-red-600 mb-8 uppercase'>
							vodflix
						</motion.h1>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
							className='w-12 h-12 relative'>
							<Loader2 className='animate-spin text-red-600' size={40} />
						</motion.div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
