interface Tag {
	name: string;
	route?: string;
	color: string;
}

interface Project {
	route: string;
	name: string;
	date: string;
	short_description: string;
	long_description: string;
	tags: string[];
	repository?: string;
	live_link?: string;
	release_link?: string;
	video_link?: string;
	thumbnail: string;
	images: string[];
	videos?: string[];
}

interface ProjectsData {
	tags: Tag[];
	projects: Project[];
}