import obandito from "../../assets/obandito.png";
import { Skills } from "../Techno";

export function ProjectCard() {
	return (
		<div className="bg-cyan-400 w-full p-5 md:p-6 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] grid grid-cols-1 lg:grid-cols-2 gap-5">
			{" "}
			<div className="w-full aspect-[1/0.8] md:aspect-auto h-full overflow-hidden rounded-[35px] sm:rounded-[45px] md:rounded-[55px] max-h-[468px] max-w-[626px]">
				<img
					height="468"
					width="626"
					loading="lazy"
					className="w-full h-full object-cover object-center"
					src={obandito}
				/>
			</div>
			<div className="w-full h-full flex flex-col items-start justify-between text-theme-white gap-3">
				{" "}
				<div className="flex flex-col w-full gap-3">
					{" "}
					<div className="w-full flex items-center flex-wrap justify-between gap-3">
						<h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
							{" "}
							O'bandito{" "}
						</h3>
					</div>{" "}
				</div>
				<div className="flex flex-col items-start gap-3">
					{" "}
					<p className="text-sm sm:text-base md:text-lg">
						{" "}
						J'ai travaillé sur :{" "}
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
							{" "}
							<Skills />
							<Skills />
							<Skills />
						</div>
					</div>
				</div>
				<button className="p-5 bg-cyan-400 opacity-80 border-solid border-2 border-white rounded-3xl hover:bg-slate-400">
					<span className="text-xl"> Direction O'bandito </span>
				</button>
			</div>
		</div>
	);
}
