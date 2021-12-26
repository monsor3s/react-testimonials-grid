import styled from 'styled-components';

export const HomePage = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HomePageContainer = styled.div`
    width: 1000px;
    height: 600px;
    background-color: var(--light-gray-blue);
`;

export const SectionDaniel = styled.div`
    width: 460px;
    height: 230px;
    background-color: var(--violet);
    border-radius: 0.6rem;
    padding: 2rem;
`;

export const HeaderSection = styled.div`
    
`;

export const LogoDaniel = styled.img`
    width: 25px;
    border: 1px solid var(--light-gray-blue);
    border-radius: 3rem;
    display: inline-block;
    position: relative;
`;

export const QuoteMark = styled.img`
    z-index: 1;
    position: absolute;
    margin: 0 0 0 24rem;
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
    z-index: 0;
    font-size: 17px;
    font-weight: 600;
    color: var(--white);
    margin-top: 1rem;
`;

export const FooterSection = styled.p`
        font-size: 11px;
        line-height: 1.5rem;
        color: var(--light-gray);
        margin-top: 1rem;
        opacity: 70%;
`;