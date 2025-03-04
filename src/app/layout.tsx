import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

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
			<body className={`${roboto.className} antialiased`}>
				<Navbar />
				<main className='bg-[#111]'>{children}</main>
			</body>
		</html>
	)
}
