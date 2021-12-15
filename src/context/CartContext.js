import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState([])
    

    const addToCart = (product) => {
        setCart([...cart, product])
        saveCart(cart)
      }
    

    const emptyCart = () => {
        setCart([])
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(product => product.id !== id))
        saveCart(cart)
    }

    const totalAmount = () => {
      return cart.reduce((acc, product) => acc + product.tcgplayer.prices.holofoil?.market * product.cantidad, 0)
    }
    
    const saveCart = () => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
        console.log('cart saved')
      }

    const productsInCart = (cantidad) => {
        return cart.reduce((acc, product) => acc + product.cantidad, 0)
    }


    console.log(cart)

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            emptyCart,
            totalAmount,
            removeFromCart,
            saveCart,
            productsInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}