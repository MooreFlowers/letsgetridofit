import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Junk Removal, Furniture Removal, Shed Removal, Hoarder Cleanouts & More</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/removingjunk1.jpeg'
              text='At Git Rid Of It, we are flat rate dismantling and removal experts.'
              label='100% Satisfaction Guaranteed'
              path='/services'
            />
            <CardItem
              src='images/getridofitlogo.png'
              text='Will Beat Most Competitor Prices!'
              label='Click Here for a Free Estimate'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/trashbycurb.jpeg'
              text='Get Rid Of it is a jumk removal company with significant experience and wealth of knowledge in our field, yet we offer some of the lowest prices around.'
              label='Click to see some of our services'
              path='/services'
            />
            <CardItem
              src='images/removingjunk4.jpeg'
              text='Safely Removing Your Junk'
              label='We Donate & Recycle Your Junk!'
              path='/products'
            />
            <CardItem
              src='images/removingjunk2.png'
              text='Sign up and get on our email list today!'
              label='Sign up today!'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
