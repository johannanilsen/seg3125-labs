import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img1 from '../../images/cardbackgrnd.png';
import img2 from '../../images/cardbackgrnd-2.png';
import img3 from '../../images/cardbackgrnd-3.png';

function Cards() {
  return (
    <div className='cards'>
        <h2>Travel Packages</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src={img1}
                    text='Sightseeing'
                    label= 'Adventure'
                    path = '/book-room'
                    />
                    <CardItem 
                    src={img2}
                    text='Pier Walk'
                    label= 'Dining'
                    path = '/book-room'
                    />
                    <CardItem 
                    src={img3}
                    text='Nightlife'
                    label= 'Entertainment'
                    path = '/book-room'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;