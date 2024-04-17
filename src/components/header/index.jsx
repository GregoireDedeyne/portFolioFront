import gregprofil from "/images/gregprofil.jpg";
import { useState } from "react";

export function Header() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		if (!isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	return (
		<header className="w-full dark:bg-theme-secondary bg-theme-white border-2 dark:border-theme-primary border-theme-secondary dark:border-opacity-10 border-opacity-10 text-black dark:text-white">
			<div className="navbar dark:bg-theme-secondary bg-theme-white container mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a href="#about-me">Présentation</a>
							</li>
							<li>
								<a href="#formations">Parcours</a>
							</li>
							<li>
								<a href="#projets">Projets</a>
							</li>
						</ul>
					</div>
					<a className="btn btn-ghost text-xl">Grégoire Dedeyne</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a href="#about-me">Présentation</a>
						</li>
						<li>
							<a href="#formations">Parcours</a>
						</li>
						<li>
							<a href="#projets">Projets</a>
						</li>
					</ul>
				</div>

				<div className="avatar navbar-end">
					<label
						className=" flex cursor-pointer gap-2 mr-5 "
						onClick={toggleDarkMode}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="hidden lg:block"
						>
							<circle cx="12" cy="12" r="5" />
							<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
						</svg>
						<input
							type="checkbox"
							value="synthwave"
							className="toggle theme-controller"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="hidden lg:block"
						>
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
						</svg>
					</label>
					<div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						<img src={gregprofil} />
					</div>
				</div>
			</div>
		</header>
	);
}
