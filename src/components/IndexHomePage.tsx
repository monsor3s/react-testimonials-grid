import * as React from 'react'
import { 
    BodySection, 
    FooterSection, 
    HeaderSection, 
    HomePage, 
    HomePageContainer, 
    LogoDaniel, 
    QuoteMark, 
    SectionDaniel, 
    Subtitle, 
    Title
} from './styles'
import imgDaniel from '../images/image-daniel.jpg';
import imgQuote from '../images/bg-pattern-quotation.svg';

export const IndexHomePage = () => {
    return (
        <HomePage>
            <HomePageContainer>
            <SectionDaniel>
                <HeaderSection>
                    <LogoDaniel src={imgDaniel} alt="Imagem Daniel"/>
                    <QuoteMark src={imgQuote} alt="QuotMark"/>
                    <Title>Daniel Clifford</Title>
                    <Subtitle>Verified Graduate</Subtitle>
                </HeaderSection>
            <BodySection>   
                I received a job offer mid-course, and the subjects I learned<br/> were current, if not more so, 
                in the company I joined. I <br/> honestly feel I got every penny’s worth.
            </BodySection>
            <FooterSection>
                “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a <br/>
                transition and have heard some people who had an amazing experience here. I signed up 
                for <br/>the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                The next 12<br/> weeks was the best - and most grueling - time of my life. Since completing 
                the course, I’ve <br/>successfully switched careers, working as a Software Engineer at a VR startup. ”
            </FooterSection>
            </SectionDaniel>
            </HomePageContainer>
        </HomePage> 
    )
}
