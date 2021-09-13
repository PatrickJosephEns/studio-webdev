import React from 'react';
import './Cards.css';
import CardItem from './CardItems';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the latest collection!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/1.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='New'
              path='/services'
            />
            <CardItem
              src='images/2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='New'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='New'
              path='/services'
            />
            <CardItem
              src='/images/4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='New'
              path='/products'
            />
            <CardItem
              src='images/5.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='New'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/6.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='New'
              path='/services'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;