'use client';

import style from '../../page.module.css';
import Tags from "@/components/Tags";
import { notFound, useRouter } from "next/navigation";
import ProjectTiles from "@/components/ProjectTiles";

const data: ProjectsData = require('../../../../data/projects.json');

export default function TagName(
	{ params }: { params: { tagName: string } }
) {
	let valid = data.tags.some((tag) => tag.name === params.tagName);
	if(!valid) {
		notFound();
	}

	let displayed = data.projects.filter((project) => project.tags.includes(params.tagName));
	let displayedData: ProjectsData = {
		tags: data.tags,
		projects: displayed,
	}

	return (
		<div className={style["main"]}>
			<h2>Projects tagged {params.tagName}</h2>

			<Tags data={data} selected={params.tagName}/>
			<ProjectTiles data={displayedData}/>
			{displayed.length === 0 && (
				<h3>no projects found</h3>
			)}
		</div>
	);
}