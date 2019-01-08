import Link from 'next/link';
import styled from 'styled-components';
import { Button, HeroImage, HomeInfoSection } from '../components/styles';

const StyledHomePage = styled.div`
    padding: 1rem 8rem;
    font-family: ${props => props.theme.standardFont};
    font-size: 1rem;
`;

const StyledOverlay = styled.div`
    position: absolute;
    color: white;
    bottom: 0;
    left: 0;
    margin-bottom: 5rem;
    padding: ${props => props.theme.padding};
    background: radial-gradient(closest-corner, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
    a {
        display: inline-block;
    }
    p,
    h2,
    span {
        margin: 0;
        filter: drop-shadow(.05em .05em ${props => props.theme.grey});
    }
    h2 {
        font-size: 1rem;
        text-transform: uppercase;
        line-height: normal;
    }
    p {
        font-size: 3rem; 
    }
    span {
        display: block;
    }
`;

const StyledHero = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

/**
 * Link from next binds HTML5 push state to anchor tags
 */
const Home = () => {
    return (
        <div>
            <StyledHero>
                <HeroImage src="static/images/lake.jpg" alt="Cordillera Huayhuash" />
                <StyledOverlay>
                    <h2>Next Trip</h2>
                    <p>Cordillera Huayhuash</p>
                    <span>May 29th, 2019 - June 12, 2019</span>
                    <Link href="/cordillera-huayhuash">
                        <a><Button>Reserve a spot</Button></a>
                    </Link>
                </StyledOverlay>
            </StyledHero>
            <HomeInfoSection />            
        </div>
    )
}

export default Home;