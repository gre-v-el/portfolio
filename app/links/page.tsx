'use client';

import LinkTile from '@/components/LinkTile';
import styles from './page.module.css'
import { useRef } from 'react';

export default function Contact() {

	let ref = useRef<HTMLDivElement>(null);

	return (
		<div className={styles["main"]}>
			<div style={{flex: 1}}/>

			<h2>Gabriel Myszkier</h2>
			Based in Gdańsk

			<div style={{flex: 1}}/>

			<div className={styles["link-tiles"] + " not-selectable"}>
				<LinkTile 
					styles={styles} 
					name='Email' 
					material="mail" 
					copy="myszkier.gabriel@gmail.com" 
					notification_ref={ref}/>
				<LinkTile 
					styles={styles} 
					name='GitHub' 
					src="github.png" 
					href="https://github.com/gre-v-el"/>
				<LinkTile 
					styles={styles} 
					name='Google Play' 
					src="Google Play.png" 
					href="https://play.google.com/store/apps/developer?id=gremble"/>
				<LinkTile 
					styles={styles} 
					name='Itch.io' 
					src="itch.io.png" 
					href="https://grem-ble.itch.io/"/>
				<LinkTile 
					styles={styles} 
					name='Discord' 
					src="discord.png" 
					copy="@gremble_" 
					notification_ref={ref}/>
			</div>
			<div className={styles["copied-notification"]} ref={ref}>
				Copied to clipboard
				<span className='material-symbols-outlined'>check</span>
			</div>

			<div style={{flex: 1}}/>
		</div>
	);
}