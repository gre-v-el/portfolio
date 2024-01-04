'use client';

import Image from "next/image";
import { useState } from "react";
import VideoImage from "./VideoImage";

export default function Gallery({
	style, 
	images
}: {
	style: any, 
	images: string[]
}) {
	let [viewed_index, setViewedIndex] = useState(0);


	return (
		<div className={style["gallery"]}>
			<div className={style["gallery-big-img"]}>
				<VideoImage src={images[viewed_index]} vid_autostart={true}/>
			</div>
			<div className={style["gallery-thumbs"]}>
				{images.map((img, index) => (
					<div 
						key={index}
						onClick={() => setViewedIndex(index)}
					>
						<VideoImage src={img}/>
					</div>
				))}
			</div>
		</div>
	);
}