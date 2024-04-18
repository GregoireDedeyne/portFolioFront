import gregprofil from "/images/profil.JPG?url";
import { Sticker } from "../components/sticker";
import { data } from "../../data.json";

export function AboutMeContainer() {
	const stickers = data.stickers;
	return (
		<div
			id="about-me"
			className="w-full dark:bg-theme-secondary bg-theme-white border-t dark:border-theme-primary border-theme-secondary dark:border-opacity-10 border-opacity-10"
		>
			<div className="container mx-auto w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center">
				{" "}
				<div className="relative w-full whitespace-nowrap text-center">
					<h2 className="opacity-10 text-4xl sm:text-5xl md:text-6xl text-transparent lg:text-7xl font-bold dark:font-outline-2-primary font-outline-2-secondary ">
						{" "}
						A propos de moi{" "}
					</h2>
					<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-theme-primary text-theme-secondary">
						{" "}
						A propos de moi{" "}
					</h3>
				</div>
				<div className="w-full flex flex-col items-center gap-3 lg:gap-8 mt-16">
					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
						<div className="w-full flex flex-col items-start gap-7">
							{" "}
							<div className="flex items-center gap-2 md:gap-5">
								{" "}
								<div className="border dark:border-theme-primary border-theme-secondary rounded-full p-1 overflow-hidden max-h-[84px] max-w-[84px]">
									<img
										loading="lazy"
										className="objet-cover"
										src={gregprofil}
									/>
								</div>{" "}
								<div className="relative w-full whitespace-nowrap flex flex-col items-center text-left">
									{" "}
									<h2 className="opacity-10 text-4xl sm:text-5xl md:text-6xl text-transparent lg:text-7xl font-bold dark:font-outline-2-primary font-outline-2-secondary ">
										{" "}
										HOBBIES{" "}
									</h2>
									<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-theme-primary text-theme-secondary">
										{" "}
										HOBBIES{" "}
									</h3>
								</div>
							</div>{" "}
							<div className="w-full flex items-center gap-2 md:gap-4 flex-wrap">
								{stickers.map((sticker) => (
									<Sticker
										imgUrl={sticker.imgUrl}
										title={sticker.title}
										imgUrlBlack={sticker.imgUrlBlack}
									/>
								))}
							</div>
						</div>
						<div className="w-full grid grid-cols-2 gap-3 lg:gap-5">
							{" "}
							<div className="w-full flex flex-col items-center justify-center text-center dark:bg-theme-white bg-theme-secondary dark:bg-opacity-5 bg-opacity-5 rounded-[50px] sm:rounded-[80px] md:rounded-[60px] lg:rounded-[75px] xl:rounded-[100px] p-6 sm:p-8 md:p-10 xl:p-12 aspect-square">
								<h3 className="bg-gradient-to-b text-transparent dark:from-theme-primary from-theme-secondary dark:to-theme-secondary to-theme-white bg-clip-text font-bold text-4xl sm:text-6xl md:text-[2.7rem] lg:text-6xl xl:text-7xl">
									6+
								</h3>
								<h3 className="dark:text-theme-white text-theme-secondary font-bold text-xl sm:text-3xl md:text-xl lg:text-3xl xl:text-4xl leading-6 sm:leading-8">
									{" "}
									mois d'expérience{" "}
								</h3>
							</div>{" "}
							<div className="w-full flex flex-col items-center justify-center text-center dark:bg-theme-white bg-theme-secondary dark:bg-opacity-5 bg-opacity-5 rounded-[50px] sm:rounded-[80px] md:rounded-[60px] lg:rounded-[75px] xl:rounded-[100px] p-6 sm:p-8 md:p-10 xl:p-12 aspect-square">
								<h3 className="bg-gradient-to-b text-transparent dark:from-theme-primary from-theme-secondary dark:to-theme-secondary to-theme-white bg-clip-text font-bold text-4xl sm:text-6xl md:text-[2.7rem] lg:text-6xl xl:text-7xl">
									4
								</h3>
								<h3 className="dark:text-theme-white text-theme-secondary font-bold text-xl sm:text-3xl md:text-xl lg:text-3xl xl:text-4xl leading-6 sm:leading-8">
									{" "}
									Projets réalisés{" "}
								</h3>
							</div>{" "}
						</div>
					</div>{" "}
					<div className="p-6 sm:p-8 lg:p-10 dark:bg-theme-white bg-theme-secondary dark:bg-opacity-5 bg-opacity-5 dark:text-theme-white text-theme-secondary text-sm sm:text-base lg:text-lg rounded-[40px] md:rounded-[40px] lg:rounded-[50px] leading-6 sm:leading-7 lg:leading-9">
						Résidant dans le Nord, ancien coordinateur de formation
						en reconversion professionnelle, je suis diplômé de chez
						O'clock et passionné par le métier de développeur web.
						Ne disposant pas encore d'une expérience professionnelle
						dans le domaine, je suis particulièrement déterminé à
						enrichir les savoirs et les compétences nécessaires à la
						profession. En effet, le développement frontend et la
						conception d’une application constituent des tâches pour
						lesquelles j’éprouve un vif intérêt consolidé par la
						formation O’clock. Je suis prêt et motivé à m’investir
						dans cette voie et maîtriser les technologies telles que
						ReactJS, Redux, TailwindCSS, SCSS, et bien d'autres
						encore.
					</div>
				</div>
			</div>
		</div>
	);
}
