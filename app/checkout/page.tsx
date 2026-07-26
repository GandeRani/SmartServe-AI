"use client";

import { useState } from "react";
import { useCart } from "@/components/CartContext";
import { useRouter } from "next/navigation";


export default function CheckoutPage() {


  const {
    cart,
    clearCart,
    placeOrder
  } = useCart();



  const router = useRouter();



  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");





  const total = cart.reduce(
    (sum:number,item:any)=>
      sum + Number(item.price.replace("₹","")),
    0
  );







  const handlePlaceOrder = ()=>{


    if(!name || !phone || !address){

      alert("Please fill all details");

      return;

    }





    const order = placeOrder({

      name,

      phone,

      address,

      total,

      items: cart

    });





    // save current order for success page

    localStorage.setItem(
      "smartserve-current-order",
      JSON.stringify(order)
    );





    clearCart();





    router.push("/order-success");


  };









  return (

    <main
      className="
      min-h-screen
      bg-gray-100
      dark:bg-gray-950
      pt-24
      px-10
      pb-10
      "
    >


      <h1
        className="
        text-5xl
        font-bold
        text-center
        text-gray-900
        dark:text-white
        "
      >

        Checkout 💳

      </h1>





      <div
        className="
        max-w-xl
        mx-auto
        mt-12
        bg-white
        dark:bg-gray-900
        p-8
        rounded-2xl
        shadow-lg
        "
      >





        <input
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="
          w-full
          p-3
          rounded-xl
          border
          mb-4
          dark:bg-gray-800
          dark:text-white
          "
        />





        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          className="
          w-full
          p-3
          rounded-xl
          border
          mb-4
          dark:bg-gray-800
          dark:text-white
          "
        />





        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          className="
          w-full
          p-3
          rounded-xl
          border
          mb-4
          dark:bg-gray-800
          dark:text-white
          "
        />






        <div
          className="
          flex
          justify-between
          text-xl
          font-bold
          mb-6
          text-gray-900
          dark:text-white
          "
        >

          <span>
            Total
          </span>


          <span className="text-blue-600">

            ₹{total}

          </span>


        </div>







        <button

          onClick={handlePlaceOrder}

          className="
          w-full
          bg-green-600
          hover:bg-green-700
          text-white
          py-4
          rounded-xl
          text-xl
          font-bold
          "

        >

          Place Order ✅

        </button>





      </div>



    </main>


  );

}