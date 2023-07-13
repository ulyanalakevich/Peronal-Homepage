import { githubUsername } from "../../githunUsername";
import { ButtonLink } from "../../../ButtonLink";
import {ReactComponent as WarningIcon} from "./Danger.svg"
import { Header, Paragraph, Wrapper } from "./styled";
export const Error = () => (
  <Wrapper>
    <WarningIcon />
    <Header>Oops! Something went&nbsp;wrong...</Header>
    <Paragraph>
      Sorry, failed to load GitHib&nbsp;projects.
      <br />
      You can check them directly&nbsp;on&nbsp;GitHub.
    </Paragraph>
    <ButtonLink href={`https://github.com/${githubUsername}`} target="_blank">
      Go to GitHub
    </ButtonLink>
  </Wrapper>
);
