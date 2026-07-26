"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";


export default function CartPage() {


  const {
    cart,
    removeFromCart
  } = useCart();



  const total = cart.reduce(
    (sum:number, item:any) =>
      sum + Number(item.price.replace("₹","")),
    0
  );




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
        cart.length === 0 ? (


          <div
            className="
            text-center
            mt-20
            "
          >

            <p
              className="
              text-2xl
              text-gray-600
              dark:text-gray-300
              "
            >

              Your cart is empty 😔

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

              Go to Menu 🍽️

            </Link>


          </div>


        ) : (



          <div
            className="
            max-w-4xl
            mx-auto
            mt-12
            "
          >



            {
              cart.map((item:any,index:number)=>(


                <div

                  key={index}

                  className="
                  flex
                  items-center
                  justify-between
                  bg-white
                  dark:bg-gray-900
                  rounded-2xl
                  p-5
                  mb-5
                  shadow-lg
                  "

                >



                  <div
                    className="
                    flex
                    items-center
                    gap-5
                    "
                  >


                    <img

                      src={item.image}

                      alt={item.name}

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

                        {item.name}

                      </h2>




                      <p
                        className="
                        text-blue-600
                        font-bold
                        mt-2
                        "
                      >

                        {item.price}

                      </p>



                    </div>



                  </div>






                  <button

                    onClick={() =>
                      removeFromCart(index)
                    }

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
              p-8
              shadow-lg
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


                <span
                  className="
                  text-blue-600
                  "
                >

                  ₹{total}

                </span>


              </div>







              <Link

                href="/checkout"

                className="
                block
                text-center
                mt-8
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

                Proceed to Checkout 💳

              </Link>



            </div>




          </div>



        )

      }



    </main>


  );

}