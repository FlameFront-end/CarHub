import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata = {
	title: 'CarHub',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='relative overflow-x-hidden'>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
