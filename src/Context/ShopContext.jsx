import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null);

const ShopContextProvider = (props)=>{

    const ContextValue = {all_product};

    return (
        <ShopContext.Provider value={ContextValue}>
            {props.childern}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;