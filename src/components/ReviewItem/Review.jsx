import React from 'react';
import './Review.css';

const Review = ({ product }) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='review-items'>
            <img src={img} alt="" />
            <h4>ReviewItem</h4>
        </div>
    );
};

export default Review;