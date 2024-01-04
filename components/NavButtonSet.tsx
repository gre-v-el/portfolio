import React from "react";
import NavButton from "./NavButton";

export default function NavButtonSet() {
	return (
		<>
			<NavButton href='/' icon='home' text='Home'/>
			<NavButton href='/projects' icon='code_blocks' text='Projects'/>
			<NavButton href='/resume' icon='description' text='Resume'/>
		</>
	);
}