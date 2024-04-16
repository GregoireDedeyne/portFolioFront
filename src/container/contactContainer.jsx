import gregprofil from "/images/gregprofil.jpg";

export function ContactContainer() {
	return (
		<div
			id="contact"
			className="w-full dark:bg-theme-secondary bg-theme-white border-t dark:border-theme-primary border-theme-secondary dark:border-opacity-10 border-opacity-10"
		>
			<div className="container mx-auto w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center">
				{" "}
				<div className="relative w-full whitespace-nowrap text-center">
					<h2 className="opacity-10 text-4xl sm:text-5xl md:text-6xl text-transparent lg:text-7xl font-bold dark:font-outline-2-primary font-outline-2-secondary ">
						{" "}
						Envie de démarrer <br /> un projet ?{" "}
					</h2>
					<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-theme-primary text-theme-secondary">
						{" "}
						Envie de démarrer <br />
						un projet ?{" "}
					</h3>
				</div>
				<div className="w-full flex text-center flex-col items-center gap-3 lg:gap-8 mt-16 p-8 sm:p-10 md:p-16 dark:bg-theme-white bg-theme-secondary dark:bg-opacity-5 bg-opacity-5 rounded-[50px]">
					<div className="aspect-square overflow-hidden p-1.5 md:p-2 rounded-full border md:border-2 dark:border-theme-primary border-theme-secondary max-h-[122px] max-w-[122px]">
						<img
							loading="lazy"
							className="w-20 sm:w-28 md:w-32 lg:w-auto aspect-square"
							src={gregprofil}
						/>{" "}
					</div>
					<h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-theme-primary text-theme-secondary">
						Grégoire Dedeyne{" "}
					</h3>
					<p className="dark:text-theme-white text-theme-secondary text-sm sm:text-lg md:text-xl lg:text-2xl">
						{" "}
						Front-end Developer{" "}
					</p>
					<div className="flex items-center flex-wrap justify-center gap-3">
						{" "}
						<a
							href="/images/CV-Grégoire-Dedeyne-Dev-Web.pdf"
							download={"Gregoire Dedeyne Cv.pdf"}
							target="_blank"
							className="p-5 w-48 bg-theme-primary mt-12 hover:bg-theme-secondary hover:bg-opacity-80 hover:text-theme-primary text-black text-2xl rounded-3xl"
						>
							Mon CV{" "}
						</a>{" "}
					</div>
				</div>
			</div>
		</div>
	);
}
