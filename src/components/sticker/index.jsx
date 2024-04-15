import figma from "../../assets/logo-figma.png";

export function Sticker() {
	return (
		<div className="py-1.5 px-4 lg:px-5 xl:px-6 dark:bg-theme-white bg-theme-secondary flex items-center gap-2 md:gap-4 text-base sm:text-lg md:text-xl lg:text-2xl font-bold rounded-full">
			<img className="w-8 md:w-10" src={figma} />
			<p> Jouer de la musique </p>
		</div>
	);
}
