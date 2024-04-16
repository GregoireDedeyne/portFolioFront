import test from "/images/devdev.jpeg";

export function Presentation() {
	return (
		<div
			id="presentation"
			className="w-full bg-theme-white dark:bg-theme-secondary"
		>
			{" "}
			<div className="container mx-auto">
				{" "}
				<div className="flex flex-col items-center text-center gap-2 md:gap-5 px-2.5">
					<div className="flex lg:flex-row lg:items-end flex-col items-center">
						<h1 className="text-4xl mt-3 lg:mt-0 sm:text-4xl md:text-5xl lg:text-6xl font-extrabold dark:text-theme-white text-theme-secondary">
							{" "}
							Bonjour, je suis
							<span className="text-theme-primary block md:inline-block ml-2">
								Grégoire Dedeyne
							</span>
						</h1>
					</div>{" "}
					<p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 font-light dark:text-theme-white text-theme-secondary">
						Un
						<span className="font-bold"> Developer Front-end</span>
					</p>
					<div className="relative mt-8 md:mt-16 lg:mt-20">
						<img
							src={test}
							className="w-[420px] sm:w-[500px] md:w-[550px] lg:w-auto"
						/>
					</div>
					<div className="mt-6 flex items-center justify-center flex-wrap gap-3 lg:gap-5 mb-10">
						<a
							href="/images/CV-Grégoire-Dedeyne-Dev-Web.pdf"
							download={"Gregoire Dedeyne Cv.pdf"}
							target="_blank"
							className="p-5 w-48 bg-theme-primary mt-12 hover:bg-theme-secondary hover:bg-opacity-80 hover:text-theme-primary text-black text-2xl rounded-3xl"
						>
							Mon CV{" "}
						</a>{" "}
					</div>
				</div>{" "}
			</div>{" "}
		</div>
	);
}
