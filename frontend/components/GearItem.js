import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemContent from './ItemContent';
import { AddIcon } from './icons';

const StyledItemGroup = styled.div`    
    position: relative;
    display: grid;
    grid-template-columns: 7% 83% 10%;
    padding: 0.8rem;
    border: 1px solid ${props => props.theme.offWhite};
    .gear-title {
        font-weight: bold;
    }
    .gear-desc {
        font-weight: 450;
        margin: 0.5rem 0;
    }
    .gear-brand {
        font-size: 0.75rem;
        font-weight: bold;
        color: ${props => props.theme.mdGrey};
    }
    .add-icon {
        margin-left: auto;
        &:hover {
            cursor: pointer;
            path {
                fill: ${props => props.theme.mdBlue};
            }
        }
    }
    img {
        width: 40px;
        height: 40px;
        min-width: 100%;
    }
    @media(max-width: 1300px) {
        padding: 0.5rem 1rem;
    }
`;

class GearItem extends Component {
    handleRentGear = () => {
        const { item: { title } } = this.props;
        this.props.addToCart(title);
    }

    render() {
        const { item: { brand, title, desc, img, rentable } } = this.props;
        const imagePath = img ? `static/images/gear/${img}` : '';
        return (
            <StyledItemGroup>
                <img src={imagePath} />
                <ItemContent>
                    <p className="gear-title">{title}</p>
                    <p className="gear-desc">{desc}</p>
                    <p className="gear-brand">{brand}</p>
                </ItemContent>
                {rentable && (
                    <AddIcon className="add-icon" onClick={this.handleRentGear} size={20} />
                )}
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