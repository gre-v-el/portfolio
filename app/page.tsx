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
		<div id="tile-container">
			<TechTile text='Rust'/>
			<TechTile text='Java'/>
			<TechTile text='javascript'/>
			<TechTile text='React'/>
			<TechTile text='Next.js'/>
			<TechTile text='Godot'/>
			<TechTile text='Flutter'/>
			<TechTile text='Flame'/>
			<TechTile text='itch.io'/>
			<TechTile text='Google Play'/>
			<TechTile text='macroquad'/>
			<TechTile text='Wgpu'/>
			<TechTile text='eframe'/>
			<TechTile text='JavaFx'/>
			<TechTile text='Three.js'/>
		</div>
		<div style={{flexGrow: 1}}/>

	</>
	)
}
