import { Header } from "../components/header";
import { AboutMeContainer } from "../container/aboutMeContainer";
import { ContactContainer } from "../container/contactContainer";
import { FormationContainer } from "../container/formationContainer";
import { ProjectsContainer } from "../container/projectsContainer";
import { SkillsContainer } from "../container/SkillsContainer";
import { SocialMediaContainer } from "../container/SocialMedia";

export function Home() {
	return (
		<>
			<div className=" bg-slate-900">
				<Header />
			</div>
			<AboutMeContainer />
			<FormationContainer />
			<SkillsContainer />
			<ProjectsContainer />
			<ContactContainer />
			<SocialMediaContainer />
		</>
	);
}
