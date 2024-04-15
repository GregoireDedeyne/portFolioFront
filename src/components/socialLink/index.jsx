import figma from "../../assets/logo-figma.png";

export function SocialLink() {
	return (
		<a
			href=""
			className="flex items-center gap-2 sm:gap-3 md:gap-4 overflow-hidden rounded-full sm:pr-6 md:pr-8 lg:pr-10 py-2 px-2 sm:pl-3 dark:bg-theme-white bg-theme-secondary "
		>
			<div>
				{" "}
				<img
					loading="lazy"
					src={figma}
					className="w-12 sm:w-14 md:w-16 lg:w-20 object-contain max-h-[92px] max-w-[92px]"
				/>{" "}
			</div>
			<h4 className="text-base hidden sm:block sm:text-2xl md:text-3xl lg:text-4xl font-bold">
				LinkKink{" "}
			</h4>
		</a>
	);
}
