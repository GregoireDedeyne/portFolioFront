import { SocialLink } from "../components/socialLink";
import test from "/images/test.jpg";
import { data } from "../../data.json";

export function SocialMediaContainer() {
	const socials = data.socials;

	return (
		<div className="w-full dark:bg-theme-secondary bg-theme-white border-t dark:border-theme-primary border-theme-secondary dark:border-opacity-10 border-opacity-10">
			<div className="container mx-auto w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center">
				{" "}
				<div className="relative w-full whitespace-nowrap text-center">
					<h2 className="opacity-10 text-4xl sm:text-5xl md:text-6xl text-transparent lg:text-7xl font-bold dark:font-outline-2-primary font-outline-2-secondary ">
						{" "}
						Retrouvé moi sur{" "}
					</h2>
					<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-theme-primary text-theme-secondary">
						{" "}
						Retrouvé moi sur{" "}
					</h3>
				</div>
				<div className="w-full flex text-center flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-8 mt-6 sm:mt-10 md:mt-16 p-8">
					{" "}
					{socials.map((social) => (
						<SocialLink
							link={social.link}
							title={social.title}
							imgUrl={social.imgUrl}
							ci={social.Ci}
						/>
					))}
				</div>
				<img
					src={test}
					loading="lazy"
					className="lg:w-auto md:w-[320px] sm:w-[280px] w-[60%]"
				/>
			</div>
		</div>
	);
}
