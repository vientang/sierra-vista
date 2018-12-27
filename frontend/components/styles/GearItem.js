import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemContent from './ItemContent';
import RentButton from './RentButton';
import Title from './Title';
import PriceTag from './PriceTag';

const StyledItemGroup = styled.div`    
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    padding: 0.5rem 3rem;
    border: 1px solid ${props => props.theme.offWhite};
    img {
        width: 40px;
        height: 40px;
        border: 1px solid ${props => props.theme.offWhite};
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