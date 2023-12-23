import React from "react";
import NavButton from "./NavButton";

function NavButtonSet() {
	return (
		<>
			<NavButton href='/' icon='home' text='Home'/>
			<NavButton href='/projects' icon='code_blocks' text='Projects'/>
			<NavButton href='/education' icon='school' text='Education'/>
			<NavButton href='/resume' icon='description' text='Resume'/>
			<NavButton href='/contact' icon='contact_mail' text='Contact'/>
		</>
	);
}

export default NavButtonSet;