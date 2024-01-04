'use client';

import Image from "next/image";
import { useRef, useState } from "react";
import VideoImage from "./VideoImage";

export default function Gallery({
	style, 
	images
}: {
	style: any, 
	images: string[]
}) {
	let thumbsRef = useRef<HTMLDivElement>(null);
	let [viewed_index, setViewedIndex] = useState(0);
	
	function setViewed(index: number) {
		setViewedIndex(index);
		
		if (thumbsRef.current == null) return;

		let width = thumbsRef.current.clientWidth;
		let left = thumbsRef.current.scrollLeft;

		let target_start = index * 100;
		let target_end = target_start + 105;

		console.log(target_start, target_end, left, width);

		if (target_start < left) {
			thumbsRef.current.scrollLeft = target_start;
		} else if (target_end > left + width) {
			thumbsRef.current.scrollLeft = target_end - width;
		}
	}

	return (
		<div className={style["gallery"]}>
			<div className={style["gallery-big-img"]}>
				<VideoImage src={images[viewed_index]} vid_autostart={true}/>
			</div>
			<div className={style["gallery-thumbs"]} ref={thumbsRef}>
				{images.map((img, index) => (
					<div 
						key={index}
						onClick={() => setViewed(index)}
					>
						<VideoImage src={img}/>
					</div>
				))}
			</div>
		</div>
	);
}