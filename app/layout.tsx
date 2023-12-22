import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavButton from '@/components/NavButton'
import 'material-symbols/outlined.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Gabriel Myszkier',
	description: 'Resume and portfolio of Gabriel Myszkier',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
	<html lang="en">
		<body className={inter.className}>
			<div id="container">
				<nav>
					<NavButton href='/' icon='home' text='Home'/>
					<NavButton href='/projects' icon='code_blocks' text='Projects'/>
					<NavButton href='/education' icon='school' text='Education'/>
					<NavButton href='/resume' icon='description' text='Resume'/>
				</nav>
				<main>
					{children}
				</main>
			</div>
		</body>
	</html>
	)
	}
	