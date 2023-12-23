'use client';

import React, { useEffect, useState } from 'react';
import NavButton from './NavButton';
import { usePathname, useRouter } from 'next/navigation';
import NavButtonSet from './NavButtonSet';

const MobileNav: React.FC = () => {
	let [loading, setLoading] = useState(true);
	let [vis, setVis] = useState(false);
	const path = usePathname();
	
	function clickNav() {
		setVis(!vis);
		setLoading(false);

		console.log("vis: " + vis + ", loading: " + loading);
	}

	useEffect(() => {
		setVis(false);
	}, [path]);
	
	const cl = loading ? "" : (vis ? "open" : "closed"); 

	return (
		<>
		<nav id="mobile-nav" className={cl}>
			<div id="mobile-nav-button" onClick={clickNav}>
				<span className="material-symbols-outlined">
					menu
				</span>
			</div>
			<div className="mobile-nav-buttons">
				<NavButtonSet/>
			</div>
		</nav>
		<div className="mobile-nav-padder"></div>
		</>
		);
	};
	
	export default MobileNav;
	