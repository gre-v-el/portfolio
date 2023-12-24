'use client';

import React, { useEffect, useState } from 'react';
import NavButton from './NavButton';
import { usePathname, useRouter } from 'next/navigation';
import NavButtonSet from './NavButtonSet';

const MobileNav: React.FC = () => {
	let [loading, setLoading] = useState(true);
	let [visible, setVisible] = useState(false);
	const path = usePathname();
	
	function clickNav() {
		setVisible(!visible);
		setLoading(false);
	}

	// Close the nav when the path changes
	useEffect(() => {
		setVisible(false);
	}, [path]);
	
	// Don't show the loading animation on load
	const cl = loading ? "" : (visible ? "open" : "closed"); 

	return (
		<>
			<nav id="mobile-nav" className={cl}>
				<div id="mobile-hamburger" onClick={clickNav}>
					<div id="hamburger-icon"><div/></div>
				</div>
				<div id="mobile-nav-buttons">
					<NavButtonSet/>
				</div>
			</nav>
			<div className="mobile-nav-padder"></div>
		</>
		);
	};
	
	export default MobileNav;
	