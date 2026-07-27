"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";


type CartItem = {

  name: string;

  price: string;

  image: string;

};



type CartContextType = {

  cart: CartItem[];

  addToCart: (item: CartItem) => void;

  removeFromCart: (index:number) => void;

  clearCart: () => void;

};



const CartContext = createContext<CartContextType | null>(null);




export function CartProvider({
  children
}:{
  children: ReactNode
}) {


  const [cart,setCart] = useState<CartItem[]>([]);



  // Load cart from browser storage
  useEffect(()=>{

    const savedCart =
      localStorage.getItem("smartserve-cart");


    if(savedCart){

      setCart(JSON.parse(savedCart));

    }


  },[]);




  // Save cart whenever cart changes
  useEffect(()=>{


    localStorage.setItem(
      "smartserve-cart",
      JSON.stringify(cart)
    );


  },[cart]);





  // Add item

  function addToCart(item:CartItem){


    setCart((previousCart)=>{


      const updatedCart = [
        ...previousCart,
        item
      ];


      return updatedCart;


    });


  }





  // Remove item

  function removeFromCart(index:number){


    setCart((previousCart)=>{


      const updatedCart =
        previousCart.filter(
          (_,i)=> i !== index
        );



      localStorage.setItem(
        "smartserve-cart",
        JSON.stringify(updatedCart)
      );



      return updatedCart;


    });


  }





  // Empty complete cart

  function clearCart(){


    setCart([]);


    localStorage.removeItem(
      "smartserve-cart"
    );


  }





  return (

    <CartContext.Provider

      value={{

        cart,

        addToCart,

        removeFromCart,

        clearCart

      }}

    >

      {children}

    </CartContext.Provider>


  );

}






export function useCart(){


  const context =
    useContext(CartContext);



  if(!context){


    throw new Error(
      "useCart must be used inside CartProvider"
    );


  }



  return context;


}