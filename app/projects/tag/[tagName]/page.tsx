'use client';

import style from '../../page.module.css';
import Tags from "@/components/Tags";
import { notFound, useRouter } from "next/navigation";
import ProjectTiles from "@/components/ProjectTiles";

const data: ProjectsData = require('../../../../data/projects.json');

export default function TagName(
	{ params }: { params: { tagName: string } }
) {
	let used_tag = data.tags.find((tag) => (tag.route === undefined ? tag.name : tag.route) === params.tagName);
	if(used_tag === undefined) {
		notFound();
	}

	let displayed = data.projects.filter((project) => project.tags.includes(used_tag!.name));
	let displayedData: ProjectsData = {
		tags: data.tags,
		projects: displayed,
	}

	return (
		<div className={style["main"]}>
			<h2>Projects tagged {used_tag.name}</h2>

			<Tags tags={data.tags} selected={used_tag!.name}/>
			<ProjectTiles data={displayedData}/>
			{displayed.length === 0 && (
				<h3>no projects found</h3>
			)}
		</div>
	);
}