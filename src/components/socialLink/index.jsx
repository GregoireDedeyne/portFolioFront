import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

export function SocialLink({ link, title, imgUrl, ci }) {
	let IconComponent = "null";

	// Sélectionnez dynamiquement le composant d'icône en fonction de la valeur de `{ci}`
	switch (ci) {
		case "CiLinkedin":
			IconComponent = CiLinkedin;
			break;
		case "SiGmail":
			IconComponent = SiGmail;
			break;
		// Ajoutez d'autres cas pour chaque icône que vous voulez gérer
		default:
			break;
	}
	return (
		<a
			href={link}
			className="flex items-center h-16 gap-2 sm:gap-3 md:gap-4 overflow-hidden rounded-full sm:pr-6 md:pr-8 lg:pr-10 py-2 px-2 sm:pl-3 dark:bg-theme-white bg-theme-secondary "
		>
			<div>
				{" "}
				<img
					loading="lazy"
					src={imgUrl}
					className="w-12 sm:w-14 md:w-16 lg:w-20 hidden dark:block object-contain max-h-[60px] max-w-[60px]"
				/>{" "}
				<IconComponent className="min-h-[60px] min-w-[60px] dark:hidden" />
			</div>
			<h4 className="text-base text-white dark:text-black hidden sm:block sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
				{title}{" "}
			</h4>
		</a>
	);
}
