import gregprofil from "../../public/assets/gregprofil.jpg";

export function Header() {
	return (
		<div className="w-full dark:bg-theme-secondary bg-theme-white border-t dark:border-theme-primary border-theme-secondary dark:border-opacity-10 border-opacity-10">
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
					<div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						<img src={gregprofil} />
					</div>
				</div>
			</div>
		</div>
	);
}
