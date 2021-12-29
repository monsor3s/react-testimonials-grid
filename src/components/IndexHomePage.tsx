import * as React from 'react'
import { 
    BodySection, 
    BodySectionJeanette, 
    BodySectionKira,
    BodySectionPatrick,
    FooterSection, 
    FooterSectionJeanette, 
    FooterSectionKira, 
    FooterSectionPatrick, 
    HeaderSection, 
    HomePage, 
    HomePageContainer, 
    Logo, 
    QuoteMark, 
    SectionDaniel, 
    SectionJeanette, 
    SectionJonathan, 
    SectionKira, 
    SectionPatrick, 
    Subtitle, 
    SubtitleJeanette, 
    SubtitleKira, 
    Title,
    TitleJeanette,
    TitleKira
} from './styles'
import imgDaniel from '../images/image-daniel.jpg';
import imgJonathan from '../images/image-jonathan.jpg';
import imgKira from '../images/image-kira.jpg';
import imgJeanette from '../images/image-jeanette.jpg';
import imgPatrick from '../images/image-patrick.jpg';
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
                “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                transition and have heard some people who had an amazing experience here. I signed up 
                for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
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
                <SectionJeanette>
                        <HeaderSection>
                            <Logo src={imgJeanette} alt="Imagem Jeanette"/>
                            <TitleJeanette>Jeanette Harmon</TitleJeanette>
                            <SubtitleJeanette>Verified Graduate</SubtitleJeanette>
                        </HeaderSection>
                    <BodySectionJeanette>   
                    An overall wonderful<br/> and rewarding<br/> experience
                    </BodySectionJeanette>
                    <FooterSectionJeanette>
                    “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
                    while doing something I love. ”
                    </FooterSectionJeanette>
                </SectionJeanette>
                        <SectionPatrick>
                            <HeaderSection>
                                <Logo src={imgPatrick} alt="Imagem Patrick"/>
                                <Title>Patrick Abrams</Title>
                                <Subtitle>Verified Graduate</Subtitle>
                            </HeaderSection>
                                <BodySectionPatrick>   
                                    Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.
                                </BodySectionPatrick>
                                    <FooterSectionPatrick>
                                    “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”
                                    </FooterSectionPatrick>
                        </SectionPatrick>
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
                                “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
                                100% recommend! ”
                                    </FooterSectionKira>
                                </SectionKira>
            </HomePageContainer>
        </HomePage> 
    )
}
