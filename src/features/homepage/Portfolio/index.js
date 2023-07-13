import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../homepageSlice";
import { useEffect } from "react";
import { githubUsername } from "./githunUsername";
import { Header, MyRecentProjects, Section, StyledGitHubIcon } from "./styled";
import { Content } from "./Content";
import { SubHeader } from "../SubHeader";

export const Portfolio = () => {
    const dispatch = useDispatch();
    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories(githubUsername));
    }, [dispatch]
    );

return (
    <Section>
        <Header>
            <StyledGitHubIcon/>
            <SubHeader>Portfolio</SubHeader>
            <MyRecentProjects>My recent projects</MyRecentProjects>
        </Header>

        <Content 
        status={repositoriesStatus}
        repositories={repositories}
        />

    </Section>
)
}