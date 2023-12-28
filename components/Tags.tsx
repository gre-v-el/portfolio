import Link from "next/link"

export default function Tags(
	{
		data, 
		selected,
	}: {
		data: ProjectsData,
		selected?: string,
	}
) {
	return (
		<div className="tags">
			{data.tags.map((tag) => {
				let col = selected == null || selected === tag.name ? tag.color : "#7777"

				let href = selected === tag.name ? "/projects" : "/projects/tag/" + tag.name;

				return (
					<Link href={href} key={tag.name}>
						<div className="tag" style={{ backgroundColor: col }}>
							{tag.name}
						</div>
					</Link>
				)
			})}
		</div>
	)
}