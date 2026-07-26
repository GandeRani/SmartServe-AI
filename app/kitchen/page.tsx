"use client";

import { useEffect, useState } from "react";


export default function KitchenPage() {


  const [orders,setOrders] = useState<any[]>([]);



  useEffect(()=>{

    const savedOrders =
      localStorage.getItem("smartserve-orders");


    if(savedOrders){

      const data = JSON.parse(savedOrders);


      const updatedOrders = data.map((order:any)=>({

        ...order,

        priority:
          order.waiting > 10
          ? "HIGH 🔴"
          :
          order.waiting >= 5
          ? "MEDIUM 🟡"
          :
          "LOW 🟢"


      }));


      setOrders(updatedOrders);

    }


  },[]);





  const updateStatus = (
    index:number,
    status:string
  )=>{


    const updated = [...orders];


    updated[index].status = status;


    setOrders(updated);



    localStorage.setItem(
      "smartserve-orders",
      JSON.stringify(updated)
    );


  };






  return (

    <main
      className="
      min-h-screen
      bg-gray-100
      dark:bg-gray-950
      p-10
      "
    >


      <h1
        className="
        text-4xl
        font-bold
        text-gray-900
        dark:text-white
        "
      >

        Smart Kitchen Dashboard 👨‍🍳

      </h1>




      <p className="
      mt-3
      text-gray-600
      dark:text-gray-300
      ">

        AI-powered order prioritization and kitchen management

      </p>






      {
        orders.length === 0 ? (

          <p className="mt-10 text-xl">

            No orders available 🍽️

          </p>


        ) : (



          <div
            className="
            grid
            md:grid-cols-3
            gap-8
            mt-10
            "
          >



          {
            orders.map((order,index)=>(


              <div
                key={index}
                className="
                bg-white
                dark:bg-gray-900
                rounded-2xl
                shadow-lg
                p-6
                "
              >



                <h2 className="text-xl font-bold">

                  Order {order.orderId}

                </h2>




                <p className="mt-3">

                  👤 {order.name}

                </p>




                <p className="mt-3 font-bold">

                  🍽️ Items

                </p>



                {
                  order.items.map(
                    (item:any,i:number)=>(

                    <p key={i}>

                      • {item.name} - {item.price}

                    </p>

                    )
                  )
                }




                <p className="mt-3">

                  💰 ₹{order.total}

                </p>




                <p className="mt-2">

                  📍 {order.address}

                </p>




                <p className="mt-2">

                  📞 {order.phone}

                </p>





                <p className="mt-3">

                  ⏱ Waiting:

                  <b> {order.waiting || 5} minutes</b>

                </p>







                <p className="mt-3 font-bold">

                  AI Priority:

                  <span className="ml-2">

                    {
                      order.priority
                    }

                  </span>

                </p>







                <p className="mt-3 font-bold">

                  Status:

                  <span className="ml-2 text-blue-600">

                    {order.status || "New"}

                  </span>

                </p>







                <div className="
                flex
                gap-2
                mt-6
                flex-wrap
                ">


                  <button

                    onClick={()=>
                      updateStatus(
                        index,
                        "Preparing 👨‍🍳"
                      )
                    }

                    className="
                    bg-yellow-500
                    text-white
                    px-4
                    py-2
                    rounded-xl
                    "

                  >

                    Accept

                  </button>





                  <button

                    onClick={()=>
                      updateStatus(
                        index,
                        "Ready 🍱"
                      )
                    }

                    className="
                    bg-green-600
                    text-white
                    px-4
                    py-2
                    rounded-xl
                    "

                  >

                    Ready

                  </button>





                  <button

                    onClick={()=>
                      updateStatus(
                        index,
                        "Delivered 🚴"
                      )
                    }

                    className="
                    bg-blue-600
                    text-white
                    px-4
                    py-2
                    rounded-xl
                    "

                  >

                    Delivered

                  </button>



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