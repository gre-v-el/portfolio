'use client';

import Tags from '@/components/Tags';
import style from './page.module.css';
import { notFound } from "next/navigation";

const data: ProjectsData = require('../../../../data/projects.json');

export default function TagName(
	{ params }: { params: { projectName: string } }
) {
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
							<a href={proj.repository}>
								<div>
									github icon
								</div>
								See code
							</a>
						)}

						{proj.live_link && (
							<a href={proj.live_link}>
								<div>
									See website
								</div>
							</a>
						)}
						
						{proj.release_link && (
							<a href={proj.release_link}>
								<div>
									See release
								</div>
							</a>
						)}
					</div>
				</div>
			</div>

			<Tags tags={data.tags.filter((t) => proj!.tags.includes(t.name))} allColored={true}/>
			<p>{proj.long_description}</p>

			<div className={style["images"]}>
				{proj.images.map((img) => {
					return (
						<img src={"/projects/"+img} key={img} />
					);
				})}
			</div>
		</div>
	);
}