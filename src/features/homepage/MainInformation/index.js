import { Name, Image, ThisIs, Wrapper, Info, StyledButtonLink, ButtonIcon } from "./styled"
import UlyanaLakevich from "./photo.JPG"
import { email } from "../email"
export const MainInformation = () => {
    return (
        <Wrapper>
            <Image src={UlyanaLakevich} alt="Ulyana Lakevich"/>
            <div>
                <ThisIs>This is</ThisIs>
                <Name>Ulyana Lakevich</Name>
                <Info>👨🏻‍💻I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.</Info>
                <StyledButtonLink href={`mailto:${email}`} title={email}>
                    <ButtonIcon/>
                    Hire me
                </StyledButtonLink>
            </div>
        </Wrapper>
    )
}