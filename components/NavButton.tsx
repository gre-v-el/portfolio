import Link from 'next/link'

export default function NavButton({
	icon,
	text,
	href,
}: {
	icon: string
	text: string
	href: string
}) {
	return (
		<Link className="nav-button" href={href}>
			<span className="material-symbols-outlined">
				{icon}
			</span>
			{text}
		</Link>
	)
}