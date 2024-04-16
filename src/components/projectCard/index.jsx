import { Skills } from "../Techno";

export function ProjectCard({ link, title, technos, imgUrl }) {
	return (
		<div className="bg-cyan-800 w-full p-5 md:p-6 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] grid grid-cols-1 lg:grid-cols-2 gap-5">
			{" "}
			<div className="w-full aspect-[1/0.8] md:aspect-auto h-full overflow-hidden rounded-[35px] sm:rounded-[45px] md:rounded-[55px] max-h-[568px] max-w-[626px]">
				<img
					height="468"
					width="626"
					loading="lazy"
					className="w-full h-full object-cover object-center"
					src={imgUrl}
				/>
			</div>
			<div className="w-full h-full flex flex-col items-start justify-between text-theme-white gap-3">
				{" "}
				<div className="flex flex-col w-full gap-3">
					{" "}
					<div className="w-full flex items-center flex-wrap justify-between gap-3">
						<h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
							{" "}
							{title}{" "}
						</h3>
					</div>{" "}
				</div>
				<div className="flex flex-col items-start gap-3">
					{" "}
					<p className="text-sm sm:text-base md:text-lg">
						{" "}
						J'ai travaillé sur le :{" "}
					</p>
					<div className="flex items-center gap-3 flex-wrap">
						{" "}
						<div className="text-xs sm:text-sm md:text-base font-semibold md:font-bold px-3 py-1.5 md:px-6 md:py-2.5 rounded-full bg-theme-white bg-opacity-20">
							WEBSITE
						</div>
					</div>
					<div className="flex flex-col items-start gap-3">
						<p className="text-sm sm:text-base md:text-lg">
							{" "}
							Technologies utilisées
						</p>
						<div className="flex items-center gap-2.5 md:gap-3 flex-wrap">
							{technos.map((techno) => (
								<Skills
									imgUrl={techno.imgUrl}
									title={techno.title}
								/>
							))}
						</div>
					</div>
				</div>
				<button className="p-5 bg-cyan-800 opacity-80 border-solid border-2 border-white rounded-3xl hover:bg-slate-400">
					<a href={link} className="text-xl">
						{" "}
						Direction {title}{" "}
					</a>
				</button>
			</div>
		</div>
	);
}
