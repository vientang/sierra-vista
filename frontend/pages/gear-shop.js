import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import Tabs from '../components/Tabs';
import GearItem from '../components/GearItem';
import RentalCartList from '../components/RentalCartList';
import RentalCartPanel from '../components/RentalCartPanel';
import Button from '../components/Button';
import SidePanel from '../components/SidePanel';
import Title from '../components/Title';
import DownloadLink from '../components/DownloadLink';
import { trekkingGearData, climbingGearData } from '../static/gear-data';

const StyledGearShop = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 65% 1fr;
    grid-gap: 140px;
    max-width: 100%;
    padding: 0 8rem 0;
    p {
        font-family: ${props => props.theme.standardFont};
    }
    a {
        color: ${props => props.theme.blue};
    }
    a::before {
        content: ' ';
    }
    @media(max-width: 1200px) {
        grid-template-columns: 100%;
        grid-gap: 0;
    }
`;

const StyledGearSection = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    max-width: ${props => props.theme.maxWidth};
    padding: 3rem 5rem 6rem 0rem;
    font-size: 0.9rem;
    @media(max-width: 1200px) {
        padding-right: 0;
    }
`;

const StyledGearList = styled.div`    
    position: relative;
    display: flex;
    flex-direction: column;
    background: white;
    margin: 1rem 0;
    border: 1px solid ${props => props.theme.offWhite};
    box-shadow: ${props => props.theme.bs};
    overflow: auto;
    h3 {
        padding: 0.5rem 0.8rem;
        font-size: 0.8rem;
    }
`;

class GearShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            activeTab: 'trekking',
            cartItems: [],
            feedback: 'This is a test email',
            firstName: '',
            formEmailSent: false,
            formSubmitted: false,
            initiatedBy: '',
            lastName: '',
            recipientEmail: '',
        }
    }

    static getDerivedStateFromProps(props, state) {
        const { query } = props;
        
        if (query.active && query.active !== state.activeTab) {
            return {
                activeTab: state.initiatedBy === 'user' ? state.activeTab : query.active,
                initiatedBy: '',
            }
        }

        return {
            initiatedBy: '',
        };
    }

    getGearList = (type) => {
        const gearList = type === 'trekking' ? trekkingGearData : climbingGearData;
        return gearList.map((item, i) => (
            <StyledGearList key={`${item.category}-${i}`}>
                <h3>{item.category}</h3>
                {item.items.map((gearItem, i) => (
                    <GearItem
                        key={`${gearItem.brand}-${i}`}
                        item={gearItem}
                        addToCart={this.handleUpdateCartItems} 
                    />
                ))}
            </StyledGearList>
        ));
    }

    handleSubmit = (e) => {
        event.preventDefault()
        
        // this.sendFeedback(
        //     this.state.feedback,
        //     emailJsConfig.EMAILJS_RECEIVER,
        //     this.state.recipientEmail,
        //     this.state.feedback,
        // )

        this.setState(() => ({
            formSubmitted: true
        }));
    }

    sendFeedback(templateId, senderEmail, receiverEmail, feedback) {
        window.emailjs.send(
            'mailgun',
            templateId,
            {
                senderEmail,
                receiverEmail,
                feedback
            })
            .then(res => {
                this.setState(() => ({ formEmailSent: true }));
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Failed to send feedback. Error: ', err))
    }
    
    handleFirstName = (e) => {
        const firstName = e.target.value;
        this.setState(() => ({ firstName }));
    }

    handleLastName = (e) => {
        const lastName = e.target.value;
        this.setState(() => ({ lastName }));
    }

    handleEmailAddress = (e) => {
        const recipientEmail = e.target.value;
        this.setState(() => ({ recipientEmail }));
    }

    handleUpdateCartItems = (title) => {
        const { activeTab } = this.state;
        const gearList = activeTab === 'trekking' ? trekkingGearData : climbingGearData;
        let item = {};
        gearList.some(category => {
            const foundItem = category.items.find(item => item.title === title);
            if (foundItem) {
                item = foundItem;
                return true;
            }
            return false;
        });
        
        this.setState((prevState) => ({ cartItems: [item, ...prevState.cartItems] }))
    }

    handleTabSwitch = () => {
        this.setState((prevState) => ({
            activeTab: prevState.activeTab === 'trekking' ? 'climbing' : 'trekking',
            initiatedBy: 'user',
        }));
    }

    render() {
        const { activeTab, cartItems } = this.state;

        const packingTips = activeTab === 'trekking'
            ? trekkingGearData[0].tips
            : climbingGearData[0].tips;

        return (
            <StyledGearShop>
                <StyledGearSection>
                    <h2>Gear Shop</h2>
                    <Tabs>
                        <span
                            className={activeTab === 'trekking' ? 'active-tab' : ''}
                            onClick={this.handleTabSwitch}
                        >
                            Trekking
                        </span>
                        <span
                            className={activeTab === 'climbing' ? 'active-tab' : ''}
                            onClick={this.handleTabSwitch}
                        >
                            Climbing
                        </span>
                    </Tabs>
                    <h3>Packing Tips</h3>
                    <p>{packingTips}</p>
                    <p>
                        This list is based on our personal experience and to be used as a guide.
                        <a href="mailto:info@sierravistaexpeditions.com.com">E-mail</a> for details.
                    </p>
                    {this.getGearList(activeTab)}
                </StyledGearSection>
                <SidePanel paddingTop="2rem" fixed>
                    <RentalCartPanel>
                        <Title padding="0 0 1rem 0" width="100%">Rental items</Title>
                        <DownloadLink
                            className="rental-agreement-link"
                            text="Please read and sign the"
                            linkText="rental agreement."
                            url="/static/rental_terms_release_of_liability.pdf"
                        />
                        <RentalCartList>
                            {cartItems.map(item => <p key={item.title}>{item.title}</p>)}
                        </RentalCartList>
                        <Form emptyCart={cartItems.length < 1} onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="First name" onChange={this.handleFirstName} />
                            <input type="text" placeholder="Last name" onChange={this.handleLastName}/>
                            <input type="text" placeholder="Email" onChange={this.handleEmailAddress} />
                            <Button 
                                width="5rem" 
                                disabled={cartItems.length < 1}
                            >
                                Submit
                            </Button>
                        </Form>
                    </RentalCartPanel>
                </SidePanel>
            </StyledGearShop>
        );
    }
}

export default GearShopPage;