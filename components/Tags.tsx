import Link from "next/link"

export default function Tags(
	{
		tags, 
		selected,
		allColored = false,
		clickable = true,
	}: {
		tags: Tag[],
		selected?: string,
		allColored?: boolean,
		clickable?: boolean,
	}
) {
	return (
		<div className="tags">
			{tags.map((tag) => {
				let col = allColored || selected != null && selected === tag.name ? tag.color : "#7777"

				let href = selected === tag.name ? "/projects" : "/projects/tag/" + tag.name;

				let visual = (<div className="tag" style={{ backgroundColor: col }}>
					{tag.name}
				</div>);

				return clickable ? (
					<Link href={href} key={tag.name}>
						{visual}
					</Link>
				) : visual;
			})}
		</div>
	)
}