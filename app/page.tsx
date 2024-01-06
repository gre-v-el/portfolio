import ProjectTiles from '@/components/ProjectTiles';
import styles from './page.module.css'
import TechTile from '@/components/TechTile';
import data from '@/data/projects.json';
import hit from '@/lib/counting';

export default function Home() {
	hit('index');

	let tags = data.tags;
	let tag_groups = [
		tags.slice(0, 4),
		tags.slice(4, 6),
		tags.slice(6, 11),
		tags.slice(11, 16),
	];
	
	let featured_projects = data.projects.filter((e) => data.featured.includes(e.route));
	let featured_data: ProjectsData = {
		featured: [],
		projects: featured_projects,
		tags: data.tags,
	};

	return (
	<div id={styles["main"]} className='not-selectable'>
		<div className={styles["fullscreen-panel"]}>
			<div style={{flexGrow: 1}}/>

			<div className={styles["main-row"]}>
				<div style={{flexGrow: 1}}/>
				
				<div className={styles["main-cell"]}>
					<h1 className={styles['reveal']}>Gabriel Myszkier</h1>
					<h2 className={styles['reveal']}>software developer</h2>
				</div>

				<div style={{flexGrow: 2}}/>
			</div>

			<div style={{flexGrow: 1}}/>

			<div className={styles["tile-container"]}>
				{tag_groups.map((group) => (
					<div className={styles["category-tile"]} key={group[0].name}>
						{group.map((tag) => (
							<TechTile cls={styles['tile']} tag={tag} key={tag.name}/>
						))}
					</div>
				))}
			</div>
			
			<div style={{flexGrow: 1}}/>
		</div>
		<div className={styles["fullscreen-panel"]}>
			<div style={{flexGrow: 1}}/>

			<div className={styles["main-row"]}>
				<div style={{flexGrow: 1}}/>
				
				<div className={styles["main-cell"]}>
					<h1>pinned projects</h1>
				</div>

				<div style={{flexGrow: 2}}/>
			</div>

			<ProjectTiles data={featured_data}/>
		
			<div style={{flexGrow: 1}}/>
		</div>
	</div>
	)
}
