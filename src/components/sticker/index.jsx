export function Sticker({ imgUrl, title, imgUrlBlack }) {
	return (
		<div className="py-1.5 px-4 lg:px-5 xl:px-6 dark:bg-theme-white bg-theme-secondary flex items-center gap-2 md:gap-4 text-base sm:text-lg md:text-xl lg:text-2xl font-bold rounded-full">
			<img className="w-8 md:w-10 hidden dark:block" src={imgUrl} />
			<img className="w-8 md:w-10 dark:hidden block" src={imgUrlBlack} />
			<p className="mb-1 text-white dark:text-black"> {title} </p>
		</div>
	);
}
