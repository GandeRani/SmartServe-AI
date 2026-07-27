"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


export default function CartPage() {


  const [cart,setCart] = useState<any[]>([]);
  const [loading,setLoading] = useState(true);




  async function loadCart(){


    try{


      const res = await fetch(
        "/api/cart",
        {
          cache:"no-store"
        }
      );


      const data = await res.json();



      if(Array.isArray(data)){

        setCart(data);

      }
      else{

        setCart([]);

      }



    }
    catch(error){


      console.log(
        "Cart fetch error:",
        error
      );


      setCart([]);


    }
    finally{


      setLoading(false);


    }


  }







  useEffect(()=>{


    loadCart();


  },[]);









  async function removeItem(id:number){


    console.log(
      "Deleting cart item:",
      id
    );



    try{


      const res = await fetch(

        `/api/cart/${id}`,

        {
          method:"DELETE"
        }

      );



      const data = await res.json();



      console.log(
        "Delete response:",
        data
      );





      if(res.ok){


        await loadCart();



        window.dispatchEvent(
          new Event("cartUpdated")
        );


      }
      else{


        alert(
          "Failed to remove item"
        );


      }



    }
    catch(error){


      console.log(
        "Remove error:",
        error
      );


    }


  }







  const total = cart.reduce(

    (sum,item)=>

      sum +
      item.menu.price *
      item.quantity,

    0

  );







  if(loading){


    return (

      <main className="min-h-screen flex items-center justify-center">


        <h1 className="text-2xl">

          Loading Cart...

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




      <h1

        className="
        text-5xl
        font-bold
        text-center
        text-gray-900
        dark:text-white
        "

      >

        🛒 Your Cart

      </h1>








      {
        cart.length === 0 ?


        (

          <div className="text-center mt-20">


            <p className="text-2xl text-gray-600 dark:text-gray-300">

              Cart is empty 😔

            </p>




            <Link

              href="/menu"

              className="
              inline-block
              mt-6
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-xl
              "

            >

              Go To Menu 🍽️


            </Link>


          </div>


        )


        :



        (

          <div className="max-w-4xl mx-auto mt-12">





            {
              cart.map((item)=>(


                <div

                  key={item.id}

                  className="
                  bg-white
                  dark:bg-gray-900
                  rounded-2xl
                  shadow-lg
                  p-5
                  mb-5
                  flex
                  justify-between
                  items-center
                  "

                >




                  <div className="flex items-center gap-5">


                    <img

                      src={item.menu.image}

                      alt={item.menu.name}

                      className="
                      w-24
                      h-24
                      rounded-xl
                      object-cover
                      "

                    />





                    <div>


                      <h2

                        className="
                        text-xl
                        font-bold
                        text-gray-900
                        dark:text-white
                        "

                      >

                        {item.menu.name}


                      </h2>




                      <p className="text-blue-600 font-bold mt-2">

                        ₹{item.menu.price}

                      </p>




                      <p>

                        Quantity: {item.quantity}

                      </p>



                    </div>


                  </div>







                  <button


                    onClick={()=>removeItem(item.id)}


                    className="
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    px-5
                    py-2
                    rounded-xl
                    "

                  >

                    Remove


                  </button>




                </div>


              ))
            }









            <div

              className="
              bg-white
              dark:bg-gray-900
              rounded-2xl
              shadow-lg
              p-8
              mt-8
              "

            >



              <div

                className="
                flex
                justify-between
                text-xl
                font-bold
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







              <Link

                href="/checkout"

                className="
                block
                text-center
                mt-6
                bg-green-600
                hover:bg-green-700
                text-white
                py-4
                rounded-xl
                font-bold
                "

              >

                Proceed To Checkout 💳


              </Link>




            </div>





          </div>


        )

      }






    </main>

  );


}