import * as React from 'react'
import { 
    BodySection, 
    BodySectionKira, 
    FooterSection, 
    FooterSectionKira, 
    HeaderSection, 
    HomePage, 
    HomePageContainer, 
    Logo, 
    QuoteMark, 
    SectionDaniel, 
    SectionJonathan, 
    SectionKira, 
    Subtitle, 
    SubtitleKira, 
    Title,
    TitleKira
} from './styles'
import imgDaniel from '../images/image-daniel.jpg';
import imgJonathan from '../images/image-jonathan.jpg';
import imgKira from '../images/image-kira.jpg';
import imgQuote from '../images/bg-pattern-quotation.svg';

export const IndexHomePage = () => {
    return (
        <HomePage>
            <HomePageContainer>
        <SectionDaniel>
                <HeaderSection>
                    <Logo src={imgDaniel} alt="Imagem Daniel"/>
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
            <SectionJonathan>
                <HeaderSection>
                    <Logo src={imgJonathan} alt="Imagem Jonathan"/>
                    <Title>Jonathan Walters</Title>
                    <Subtitle>Verified Graduate</Subtitle>
                </HeaderSection>
            <BodySection>   
            The team was very supportive and kept me motivated
            </BodySection>
            <FooterSection>
            “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
            for a big company. This was one of the best investments I’ve made in myself. ”
            </FooterSection>
            </SectionJonathan>
                <SectionKira>
                        <HeaderSection>
                            <Logo src={imgKira} alt="Imagem Kira"/>
                            <TitleKira>Kira Whittle</TitleKira>
                            <SubtitleKira>Verified Graduate</SubtitleKira>
                        </HeaderSection>
                    <BodySectionKira >   
                    Such a life-changing experience. Highly recommended!
                    </BodySectionKira>
                    <FooterSectionKira>
                    “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
  professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
  student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
  did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
  project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
  could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
  experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
  100% recommend! ”
                    </FooterSectionKira>
                </SectionKira>
            </HomePageContainer>
        </HomePage> 
    )
}
