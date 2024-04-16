import { ProjectCard } from "../components/projectCard";
import { data } from "../../data.json";
export function ProjectsContainer() {
	const projets = data.projets;
	return (
		<div
			id="projets"
			className="w-full dark:bg-theme-secondary bg-theme-white border-t border-theme-primary border-opacity-10"
		>
			{" "}
			<div className="container mx-auto w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center">
				{" "}
				<div className="relative w-full whitespace-nowrap text-center">
					{" "}
					<h2 className="opacity-10 text-4xl sm:text-5xl md:text-6xl text-transparent lg:text-7xl font-bold dark:font-outline-2-primary font-outline-2-secondary">
						Mes projets
					</h2>
					<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-theme-primary text-theme-secondary">
						Mes projets
					</h3>
				</div>
				<div className="w-full flex flex-col items-start gap-4 lg:gap-6 mt-16">
					{projets.map((projet) => (
						<ProjectCard
							imgUrl={projet.imgUrl}
							title={projet.title}
							technos={projet.technos}
							link={projet.link}
						/>
					))}
				</div>
				<a
					href="https://github.com/GregoireDedeyne"
					target="_blank"
					className="p-5 bg-theme-primary mt-12 hover:bg-theme-secondary hover:bg-opacity-80 hover:text-theme-primary text-black rounded-3xl"
				>
					<span className="text-xl"> Voir sur gitHub </span>
				</a>
			</div>
		</div>
	);
}
