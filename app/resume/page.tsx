import Section from '@/components/Section';
import styles from './page.module.css';
import School from '@/components/School';

export default function Resume() {
	return (
		<>
			<div className={styles["download-container"]}>
				<div className={styles["download-tile"]}>
					<span className='material-symbols-outlined'>
						download
					</span>
					Download pdf (En)
				</div>
				<div className={styles["download-tile"]}>
					<span className='material-symbols-outlined'>
						download
					</span>
					Download pdf (PL)
				</div>
			</div>

			<div className={styles["container"]}>
				<h1>Hi!</h1>
				<article>
					<p>
						I'm Gabriel and I programming is my passion. I started coding as a hobby when I was 12 years old and I have never stopped since then. I particularly enjoy working with low-level languages and focusing on performance. I understand that a language is only a tool, so not all my projects are written in low level languages. When a need arises, I am able to learn a new language and use it to solve the problem at hand.
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
							title: "Comparing bins and optimizations of the boids simulation to the naïve approach.",
							src: ""
						}
					]}
				/>
			</div>


		</>
	);
}