export default function Section({title}: {title: string}) {
	return (
		<div className="section-flex">
			<div className="section-line"/>
			<h2>{title}</h2>
			<div className="section-line"/>
		</div>
	);
}