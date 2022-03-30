import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h2>Travel Options</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/cardbackgrnd.png'
                    text='Sightseeing'
                    label= 'Adventure'
                    path = '/booking'
                    />
                    <CardItem 
                    src='/images/cardbackgrnd-2.png'
                    text='Pier Walk'
                    label= 'Dining'
                    path = '/booking'
                    />
                    <CardItem 
                    src='/images/cardbackgrnd-3.png'
                    text='Nightlife'
                    label= 'Entertainment'
                    path = '/booking'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;