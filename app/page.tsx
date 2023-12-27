import styles from './page.module.css'
import TechTile from '@/components/TechTile';

export default function Home() {
	return (
	<div id={styles["main"]}>
		<div style={{flexGrow: 1}}/>

		<div id="main-row">
			<div style={{flexGrow: 1}}/>
			
			<div id={styles["main-cell"]}>
				<h1 className={styles['reveal']}>Gabriel Myszkier</h1>
				<h2 className={styles['reveal']}>software developer</h2>
			</div>

			<div style={{flexGrow: 2}}/>
		</div>

		<div style={{flexGrow: 1}}/>

		<div className={styles["tile-container"]}>
			<div className={styles["category-tile"]}>
				<TechTile cls={styles['tile']} text='Rust'/>
				<TechTile cls={styles['tile']} text='macroquad'/>
				<TechTile cls={styles['tile']} text='egui'/>
				<TechTile cls={styles['tile']} text='Wgpu'/>
			</div>
			<div className={styles["category-tile"]}>
				<TechTile cls={styles['tile']} text='Java'/>
				<TechTile cls={styles['tile']} text='JavaFx'/>
			</div>
			<div className={styles["category-tile"]}>
				<TechTile cls={styles['tile']} text='javascript'/>
				<TechTile cls={styles['tile']} text='typescript'/>
				<TechTile cls={styles['tile']} text='Next.js'/>
				<TechTile cls={styles['tile']} text='React'/>
				<TechTile cls={styles['tile']} text='Three.js'/>
			</div>
			<div className={styles["category-tile"]}>
				<TechTile cls={styles['tile']} text='Godot'/>
				<TechTile cls={styles['tile']} text='Flutter'/>
				<TechTile cls={styles['tile']} text='Flame'/>
				<TechTile cls={styles['tile']} text='itch.io'/>
				<TechTile cls={styles['tile']} text='Google Play'/>
			</div>
		</div>
		
		<div style={{flexGrow: 1}}/>
	</div>
	)
}
