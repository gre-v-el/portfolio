import Link from "next/link";
import Tags from "./Tags";
import Image from "next/image";
import basePath from "@/lib/basePath";

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
						<Image src={basePath + "/projects/" + project.thumbnail} alt={project.name + " thumbnail"} width={600} height={400}/>
						<h3>{project.name}</h3>
						<h4>{project.date}</h4>

						<div style={{flexGrow: 1}}/>
						
						<p dangerouslySetInnerHTML={{__html: project.short_description}}></p>

						<div style={{flexGrow: 1}}/>

						<Tags tags={data.tags.filter((t) => project.tags.includes(t.name))} allColored={true} clickable={false}/>
					</div>
				</Link>
			)
			)}
		</div>
	);
}