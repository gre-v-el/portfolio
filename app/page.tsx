import styles from './page.module.css'
import TechTile from '@/components/TechTile';
import data from '@/data/projects.json';

export default function Home() {
	let tags = data.tags;
	let tag_groups = [
		tags.slice(0, 4),
		tags.slice(4, 6),
		tags.slice(6, 11),
		tags.slice(11, 16),
	];
	
	return (
	<div id={styles["main"]}>
		<div style={{flexGrow: 1}}/>

		<div id={styles["main-row"]}>
			<div style={{flexGrow: 1}}/>
			
			<div id={styles["main-cell"]}>
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
	)
}
