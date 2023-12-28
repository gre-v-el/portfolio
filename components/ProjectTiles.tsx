import Link from "next/link";

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
						<div className="tags">
							{project.tags.map((tag) => {
								return (
									<div className="tag" style={{ backgroundColor: data.tags.find((t) => t.name === tag)?.color }} key={tag}>
										{tag}
									</div>
								);
							})}
						</div>
					</div>
				</Link>
			)
			)}
		</div>
	);
}