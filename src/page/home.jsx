import { Header } from "../components/header";
import { AboutMeContainer } from "../container/aboutMeContainer";
import { ContactContainer } from "../container/contactContainer";
import { Footer } from "../container/footerContainer";
import { FormationContainer } from "../container/formationContainer";
import { Presentation } from "../container/presentation";
import { ProjectsContainer } from "../container/projectsContainer";
import { SkillsContainer } from "../container/SkillsContainer";
import { SocialMediaContainer } from "../container/SocialMedia";

export function Home() {
	return (
		<>
			<Header />
			<Presentation />
			<AboutMeContainer />
			<FormationContainer />
			<SkillsContainer />
			<ProjectsContainer />
			<ContactContainer />
			<SocialMediaContainer />
			<Footer />
		</>
	);
}
