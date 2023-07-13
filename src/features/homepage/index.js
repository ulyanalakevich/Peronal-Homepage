import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { Container, Icon } from "./styled";
import toolsIcon from "./tools.png";
import rocketIcon from "./rocket.png";
import { Portfolio } from "./Portfolio";
import { nextSkills, skills } from "./skillsData";
import { Footer } from "./Footer";

export const Homepage = () => (
  <Container>
    <ThemeSwitch />
    <MainInformation />

    <main>
      <Skills
        title={
          <>
            My skillset includes <Icon src={toolsIcon} alt="" />
          </>
        }
        skills={skills}
      />

      <Skills
        title={
          <>
            What i want to learn next <Icon src={rocketIcon} alt="" />
          </>
        }
        skills={nextSkills}
      />
      <Portfolio />
    </main>

    <Footer />
  </Container>
);
