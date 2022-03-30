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
                    path = '/book-room'
                    />
                    <CardItem 
                    src='/images/cardbackgrnd-2.png'
                    text='Pier Walk'
                    label= 'Dining'
                    path = '/book-room'
                    />
                    <CardItem 
                    src='/images/cardbackgrnd-3.png'
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