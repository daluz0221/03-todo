// 'use client';

import { getCookie, hasCookie, setCookie } from "cookies-next";



export const getCookieCart = ():{[id: string]: number } => {
  
    if(hasCookie('cart')){
        const cookieCart = JSON.parse( getCookie('cart') as string ?? '{}' )
        return cookieCart;
    }

    return {}
};



export const addProductsToCart = ( id: string ) => {


    const cookieCart = getCookieCart();
    if( cookieCart[id] ){
        cookieCart[id] = cookieCart[id] + 1
    } else{
        cookieCart[id] = 1
    }

    setCookie('cart', JSON.stringify(cookieCart))

};


export const removeProducto = ( id:string ) => {
  
    const cookieCart = getCookieCart();
    const newCookieCart = Object.fromEntries(
        Object.entries(cookieCart).filter( ([key]) => key !== id  )
    );


    setCookie('cart', JSON.stringify(newCookieCart))

};

export const removeSingleItemFromCart = ( id:string ) => {
    const cookieCart = getCookieCart();
    if(!cookieCart[id]) return;
    
    if( cookieCart[id] > 1 ){
        cookieCart[id] = cookieCart[id] - 1
    } else{
        delete cookieCart[id]
    }

    setCookie('cart', JSON.stringify(cookieCart))

};