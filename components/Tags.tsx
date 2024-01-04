import Image from "next/image";
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
				let col = allColored || selected != null && selected === tag.name ? tag.color : "#7777";

				let href = selected === tag.name ? "/projects" : "/projects/tag/" + (tag.route === undefined ? tag.name : tag.route);

				let visual = (<div className="tag" style={{ backgroundColor: col }} key={tag.name}>
					<Image src={"/tech_icons/"+tag.name+".png"} width={16} height={16} alt={tag.name}/>
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