import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import NavButton from '@/components/NavButton'
import 'material-symbols/outlined.css'

const font = Montserrat({ subsets: ['latin'] })

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
		<body className={font.className}>
			<div id="container">
				<nav>
					<NavButton href='/' icon='home' text='Home'/>
					<NavButton href='/projects' icon='code_blocks' text='Projects'/>
					<NavButton href='/education' icon='school' text='Education'/>
					<NavButton href='/resume' icon='description' text='Resume'/>
					<NavButton href='/contact' icon='contact_mail' text='Contact'/>
				</nav>
				<main>
					{children}
				</main>
			</div>
		</body>
	</html>
	)
	}
	