import Link from 'next/link';
import styled from 'styled-components';
import { RentButton, HomePageImage, HomeInfoSection } from '../components/styles';

const StyledHomePage = styled.div`
    padding: 1rem 8rem;
    font-family: ${props => props.theme.standardFont};
    font-size: 1rem;
`;

const StyledOverlay = styled.div`
    position: absolute;
    color: white;
    top: 0;
    left: 0;
    transform: translateY(525px);
    padding: ${props => props.theme.padding};
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

/**
 * Link from next binds HTML5 push state to anchor tags
 */
const Home = () => {
    return (
        <div>
            <HomePageImage src="static/images/lake.jpg" alt="Cordillera Huayhuash" />
            <StyledOverlay>
                <h2>Next Trip</h2>
                <p>Cordillera Huayhuash</p>
                <span>May 29th, 2019 - June 12, 2019</span>
                <Link href="/cordillera-huayhuash">
                    <a><RentButton>Reserve a spot</RentButton></a>
                </Link>
            </StyledOverlay>
            <StyledHomePage>
                <HomeInfoSection />
            </StyledHomePage>            
        </div>
        
    )
}

export default Home;