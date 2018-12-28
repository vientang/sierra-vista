import React, { Component } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import GearItem from './GearItem';
import { trekkingGearData } from '../../static/gear-data';

const ALL_GEAR_QUERY = gql`
    query ALL_GEAR_QUERY {
        items {
            id
            title
            price
            description
            thumbnail
            image
        }
    }
`;

const StyledGearShop = styled.div`
    position: relative;
    max-width: 100%;
    padding: 1rem 5rem 6rem;
    top: ${props => props.theme.top};
    font-family: ${props => props.theme.standardFont};
    font-size: 0.9rem;
    a {
        color: ${props => props.theme.blue};
    }
    a::before {
        content: ' ';
    }
    small {
        margin: 1rem 0;
        display: block;
        font-style: italic;
    }
    @media(max-width: 1300px) {
        top: 120px;
    }
`;

const StyledGearSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    margin: 0 auto;
    max-width: ${props => props.theme.maxWidth};
`;

const StyledGearList = styled.div`    
    position: relative;
    display: flex;
    flex-direction: column;
    background: white;    
    border: 1px solid ${props => props.theme.offWhite};
    box-shadow: ${props => props.theme.bs};
    overflow: auto;
    h3 {
        padding: 0 3rem;
    }
    @media(max-width: 1300px) {
        h3 {
            padding: 0 1rem;
        }
    }
`;

class GearShop extends Component {
    render() {
        return (
            <StyledGearShop>
                {this.props.children}
                <Query query={ALL_GEAR_QUERY}>
                    {({ loading }) => {                        
                        if (loading) {
                            return (
                                <p>Loading ...</p>
                            )
                        }
                        return (
                            <StyledGearSection>
                                {trekkingGearData.map(item => {
                                    return (
                                        <StyledGearList>
                                            <h3>{item.category}</h3>
                                            {item.items.map(gearItem => <GearItem item={gearItem} />)}
                                        </StyledGearList>
                                    )
                                })}
                            </StyledGearSection>
                        )
                    }}
                </Query>
            </StyledGearShop>
        );
    }
}

export default GearShop;