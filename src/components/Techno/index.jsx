export function Skills({ imgUrl, title }) {
	return (
		<div
			width="46"
			loading="lazy"
			height="46"
			className="bg-theme-secondary dark:bg-theme-white w-fit h-14 flex justify-between rounded-3xl p-2"
		>
			<img
				className="w-7 sm:w-10 lg:w-11 xl:w-auto object-contain hidden dark:block"
				src={imgUrl}
			/>
			<p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-black pr-1">
				{" "}
				{title}{" "}
			</p>
		</div>
	);
}