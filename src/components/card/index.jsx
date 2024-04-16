import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export function Card({ date, diplome, type, name, diplomeName, localisation }) {
	return (
		<div className="w-full h-full dark:bg-theme-white bg-theme-secondary dark:bg-opacity-70 bg-opacity-70 flex flex-col items-start justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 rounded-[30px] md:rounded-[40px] z-20 backdrop-blur-lg dark:hover:bg-opacity-100 hover:bg-opacity-100 ease-out duration-300 transition-all group">
			{" "}
			<div className="w-full flex flex-wrap items-center gap-2 lg:gap-6 justify-between">
				{" "}
				<div className="flex items-center dark:bg-theme-secondary bg-theme-white text-sm sm:text-base md:text-base lg:text-xl gap-2 md:gap-3 dark:text-theme-primary text-theme-secondary font-bold lg:px-5 md:px-4 px-3 py-2 rounded-full">
					{" "}
					<p> {date} </p>
				</div>{" "}
				<div className="flex items-center dark:bg-theme-white bg-theme-secondary group-hover:bg-theme-primary group-hover:bg-opacity-20 text-sm sm:text-base md:text-base lg:text-xl gap-2 md:gap-3 dark:text-theme-secondary text-theme-white font-semibold lg:px-5 md:px-4 px-3 py-2 rounded-full">
					{" "}
					<p> {type} </p>
				</div>
			</div>
			<div className="w-full flex flex-col items-start gap-1.5 md:gap-2.5">
				{" "}
				<div className="flex items-center gap-1.5 md:gap-2.5 flex-wrap">
					<div className="dark:bg-theme-white bg-theme-secondary dark:group-hover:bg-theme-secondary group-hover:bg-theme-white dark:group-hover:bg-opacity-10 group-hover:bg-opacity-10 text-sm md:text-base lg:text-xl dark:text-theme-secondary text-theme-white font-semibold py-2 lg:px-5 px-4 rounded-full">
						{diplome}{" "}
					</div>{" "}
					<div className="dark:bg-theme-white bg-theme-secondary dark:group-hover:bg-theme-secondary group-hover:bg-theme-white dark:group-hover:bg-opacity-10 group-hover:bg-opacity-10 text-sm md:text-base lg:text-xl dark:text-theme-secondary text-theme-white font-semibold py-2 lg:px-5 px-4 rounded-full">
						{diplomeName}{" "}
					</div>
				</div>
				<h3 className="text-xl md:text-2xl lg:text-3xl dark:text-theme-secondary text-theme-white font-bold my-1.5 lg:my-2">
					{" "}
					{name}{" "}
				</h3>
				<div className="flex items-center gap-2 md:gap-4">
					<div className="bg-theme-white  group-hover:bg-theme-primary group-hover:bg-opacity-10 group-hover:border-theme-secondary group-hover:border-opacity-10 rounded-full p-1.5 md:p-2.5 aspect-square border border-theme-primary border-opacity-20 ">
						{" "}
						<FontAwesomeIcon
							icon={faMapMarkerAlt}
							className="mx-2"
						/>{" "}
					</div>
					<p className="text-sm md:text-base lg:text-xl dark:text-theme-secondary text-theme-white">
						{" "}
						{localisation}{" "}
					</p>
				</div>
			</div>
		</div>
	);
}
