import { useState } from "react";
import { Link } from "react-router-dom";
import DropCard from "./dropCard";
import MobileMenu from "./mobileMenu";

const Header = () => {
	const [isMobileMenu, setIsMobileMenu] = useState(false);

	const openMobileMenu = () => {
		setIsMobileMenu(true);
	};

	return (
		<header>
			<div className="relative bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
						<Logo />
						<div className="-mr-2 -my-2 md:hidden">
							<button
								onClick={openMobileMenu}
								type="button"
								className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								aria-expanded="false">
								<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
						<NavLinks />
						<SignButtons />
					</div>
				</div>

				{isMobileMenu && <MobileMenu setIsMobileMenu={setIsMobileMenu} />}
			</div>
		</header>
	);
};

export default Header;

function Logo() {
	return (
		<div className="flex justify-start lg:w-0 lg:flex-1">
			<Link to="/">
				<img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo" />
			</Link>
		</div>
	);
}

const SignButtons = () => {
	return (
		<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
			<Link to={"/login"} className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
				Sign in
			</Link>
			<a
				href="#"
				className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
				Sign up
			</a>
		</div>
	);
};

const NavLinks = () => {
	return (
		<nav className="hidden md:flex space-x-10">
			<Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
				Home
			</Link>
			<Link to="/questions" className="text-base font-medium text-gray-500 hover:text-gray-900">
				Questions
			</Link>
			<AboutLink />
		</nav>
	);
};

const AboutLink = () => {
	const [isVisible, setIsVisible] = useState(false);

	const makeVisible = () => {
		setIsVisible(true);
	};

	const makeHidden = () => {
		setIsVisible(false);
	};

	return (
		<div className="relative">
			<button
				onMouseEnter={makeVisible}
				onMouseLeave={makeHidden}
				type="button"
				className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				aria-expanded="false">
				<span>About</span>

				<svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
				</svg>
				{isVisible && <DropCard />}
			</button>
		</div>
	);
};
