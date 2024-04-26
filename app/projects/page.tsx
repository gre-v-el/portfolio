import Link from 'next/link';
import style from './page.module.css'
import Tags from '@/components/Tags';
import ProjectTiles from '@/components/ProjectTiles';

const data: ProjectsData = require('../../data/projects.json');

export default function Projects() {

	return (
	<div className={style["main"]}>
		<h2>All projects</h2>
		<Tags tags={data.tags}/>
		<ProjectTiles data={data}/>
	</div>
	);
}