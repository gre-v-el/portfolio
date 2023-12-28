import Link from "next/link";
import Tags from "./Tags";

export default function ProjectTiles(
	{
		data,
	}: {
		data: ProjectsData,
	}
) {
	return (
		<div className="projects">
			{data.projects.map((project) => (
				<Link href={"/projects/project/" + project.route} key={project.route}>
					<div className="project">
						<img src={"/projects/" + project.thumbnail} />
						<h3>{project.name}</h3>
						<h4>{project.date}</h4>
						<p>{project.short_description}</p>
						<Tags tags={data.tags.filter((t) => project.tags.includes(t.name))} allColored={true} clickable={false}/>
					</div>
				</Link>
			)
			)}
		</div>
	);
}