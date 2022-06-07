import React from 'react'
import logo from '../logo.svg';


function Header({cart}) {
  // Show my cart
  
  const cartItems = cart.map(item => item.quantity);
  const total = cartItems.reduce((acc, item) => acc + item, 0);

  return (
    <div className='header'>
          <img src={logo} className='logo' alt='logo' />
          <div className='cart'>
            <p>Cart: {total}</p>
          </div>
      </div>
  )
}

export default Header