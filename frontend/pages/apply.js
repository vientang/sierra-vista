import styled from 'styled-components';
import Link from 'next/link';
import InnerPageContainer from '../components/InnerPageContainer';
import InnerPageContent from '../components/InnerPageContent';
import SidePanel from '../components/SidePanel';
import Title from '../components/Title';
import { DownloadIcon } from '../components/icons';

const StyledContactInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    padding: 1rem;
    a {
        font-family: ${props => props.theme.standardFont};
        font-size: 0.8rem;
        line-height: 2;
    }
    a:hover {
        color: ${props => props.theme.blue};
    }
    .staff-heading {
        font-family: ${props => props.theme.headingFont};
    }
`;

const ApplicationSection = styled.div`
    width: 60%;
    font-size: 0.9rem;
    margin-bottom: 5rem;
    padding: 3rem 1rem 0 0;
    box-sizing: border-box;
    h2,
    .application-download {
        font-family: ${props => props.theme.headingFont};
    }
    .bordered-section {
        padding: 2rem 0 0;
        border-top: 2px solid ${props => props.theme.lightGrey};
    }
    a {
        &:hover {
            color: ${props => props.theme.blue};
        }
    }
    .application-download {
        display: flex;
        align-items: center;
        a {
            margin-left: 0.5rem;
        }
    }
    .legal-important {
        padding: 0.5rem;
        background: ${props => props.theme.lightGrey};
        font-size: 0.7rem;
        font-style: italic; 
        line-height: 1.5;
    }
    @media (max-width: 1200px) {
        width: 100%;
        padding-right: 1rem;
    }
`;

const Application = () => {
    return (
        <InnerPageContainer>
            <InnerPageContent>
                <ApplicationSection paddingTop="2rem">
                    <h2>Trip Application</h2>
                    <p>
                        IMPORTANT: In order to secure your spot on this trip, you must fill out all forms in this trip application. Please SCAN and EMAIL back to <a href="mailto:info@sierravistaexpeditions.com">info@SierraVistaExpeditions.com</a>, and pay your $1,000 non-refundable deposit per person. If you are signing up 90 days or less prior to the start date, payment must be made in full. Each team member on the trip must have a separate application form submitted.
                    </p>
                    <p className="legal-important">
                        You cannot participate on a Sierra Vista Expedition unless we have a signed application, medical form, release of liability and a deposit from each team member.
                    </p>
                    <p className="application-download">
                        <DownloadIcon size={24} />
                        <Link href="/static/trip_application.pdf">
                            <a>Download the application</a>
                        </Link>
                    </p>
                    <h2 className="bordered-section">Medical disclosure</h2>
                    <p>
                        Please answer each question honestly using the fields below. You may attach a separate sheet of paper to finish answering all questions. This information will be shared with your expedition leader(s) in order to assist with any medical related issues that may occur during your trip. By signing this form you are indicating that you acknowledge the physical requirements for this program.
                    </p>
                    <p className="legal-important">
                        Sierra Vista reserves the right to refuse service at your expense due to misrepresentation of information provided in this form and all forms.
                    </p>
                    <p className="application-download">
                        <DownloadIcon size={24} />
                        <Link href="/static/trip_application.pdf">
                            <a>Download the medical form</a>
                        </Link>
                    </p>
                    <h2 className="bordered-section">Terms and conditions</h2>
                    <p>
                        Please answer each question honestly using the fields below. You may attach a separate sheet of paper to finish answering all questions. This information will be shared with your expedition leader(s) in order to assist with any medical related issues that may occur during your trip. By signing this form you are indicating that you acknowledge the physical requirements for this program.
                    </p>
                    <p className="legal-important">
                        Sierra Vista reserves the right to refuse service at your expense due to misrepresentation of information provided in this form and all forms.
                    </p>
                    <p className="application-download">
                        <DownloadIcon size={24} />
                        <Link href="/static/terms-and-conditions.pdf">
                            <a>Download the terms and conditions</a>
                        </Link>
                    </p>
                </ApplicationSection>
                <SidePanel paddingTop="3rem" fixed>
                    <StyledContactInfo>
                        <Title padding="0 0 1rem 0" width="100%">Other forms</Title>
                        <p>
                            <Link href="/static/rental_terms_release_of_liability.pdf">
                                <a>Rental Agreement</a>
                            </Link>
                        </p>
                        <p>
                            <Link href="/static/terms-and-conditions.pdf">
                                <a className="footer-links">Terms and Conditions</a>
                            </Link>
                        </p>
                        <p>
                            <Link href="/static/assumption-of-risk-release-of-liability.pdf">
                                <a className="footer-links">Assumption of Risk and Liability</a>
                            </Link>
                        </p>
                    </StyledContactInfo>
                </SidePanel>
            </InnerPageContent>
        </InnerPageContainer>
    );
}

export default Application;