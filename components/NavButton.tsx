'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

function isActive(href: string, path: string) {
	// get rid of the leading slash
	href = href.substring(1);

	// look only on the first part of the path
	path = path.split("/")[1];

	return href === path;
}

export default function NavButton({
	icon,
	text,
	href,
}: {
	icon: string
	text: string
	href: string
}) {
	let [active, setActive] = useState(false);
	let path = usePathname();

	useEffect(() => {
		setActive(isActive(href, path));
	}, [path]);

	return (
		<Link className={"nav-button" + (active ? " active" : "")} href={href}>
			<span className="material-symbols-outlined">
				{icon}
			</span>
			{text}
		</Link>
	)
}