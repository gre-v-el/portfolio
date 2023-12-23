'use client';

import React, { useState } from 'react';
import NavButton from './NavButton';

const MobileNav: React.FC = () => {
	let [vis, setVis] = useState(false);

	return (
		<>
			<nav id="mobile-nav" className={vis ? "open" : ""}>
				<div id="mobile-nav-button" onClick={() => setVis(!vis)}>
					<span className="material-symbols-outlined">
						menu
					</span>
				</div>
				<div className="mobile-nav-buttons">
					<NavButton href='/' icon='home' text='Home'/>
					<NavButton href='/projects' icon='code_blocks' text='Projects'/>
					<NavButton href='/education' icon='school' text='Education'/>
					<NavButton href='/resume' icon='description' text='Resume'/>
					<NavButton href='/contact' icon='contact_mail' text='Contact'/>
				</div>
			</nav>
			<div className="mobile-nav-padder"></div>
		</>
	);
};

export default MobileNav;
