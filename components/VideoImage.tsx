import basePath from "@/lib/basePath";
import Image from "next/image";

export default function VideoImage({
	className,
	src,
	vid_autostart = false,
}: {
	className?: string
	src: string,
	vid_autostart?: boolean
}) {
	return src.endsWith(".mp4") ? 
	(
		vid_autostart ?
			<video className={className} src={basePath + "/projects/"+src} autoPlay loop muted controls/> :
			<video className={className} src={basePath + "/projects/"+src}/>
	) : (
		<img className={className} src={basePath + "/projects/"+src} alt="screenshot"/>
	);
}