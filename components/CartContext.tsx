"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const CartContext = createContext<any>(null);



export function CartProvider({
  children
}: {
  children: React.ReactNode;
}) {


  const [cart,setCart] = useState<any[]>([]);

  const [orders,setOrders] = useState<any[]>([]);



  // Load cart
  useEffect(()=>{

    const savedCart =
      localStorage.getItem("smartserve-cart");


    if(savedCart){

      setCart(JSON.parse(savedCart));

    }


  },[]);





  // Save cart

  useEffect(()=>{

    localStorage.setItem(
      "smartserve-cart",
      JSON.stringify(cart)
    );


  },[cart]);






  // Load orders

  useEffect(()=>{

    const savedOrders =
      localStorage.getItem("smartserve-orders");


    if(savedOrders){

      setOrders(
        JSON.parse(savedOrders)
      );

    }


  },[]);








  const addToCart = (item:any)=>{


    setCart((old)=>[

      ...old,
      item

    ]);


  };







  const removeFromCart = (index:number)=>{


    setCart((old)=>

      old.filter(
        (_,i)=>i!==index
      )

    );


  };







  const clearCart = ()=>{

    setCart([]);

  };








  const placeOrder = (orderData:any)=>{


    const newOrder = {

      orderId:
      "SS" +
      Math.floor(
        10000 +
        Math.random()*90000
      ),


      ...orderData,


      status:"New",


      priority:"HIGH",


      createdAt:
      new Date().toISOString()

    };





    const updatedOrders=[

      ...orders,

      newOrder

    ];




    setOrders(updatedOrders);



    localStorage.setItem(

      "smartserve-orders",

      JSON.stringify(updatedOrders)

    );




    return newOrder;


  };









  return (

    <CartContext.Provider

      value={{

        cart,

        orders,

        addToCart,

        removeFromCart,

        clearCart,

        placeOrder

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