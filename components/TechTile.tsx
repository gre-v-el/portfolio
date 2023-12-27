import Image from 'next/image'


export default function TechTile({
	text,
	cls,
}: {
	text: string
	cls: string
}) {
	return (
		<div className={cls}>
			<Image src={`/tech_icons/${text}.png`} alt={text + " icon"} width={90} height={90} />
			{text}
		</div>
	)
}