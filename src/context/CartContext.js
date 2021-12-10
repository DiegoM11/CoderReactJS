import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        console.log(item)
        setCart([...cart, item])
    }

    console.log(cart)

    return (
        <CartContext.Provider value={{
            cart,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}