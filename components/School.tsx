import Link from "next/link";

export default function School({
	name,
	degree,
	major,
	time,
	research,
	styles
}: {
	name: string,
	degree?: string,
	major: string,
	time: string,
	research?: [{title: string, href: string}],
	styles: any
}) {
	return (
		<div className={styles["school"]}>
			<div className={styles["headings"]}>
				<div style={{flex: 1}}/>
				<div>
					<h2>{name}</h2>
					{degree && <h3>{degree}</h3>}
					<h3>{major}</h3>
					<h4>{time}</h4>
				</div>
				<div style={{flex: 1}}/>
			</div>
			{research && 
				<>
					{research.map((r, i) => 
						<a className={styles["research"]} href={r.href} target="_blank" key={i}>
							<span className={"material-symbols-outlined " + styles["icon"]}>
								description
							</span>
							<div className={styles["title"]}>
								"{r.title}"
							</div>
						</a>
					)}
				</>
			}
		</div>
	);
}