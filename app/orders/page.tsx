"use client";

import { useEffect, useState } from "react";


export default function OrdersPage() {


  const [orders,setOrders] = useState<any[]>([]);



  useEffect(()=>{


    const savedOrders =
      localStorage.getItem("smartserve-orders");


    if(savedOrders){

      setOrders(JSON.parse(savedOrders));

    }


  },[]);





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

        📦 My Orders

      </h1>





      {
        orders.length === 0 ? (

          <p
            className="
            text-center
            mt-20
            text-2xl
            "
          >

            No orders found 😔

          </p>


        ) : (


        <div
          className="
          max-w-3xl
          mx-auto
          mt-12
          "
        >



        {
          orders.map((order,index)=>(


            <div
              key={index}
              className="
              bg-white
              dark:bg-gray-900
              rounded-3xl
              shadow-lg
              p-8
              mb-6
              "
            >



              <div className="flex justify-between">

                <h2 className="font-bold text-xl">

                  Order ID

                </h2>


                <span className="text-blue-600 font-bold">

                  {order.orderId}

                </span>


              </div>






              <div className="mt-6">

                <h3 className="font-bold text-lg">

                  Items 🍔

                </h3>



                {
                  order.items.map(
                    (item:any,i:number)=>(

                    <div
                      key={i}
                      className="
                      flex
                      justify-between
                      mt-3
                      "
                    >

                      <span>

                        {item.name}

                      </span>


                      <span className="text-blue-600 font-bold">

                        {item.price}

                      </span>


                    </div>

                    )
                  )
                }


              </div>







              <div className="mt-6 border-t pt-5">


                <p>

                  👤 <b>{order.name}</b>

                </p>



                <p className="mt-2">

                  📍 <b>Address:</b> {order.address}

                </p>



                <p className="mt-2">

                  📞 <b>Phone:</b> {order.phone}

                </p>





                <p className="mt-3">

                  🚴 <b>Status:</b>

                  <span
                    className="
                    ml-2
                    text-green-600
                    font-bold
                    "
                  >

                    {order.status}

                  </span>


                </p>






                <p className="mt-3">

                  ⏱ Estimated Delivery:

                  <b> 25-30 minutes</b>

                </p>





                <p className="mt-4 text-xl font-bold">

                  Total:

                  <span className="text-blue-600">

                    {" "}₹{order.total}

                  </span>


                </p>



              </div>




            </div>


          ))
        }



        </div>


        )
      }





    </main>

  );

}