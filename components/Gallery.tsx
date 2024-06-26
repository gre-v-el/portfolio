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
		if(index < 0) index = images.length - 1;
		if(index >= images.length) index = 0;
		setViewedIndex(index);

		if (thumbsRef.current == null) return;

		let width = thumbsRef.current.clientWidth;
		let left = thumbsRef.current.scrollLeft;

		let target_start = index * 100;
		let target_end = target_start + 105;

		if (target_start < left) {
			thumbsRef.current.scrollLeft = target_start;
		} else if (target_end > left + width) {
			thumbsRef.current.scrollLeft = target_end - width;
		}
	}

	function showModal() {
		let modal = document.getElementById(style["gallery-modal"]) as HTMLDivElement;
		modal.style.display = "block";
		setTimeout(() => modal.style.opacity = "1", 10);
	}

	function hideModal() {
		let modal = document.getElementById(style["gallery-modal"]) as HTMLDivElement;
		modal.style.opacity = "0";
		setTimeout(() => modal.style.display = "none", 300);
	}

	return (
		<div className={style["gallery"]}>
			<div className={style["gallery-big-img"]}>
				<VideoImage src={images[viewed_index]} vid_autostart={true}/>

				{images.length > 1 &&
					<div className={style["arrows"] + " not-selectable"}>
						<span 
							className={style["arrow"] + " material-symbols-outlined"} 
							onClick={() => setViewed(viewed_index - 1)}>
							arrow_back_ios
						</span>
						
						<div style={{flex: 1}} onClick={showModal}/>
						
						<span 
							className={style["arrow"] + " material-symbols-outlined"} 
							onClick={() => setViewed(viewed_index + 1)}>
							arrow_forward_ios
						</span>
					</div>
				}
			</div>
			{images.length > 1 &&
				<div className={style["gallery-thumbs"]} ref={thumbsRef}>
					{images.map((img, index) => (
						<div 
							className={index == viewed_index ? style["selected"] : null}
							key={index}
							onClick={() => setViewed(index)}
						>
							<VideoImage src={img}/>
						</div>
					))}
				</div>
			}
			
			<div id={style["gallery-modal"]} onClick={hideModal}>
				<div className={style["gallery-modal-content"]}>
					<VideoImage src={images[viewed_index]} vid_autostart={true}/>
					
					<span 
						className="material-symbols-outlined"
						onClick={hideModal}>
						close
					</span>
				</div>
				
			</div>
		</div>
	);
}