"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function CheckoutPage() {


  const router = useRouter();


  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");

  const [loading,setLoading] = useState(false);





  async function handlePlaceOrder(){


    if(!name || !phone || !address){

      alert("Please fill all details");
      return;

    }



    try{


      setLoading(true);



      const response = await fetch(
        "/api/orders",
        {

          method:"POST",

          headers:{

            "Content-Type":"application/json"

          },


          body:JSON.stringify({

            userId:1,

            name:name,

            phone:phone,

            address:address

          })

        }
      );





      const data = await response.json();



      console.log(
        "ORDER RESPONSE:",
        data
      );





      if(response.ok){


        alert(
          "Order placed successfully 🎉"
        );


        window.dispatchEvent(
          new Event("cartUpdated")
        );



        router.push("/orders");


      }

      else{


        alert(
          data.error || "Order failed"
        );


        console.log(
          "ORDER FAILED:",
          data
        );


      }



    }
    catch(error:any){


      console.log(
        "CHECKOUT ERROR:",
        error.message
      );


      alert(
        "Checkout error: " + error.message
      );


    }
    finally{


      setLoading(false);


    }


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

          onChange={(e)=>
            setName(e.target.value)
          }

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

          onChange={(e)=>
            setPhone(e.target.value)
          }

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

          onChange={(e)=>
            setAddress(e.target.value)
          }

          className="
          w-full
          p-3
          rounded-xl
          border
          mb-6
          dark:bg-gray-800
          dark:text-white
          "

        />








        <button


          onClick={handlePlaceOrder}


          disabled={loading}


          className="
          w-full
          bg-green-600
          hover:bg-green-700
          disabled:bg-gray-400
          text-white
          py-4
          rounded-xl
          text-xl
          font-bold
          "

        >


          {
            loading

            ?

            "Placing Order..."

            :

            "Place Order ✅"

          }


        </button>





      </div>





    </main>

  );

}