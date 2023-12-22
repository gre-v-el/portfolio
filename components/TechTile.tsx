import Image from 'next/image'


export default function TechTile({
	text,
}: {
	text: string
}) {
	return (
		<div className="tile">
			<Image src={`/tech_icons/${text}.png`} alt={text + " icon"} width={90} height={90} />
			{text}
		</div>
	)
}