import Tags from '@/components/Tags';
import style from './page.module.css';
import { notFound } from "next/navigation";
import Image from 'next/image';
import Gallery from '@/components/Gallery';
import hit from '@/lib/counting';
import basePath from '@/lib/basePath';

const data: ProjectsData = require('../../../../data/projects.json');

export function generateStaticParams() {
	return data.projects.map((project) => ({
		projectName: project.route,
	}))
}

export default function ProjectName(
	{ params }: { params: { projectName: string } }
) {
	hit('project');
	
	let proj = data.projects.find((proj) => proj.route === params.projectName);

	if(proj === undefined) {
		notFound();
	}

	return (
		<div className={style["main"]}>
			<div className={style["title-centerer"]}>
				<div className={style["title"]}>
					<h2>{proj.name}</h2>
					<h3>{proj.date}</h3>

					<div className={style["links"]}>
						{proj.repository && (
							<a href={proj.repository} target="_blank">
								<Image src={basePath + "/tech_icons/github.png"} alt="github icon" width={24} height={24}/>
								See code
							</a>
						)}

						{proj.live_link && (
							<a href={proj.live_link} target="_blank">
								<Image src={basePath + "/tech_icons/web.png"} alt="github icon" width={24} height={24}/>
								See website
							</a>
						)}
						
						{proj.release_link && (
							<a href={proj.release_link} target="_blank">
								<Image src={basePath + "/tech_icons/github.png"} alt="github icon" width={24} height={24}/>
								See release
							</a>
						)}
						
						{proj.video_link && (
							<a href={proj.video_link} target="_blank">
								<Image src={basePath + "/tech_icons/youtube.png"} alt="youtube icon" width={24} height={24}/>
								See video
							</a>
						)}
					</div>
				</div>
			</div>

			<Tags tags={data.tags.filter((t) => proj!.tags.includes(t.name))} allColored={true}/>

			<p dangerouslySetInnerHTML={{__html: proj.long_description}}></p>

			{
				proj.images.length > 0 &&
					<Gallery style={style} images={proj.images}/>
			}
			{
				proj.route == "Portfolio" && <iframe src={basePath}/>
			}
		</div>
	);
}