import React from 'react';
import styled from 'styled-components';

const TripSidePanel = styled.div`
    position: ${props => props.fixed || props.scrollY > 880 ? 'fixed' : 'relative'};
    top: ${props => props.scrollY > 880 || props.fixed ? '75px' : null};
    right: ${props => props.scrollY > 880 || props.fixed ? '128px' : null};
    flex: 0 1 30%;
    max-width: 372px;
    padding: 2rem;
    padding-top: ${props => props.paddingTop ? props.paddingTop : '1rem'};
    font-size: 0.9rem;    
    background-color: rgba(225, 225, 225, 0.4);
    box-sizing: border-box;
    p,
    ul {
        margin: 0;
    }
    ul {
        list-style-type: disc;
    }
    p {
        font-weight: bold;
    }
    a::before {
        content: ' ';
    }
    span,
    li,
    .staff-desc {
        font-size: 0.8rem;
        line-height: 1.5;
    }
    span,
    small,
    li,
    .staff-title,
    .staff-desc {
        color: ${props => props.theme.mdGrey};
    }    
    .trip-dates,
    .staff-desc {
        font-family: ${props => props.theme.standardFont};
        font-weight: normal;
    }
    .print-gear-list {
        color: ${props => props.theme.dkBlue};
    }
    .staff-heading,
    .staff-title {
        margin-top: 0.5rem;
    }
    .staff-desc {
        margin: 1rem 0;
    }
`;

class SidePanel extends React.Component {
    constructor() {
        super();
        this.panelRef = React.createRef();
        this.state = {
            scrollY: 0,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.detectScrollPosition);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.detectScrollPosition);
    }
    
    detectScrollPosition = () => {
        this.setState(() => ({ scrollY: window.scrollY }));
    }

    render() {
        const { fixed, paddingTop } = this.props;
        const { scrollY } = this.state;

        return (
            <div ref={this.panelRef}>
                <TripSidePanel scrollY={scrollY} fixed={fixed} paddingTop={paddingTop}>
                    {this.props.children}
                </TripSidePanel>
            </div>
        );
    }
}

export default SidePanel;
