import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const[cartItem, setCartItems] = useState({})

    const addTocart = (itemId) =>{
        if(!cartItem[itemId]){
            setCartItems((prev)=>({...prev, [itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromcart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItem)
    },[cartItem])

    const contextValue = {
        food_list,
        cartItem,
        setCartItems,
        addTocart,
        removeFromcart
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )


}

export default StoreContextProvider;