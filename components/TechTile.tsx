import basePath from '@/lib/basePath'
import Image from 'next/image'
import Link from 'next/link'


export default function TechTile({
	tag,
	cls,
}: {
	tag: Tag
	cls: string
}) {
	return (
		<Link href={"projects/tag/" + (tag.route === undefined ? tag.name : tag.route)}>
			<div className={cls}>
				<Image src={basePath + `/tech_icons/${tag.name}.png`} alt={tag.name + " icon"} width={90} height={90} />
				{tag.name}
			</div>
		</Link>
	)
}