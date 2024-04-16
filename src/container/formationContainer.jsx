import { Card } from "../components/card";
import { data } from "../../data.json";
export function FormationContainer() {
	const formation = data.formation;

	return (
		<div
			id="formations"
			className="w-full dark:bg-theme-secondary bg-theme-white border-t dark:border-theme-primary border-theme-secondary dark:border-opacity-10 border-opacity-10"
		>
			<div className="container mx-auto w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center">
				{" "}
				<div className="relative w-full whitespace-nowrap text-center">
					<h2 className="opacity-10 text-4xl sm:text-5xl md:text-6xl text-transparent lg:text-7xl font-bold dark:font-outline-2-primary font-outline-2-secondary ">
						{" "}
						FORMATIONS{" "}
					</h2>
					<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-theme-primary text-theme-secondary">
						{" "}
						FORMATIONS{" "}
					</h3>
				</div>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mt-16">
					{formation.map((item, index) => (
						<Card
							key={index}
							date={item.date}
							diplome={item.diplome}
							type={item.type}
							name={item.name}
							diplomeName={item.diplomeName}
							localisation={item.localisation}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
