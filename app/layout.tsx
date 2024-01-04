import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import 'material-symbols/outlined.css'
import MobileNav from '@/components/MobileNav';
import NavButtonSet from '@/components/NavButtonSet';

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Gabriel Myszkier',
	description: 'Portfolio and resume of Gabriel Myszkier',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
	<html lang="en">
		<body className={font.className}>
			<MobileNav/>
			<div id="container">
				<nav id="desktop-nav">
					<div className="desktop-nav-buttons">
						<NavButtonSet/>
					</div>
				</nav>
				<main>
					{children}
				</main>
			</div>
		</body>
	</html>
	)
}
	