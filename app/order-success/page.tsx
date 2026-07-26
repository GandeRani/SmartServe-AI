"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


export default function OrderSuccessPage() {


  const [order, setOrder] = useState<any>(null);



  useEffect(() => {

    const savedOrder =
      localStorage.getItem("smartserve-order");


    if(savedOrder){

      setOrder(JSON.parse(savedOrder));

    }

  }, []);





  if(!order){

    return (

      <main
        className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-100
        dark:bg-gray-950
        "
      >

        <h1
          className="
          text-3xl
          font-bold
          text-gray-900
          dark:text-white
          "
        >

          No order found 😔

        </h1>


      </main>

    );

  }





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



      <div
        className="
        max-w-xl
        mx-auto
        bg-white
        dark:bg-gray-900
        rounded-3xl
        shadow-xl
        p-10
        "
      >



        <div className="text-center">


          <div className="text-7xl">

            🎉

          </div>



          <h1
            className="
            text-4xl
            font-bold
            mt-5
            text-gray-900
            dark:text-white
            "
          >

            Order Confirmed!

          </h1>




          <p
            className="
            mt-3
            text-gray-600
            dark:text-gray-300
            "
          >

            Thank you for ordering from SmartServe AI 🍽️

          </p>


        </div>







        <div
          className="
          mt-8
          bg-gray-100
          dark:bg-gray-800
          rounded-2xl
          p-6
          "
        >



          <h2
            className="
            text-xl
            font-bold
            text-gray-900
            dark:text-white
            "
          >

            Hello {order.name} 👋

          </h2>





          <p className="mt-4">

            <b>Order ID:</b>

          </p>


          <p
            className="
            text-blue-600
            font-bold
            text-xl
            "
          >

            {order.orderId}

          </p>





          <p className="mt-5">

            <b>Delivery Address:</b>

          </p>


          <p>

            {order.address}

          </p>





          <p className="mt-5">

            <b>Phone:</b> {order.phone}

          </p>




        </div>







        <div
          className="
          mt-6
          bg-gray-100
          dark:bg-gray-800
          rounded-2xl
          p-6
          "
        >


          <h2
            className="
            text-xl
            font-bold
            text-gray-900
            dark:text-white
            mb-4
            "
          >

            Ordered Items 🍔

          </h2>





          {
            order.items.map(
              (item:any,index:number)=>(


                <div
                  key={index}
                  className="
                  flex
                  justify-between
                  mb-3
                  "
                >

                  <span>

                    {item.name}

                  </span>


                  <span
                    className="
                    font-bold
                    text-blue-600
                    "
                  >

                    {item.price}

                  </span>


                </div>


              )
            )
          }





          <hr className="my-4"/>





          <div
            className="
            flex
            justify-between
            text-xl
            font-bold
            "
          >

            <span>

              Total Paid

            </span>


            <span className="text-green-600">

              ₹{order.total}

            </span>


          </div>



        </div>








        <div
          className="
          text-center
          mt-6
          text-lg
          "
        >

          🚴 Estimated Delivery:

          <b> 25-30 minutes</b>


        </div>







        <Link

          href="/menu"

          className="
          block
          text-center
          mt-8
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-4
          rounded-xl
          font-bold
          "

        >

          Continue Ordering 🍔

        </Link>





      </div>



    </main>

  );

}