import Link from 'next/link';
import './page.css'
import TechTile from '@/components/TechTile';

export default function Home() {
	return (
	<>
		<div style={{flexGrow: 1}}/>
		<div id="main-row">
			<div style={{flexGrow: 1}}/>
			<div id="main-cell">
				<h1>Gabriel Myszkier</h1>
				<h2>software developer</h2>
			</div>
			<div style={{flexGrow: 2}}/>
		</div>
		<div style={{flexGrow: 1}}/>
		<div className="tile-container">
			<div className="category-tile">
				<TechTile text='Rust'/>
				<TechTile text='macroquad'/>
				<TechTile text='eframe'/>
				<TechTile text='Wgpu'/>
			</div>
			<div className="category-tile">
				<TechTile text='Java'/>
				<TechTile text='JavaFx'/>
			</div>
			<div className="category-tile">
				<TechTile text='javascript'/>
				<TechTile text='Next.js'/>
				<TechTile text='React'/>
				<TechTile text='Three.js'/>
			</div>
			<div className="category-tile">
				<TechTile text='Godot'/>
				<TechTile text='Flutter'/>
				<TechTile text='Flame'/>
				<TechTile text='itch.io'/>
				<TechTile text='Google Play'/>
			</div>
		</div>
		
		<div style={{flexGrow: 1}}/>

	</>
	)
}
