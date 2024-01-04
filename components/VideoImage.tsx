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
			<video className={className} src={"/projects/"+src} autoPlay loop muted controls/> :
			<video className={className} src={"/projects/"+src}/>
	) : (
		<img className={className} src={"/projects/"+src} alt="screenshot"/>
	);
}