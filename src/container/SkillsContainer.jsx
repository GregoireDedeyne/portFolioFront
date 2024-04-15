import { Skills } from "../components/Techno";

export function SkillsContainer() {
	return (
		<div className="w-full dark:bg-theme-secondary bg-theme-white border-t dark:border-theme-primary border-theme-secondary dark:border-opacity-10 border-opacity-10">
			{" "}
			<div className="container mx-auto w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center gap-14">
				{" "}
				<div className="relative w-full whitespace-nowrap text-center">
					{" "}
					<h2 className="opacity-10 text-4xl sm:text-5xl md:text-6xl text-transparent lg:text-7xl font-bold dark:font-outline-2-primary font-outline-2-secondary">
						{" "}
						Skills
					</h2>
					<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-theme-primary text-theme-secondary">
						{" "}
						Skills
					</h3>
				</div>
				<div className="w-full flex flex-col items-center gap-3 lg:gap-10 mt-8">
					<div className="relative w-full whitespace-nowrap flex flex-col items-center text-center">
						<h2 className="opacity-10 text-3xl sm:text-4xl md:text-5xl text-transparent lg:text-6xl font-bold dark:font-outline-2-primary font-outline-2-secondary">
							{" "}
							Outils de design
						</h2>
						<h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-theme-primary text-theme-secondary">
							{" "}
							Outils de design
						</h3>
					</div>
				</div>
				<div className="w-full flex items-center justify-center gap-2 sm:gap-3 md:gap-5 flex-wrap">
					{" "}
					<Skills />
				</div>
				<div className="w-full flex flex-col items-center gap-3 lg:gap-10 mt-8">
					<div className="relative w-full whitespace-nowrap flex flex-col items-center text-center">
						<h2 className="opacity-10 text-3xl sm:text-4xl md:text-5xl text-transparent lg:text-6xl font-bold dark:font-outline-2-primary font-outline-2-secondary">
							{" "}
							Technologies
						</h2>
						<h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-theme-primary text-theme-secondary">
							{" "}
							Technologies{" "}
						</h3>
					</div>
				</div>
				<div className="w-full flex items-center justify-center gap-2 sm:gap-3 md:gap-5 flex-wrap">
					{" "}
					<Skills />
					<Skills />
					<Skills />
					<Skills />
					<Skills />
					<Skills />
				</div>
				<div className="w-full flex flex-col items-center gap-3 lg:gap-10 mt-8">
					<div className="relative w-full whitespace-nowrap flex flex-col items-center text-center">
						<h2 className="opacity-10 text-3xl sm:text-4xl md:text-5xl text-transparent lg:text-6xl font-bold dark:font-outline-2-primary font-outline-2-secondary">
							{" "}
							Outils de Developpement
						</h2>
						<h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-theme-primary text-theme-secondary">
							{" "}
							Outils de Developpement
						</h3>
					</div>
					<div className="w-full flex items-center justify-center gap-2 sm:gap-3 md:gap-5 flex-wrap">
						{" "}
						<Skills />
						<Skills />
						<Skills />
						<Skills />
						<Skills />
						<Skills />
					</div>
				</div>
			</div>
		</div>
	);
}
