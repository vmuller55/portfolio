import React, { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../redux/cartSlice';
import { updateCharacter, addToInventory, clearInventory } from '../../redux/characterSlice';
import './buy.css'

const Buy = () => {
    const dispatch = useDispatch();
    const [inventoryIsVisible, setInventoryIsVisibe] = useState(false)
    const [floating, setFloating] = useState(false)
    const character = useSelector(state => state.character)
    const cart = useSelector(state => state.cart)

    const items = [
        {
            id : Math.random(),
            name : 'Potion',
            price : 50,
            icon : 'fa-solid fa-flask',
        },
        {
            id : Math.random(),
            name : 'Carte',
            price : 150,
            icon : 'fa-solid fa-map',
        },
        {
          id : Math.random(),
          name : 'Bombe',
          price : 100,
          icon : 'fa-solid fa-bomb',
      }
    ]

    const handleChangeInfos = (option, value) => {
      dispatch(updateCharacter({option, value})) 
  }

    const handleAddToCart = article => {
      let newGold = character.gold - article.price
      if(newGold >= 0) {
        dispatch(addToCart(article)); 
        handleChangeInfos('gold', newGold)
      }
      else{
        setFloating(true)
        setTimeout(() => {
          setFloating(false)
        }, 2000)
      }

    };

    const handleRemoveToCart = article => {
      let newGold = character.gold + article.price
      dispatch(removeFromCart(article)); 
      handleChangeInfos('gold', newGold)
    };
  
    const handleClearCart = () => {
      let newGold = character.gold
      cart.map(itemInCart => (
        handleChangeInfos('gold', newGold += itemInCart.price)
      ))
      
      dispatch(clearCart())
    }

    const handleBuyCart = () => {
      cart.map(articleInCart => (
        dispatch(addToInventory(articleInCart))
      ))
      dispatch(clearCart())
    }

    const handleShowInventory = () => {
      setInventoryIsVisibe(!inventoryIsVisible)
    }

    const handleRefund = () => {
      dispatch(clearInventory())
      dispatch(clearCart())
      handleChangeInfos('gold', 150)
    }

    return (
      <div className='storeContainer'>
        <h2>Articles</h2>
        <h3 className='currentGold'>Mon or : {character.gold} <i className="fa-solid fa-coins"></i></h3>
        <h5 className={floating ? 'floatingOn' : 'floatingOff'}>Pas assez d'or</h5>
        <ul className='buyList'>
          {items.map(article => (
            <li key={article.id}>
              <button className='buttonStyle' onClick={() => handleAddToCart(article)}>
                <h3>{article.name}</h3>
                <i className={`${article.icon} storeIcon`}></i>
                <p className='itemPrice'>{article.price} <i className="fa-solid fa-coins"></i></p>
              </button>
            </li>
          ))}
        </ul>
        {cart.length ? 
          <>
            <div className='cartContainer'>
              <h3>Mon panier</h3>
              <ul className='cartList'>
                {cart.map(articleInCart => (
                  <li key={articleInCart.id}>
                    <button className='buttonStyle' onClick={() => handleRemoveToCart(articleInCart)}>
                      <i className={articleInCart.icon}> </i>
                    </button>
                  </li>
                ))}
              </ul>
              <button className='buttonStyle buyButton' style={{fontSize : '16px', padding : '5px 15px'}} onClick={handleClearCart}>Vider le panier</button>
            </div>
            <button className='buttonStyle buyButton' onClick={handleBuyCart}>Acheter</button>
          </>
          :
          ''
        }
        {character.inventory.length ?
          <>
            <button className='buttonStyle inventoryButton mobileMode' onClick={handleShowInventory}>Mon inventaire <i className="fa-solid fa-toolbox"></i></button>
            <button className='buttonStyle resetInventory mobileMode' onClick={handleRefund}>Me faire rembourser ! </button>
          </>
        :
        ''
        }
        {inventoryIsVisible ?
          <ul className='inventoryList'>
            {character.inventory.map(itemInInventory => (
              <li key={itemInInventory.id}>
                <i className={itemInInventory.icon}> </i>
              </li>
            ))}
          </ul> 
          :
          ''
        }
      </div>
    );
}

export default Buy