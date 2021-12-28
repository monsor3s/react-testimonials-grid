import styled from 'styled-components';

export const HomePage = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-gray-blue);

`;

export const HomePageContainer = styled.div`
    width: 940px;
    height: 500px;
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px; 
    
`;

export const SectionDaniel = styled.div`
    z-index: 0;
    width: 460px;
    height: 230px;
    position: absolute;
    background-color: var(--violet);
    border-radius: 0.6rem;
    padding: 2rem;
    
    grid-area: 1 / 1;
`;

export const HeaderSection = styled.div`
    
`;

export const Logo = styled.img`
    width: 25px;
    border: 1px solid var(--light-gray-blue);
    border-radius: 3rem;
    display: inline-block;
    position: relative;
`;

export const QuoteMark = styled.img`
    z-index: 0;
    width: 90px;
    height: 85px;
    position: absolute;
    margin: -2rem 0 0 24.5rem;
    opacity: 70%;
`;

export const Title = styled.h1`
    font-size: 13px;
    color: var(--light-gray);
    display: inline-block;
    position: absolute;
    margin-left: 1rem;
`;

export const Subtitle = styled.h2`
    font-size: 10px;
    color: var(--light-gray);
    display: inline-block;
    margin-left: 1rem;
    opacity: 50%;
`;  

export const BodySection = styled.p`
    z-index: 2;
    font-size: 17px;
    font-weight: 600;
    color: var(--white);
    margin-top: 1rem;
`;

export const FooterSection = styled.p`
        z-index: 2;
        font-size: 12px;
        line-height: 1.5rem;
        color: var(--light-gray);
        margin-top: 1rem;
        opacity: 70%;
`;

export const SectionJonathan = styled.div`
    z-index: 1;
    width: 220px;
    height: 230px;
    background-color: var(--dark-gray);
    border-radius: 0.6rem;
    padding: 2rem;

    grid-area: 1 / 3;


`;

export const SectionKira = styled.div`
    z-index: 0;
    width: 220px;
    height: 490px;
    background-color: var(--white);
    border-radius: 0.6rem;
    padding: 2rem;
    position: absolute;

    grid-area: 1 / 4;

`;

export const TitleKira = styled(Title)`
    color: var(--dark-gray-blue);
`;

export const SubtitleKira = styled(Subtitle)`
    color: var(--dark-gray-blue);
`;

export const BodySectionKira = styled(BodySection)`
    color: var(--dark-gray-blue);
`;

export const FooterSectionKira = styled(FooterSection)`
    color: var(--dark-gray-blue);
    line-height: 1.7rem;
    opacity: 70%;
`;

export const SectionJeanette = styled(SectionJonathan)`
    background-color: var(--white);
    grid-area: 2 / 1;
`;

export const TitleJeanette = styled(TitleKira)`
`;

export const SubtitleJeanette = styled(SubtitleKira)`

`;

export const BodySectionJeanette = styled(BodySectionKira)`
`;

export const FooterSectionJeanette = styled(FooterSectionKira)`
    margin-top: 3rem;
`;

export const SectionPatrick = styled(SectionDaniel)`
    background-color: var(--dark-black-blue);
    grid-area: 2 / 2;
`;