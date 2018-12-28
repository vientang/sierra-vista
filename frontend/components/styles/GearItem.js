import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemContent from './ItemContent';
import RentButton from './RentButton';
import Title from './Title';
import PriceTag from './PriceTag';

const StyledItemGroup = styled.div`    
    position: relative;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    padding: 0.5rem 3rem;
    border: 1px solid ${props => props.theme.offWhite};
    img {
        width: 40px;
        height: 40px;
        min-width: 100%;
        border: 1px solid ${props => props.theme.offWhite};
    }
    @media(max-width: 1300px) {
        padding: 0.5rem 1rem;
    }
`;

class GearItem extends Component {
    render() {
        const { item: { brand, title, desc, required } } = this.props;
        const requiredTitle = required ? `*${title}` : title;
        return (
            <StyledItemGroup>
                <img src="" />
                <ItemContent>
                    <p>{requiredTitle}</p>
                    <p>{desc}</p>
                    <p>{brand}</p>
                </ItemContent>
                <RentButton>Rent</RentButton>
            </StyledItemGroup>
        );
    }
}

GearItem.propTypes = {
    item: PropTypes.shape({
        brand: PropTypes.string,        
        title: PropTypes.string,
        desc: PropTypes.string,
        required: PropTypes.bool,
        quantity: PropTypes.string,
    }),
};

export default GearItem;