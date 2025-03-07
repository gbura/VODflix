import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '../components/Header/Header'
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen'
import { NavigationProvider } from '../providers/NavigationProvider'

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'VODflix',
	description: 'VODflix is application to watch videos.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${roboto.className} antialiased min-h-screen`}>
				<NavigationProvider>
					<LoadingScreen />
					<Header title='VODflix' />
					<main className='bg-[#111]'>{children}</main>
				</NavigationProvider>
			</body>
		</html>
	)
}
