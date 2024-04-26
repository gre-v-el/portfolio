'use client';

import Section from '@/components/Section';
import styles from './page.module.css';
import School from '@/components/School';
import Link from 'next/link';

export default function Resume() {
	return (
		<>
			<div className={styles["download-container"]}>
				<Link className={styles["download-tile"]} target="_blank" href="/documents/Gabriel Myszkier Resume.pdf">
					<span className='material-symbols-outlined'>
						download
					</span>
					Download pdf (EN)
				</Link>
				<Link className={styles["download-tile"]} target="_blank" href="/documents/Gabriel Myszkier CV.pdf">
					<span className='material-symbols-outlined'>
						download
					</span>
					Download pdf (PL)
				</Link>
			</div>

			<div className={styles["container"]}>
				<article>
					<p>
						I'm Gabriel and programming is my passion. I started coding as a hobby when I was 12 years old and I have never stopped since then. I particularly enjoy working with low-level languages and focusing on performance. I understand that a language is only a tool, so not all my projects are written in low level languages. When a need arises, I am able to learn a new technology and use it to solve the problem at hand.
					</p>
				</article>
				<Section title='Education'/>
				<School
					name='Gdańsk University of Technology'
					degree='Bachelor of Science'
					major='Computer Science'
					time='2023 - Now'
					styles={styles}
				/>
				<School
					name='International Baccalaureate Diploma Programme'
					major='Computer Science, Mathematics, English'
					time='2021 - 2023'
					styles={styles}
					research={[
						{
							title: "Comparing bins and quadtree optimizations of the boids simulation to the naïve approach.",
							href: "https://www.researchgate.net/publication/374977849_Comparing_bins_and_quadtree_optimizations_of_the_boids_simulation_to_the_naive_approach"
						}
					]}
				/>
			</div>


		</>
	);
}