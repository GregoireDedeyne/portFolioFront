export function Footer() {
	return (
		<div className="w-full dark:bg-theme-secondary bg-theme-white border-t dark:border-theme-primary border-theme-secondary dark:border-opacity-10 border-opacity-10">
			{" "}
			<div className="relative container mx-auto w-full py-[20px] sm:py-[40px] md:py-[60px] flex flex-col items-center text-theme-secondary">
				<div className="w-full dark:bg-theme-primary bg-theme-secondary p-6 md:p-3 md:pr-10 rounded-3xl md:rounded-full flex md:flex-row flex-col items-center text-center justify-between gap-2 sm:gap-4 md:gap-6 flex-wrap">
					<a href="#" className="text-xl ml-5">
						{" "}
						Gregoire Dedeyne{" "}
					</a>

					<div className="text-sm sm:text-base md:text-xl dark:text-theme-secondary text-theme-white">
						Mon Port-Folio
					</div>
				</div>{" "}
			</div>
		</div>
	);
}
