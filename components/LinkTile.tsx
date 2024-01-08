'use client';

import basePath from "@/lib/basePath";
import hit from "@/lib/counting";
import Image from "next/image";
import Link from "next/link";
import { Ref, RefObject, useRef } from "react";

export default function LinkTile({
	styles,
	name,
	href,
	src,
	material,
	copy,
	notification_ref
}: {
	styles: any
	name: string,
	href?: string,
	src?: string,
	material?: string,
	copy?: string
	notification_ref?: RefObject<HTMLDivElement>
}) {
	function clipboard() {
		if (copy) {
			hit('copy_' + name);

			navigator.clipboard.writeText(copy);

			if(!notification_ref!.current?.classList.contains(styles["show"])) {
				notification_ref!.current?.classList.add(styles["show"]);
				setTimeout(() => {
					notification_ref!.current?.classList.remove(styles["show"]);
				}, 3100);
			}
		}
	}

	let contents = <>
		{src && <Image src={basePath + "/tech_icons/" + src} width={100} height={100} alt={name + " icon"}/>}

		{material && <span className="material-symbols-outlined">{material}</span>}

		<h3>{name}</h3>

		<div className={styles["link-tile-hover"]}>
			{href && <><span className="material-symbols-outlined">link</span>Open</>}
			{copy && <><span className="material-symbols-outlined">content_copy</span>Copy</>}
		</div>
	</>

	return (
		href ? 
			<Link href={href} className={styles["link-tile"]} target="_blank" onClick={() => hit("link_" + name.replaceAll(" ", "").replaceAll(".", ""))}>
				{contents}
			</Link> :
			<div className={styles["link-tile"]} onClick={clipboard}>
				{contents}
			</div>
	);
} 