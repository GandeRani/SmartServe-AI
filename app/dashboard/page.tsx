"use client";

import { useEffect, useState } from "react";


export default function DashboardPage(){


  const [stats,setStats] = useState({

    totalOrders:0,

    revenue:0,

    preparing:0,

    delivered:0

  });


  const [loading,setLoading] = useState(true);





  async function loadDashboard(){


    try{


      const response = await fetch(
        "/api/orders",
        {
          cache:"no-store"
        }
      );


      const orders = await response.json();




      const totalOrders = orders.length;



      const revenue = orders.reduce(

        (sum:any,order:any)=>

          sum + order.total,

        0

      );



      const preparing = orders.filter(

        (order:any)=>

          order.status==="PREPARING"

      ).length;




      const delivered = orders.filter(

        (order:any)=>

          order.status==="DELIVERED"

      ).length;




      setStats({

        totalOrders,

        revenue,

        preparing,

        delivered

      });



    }


    catch(error){


      console.log(
        "Dashboard error:",
        error
      );


    }


    finally{


      setLoading(false);


    }


  }








  useEffect(()=>{


    loadDashboard();


  },[]);








  if(loading){


    return (

      <main className="min-h-screen flex items-center justify-center">

        <h1 className="text-2xl font-bold">

          Loading Dashboard...

        </h1>

      </main>

    );


  }








  const cards=[


    {

      title:"Total Orders",

      value:stats.totalOrders,

      icon:"🍽️"

    },


    {

      title:"Revenue",

      value:`₹${stats.revenue}`,

      icon:"💰"

    },


    {

      title:"Preparing Orders",

      value:stats.preparing,

      icon:"👨‍🍳"

    },


    {

      title:"Delivered Orders",

      value:stats.delivered,

      icon:"✅"

    }


  ];









  return(


    <main className="

    min-h-screen

    bg-gray-100

    dark:bg-gray-950

    pt-24

    px-10

    pb-10

    ">


      <h1 className="

      text-5xl

      font-bold

      dark:text-white

      ">

        Restaurant Dashboard 📊

      </h1>




      <p className="mt-4 text-gray-600 dark:text-gray-300">

        AI-powered restaurant insights

      </p>







      <div className="

      grid

      md:grid-cols-4

      gap-6

      mt-10

      ">


      {

        cards.map((card)=>(


          <div

          key={card.title}

          className="

          bg-white

          dark:bg-gray-900

          rounded-2xl

          shadow-lg

          p-6

          ">


            <div className="text-4xl">

              {card.icon}

            </div>



            <h2 className="

            mt-4

            font-bold

            dark:text-white

            ">

              {card.title}

            </h2>



            <p className="

            text-3xl

            font-bold

            mt-3

            text-blue-600

            ">

              {card.value}

            </p>



          </div>


        ))

      }


      </div>








      <div className="

      grid

      md:grid-cols-2

      gap-6

      mt-10

      ">



        <div className="

        bg-white

        dark:bg-gray-900

        rounded-2xl

        shadow-lg

        p-8

        ">


          <h2 className="

          text-2xl

          font-bold

          dark:text-white

          ">

            AI Insights 🤖

          </h2>



          <p className="mt-4">

            🔥 Monitor peak order hours

          </p>


          <p>

            📈 Increase popular food preparation

          </p>


          <p>

            ⚠️ Track inventory automatically

          </p>



        </div>







        <div className="

        bg-white

        dark:bg-gray-900

        rounded-2xl

        shadow-lg

        p-8

        ">



          <h2 className="

          text-2xl

          font-bold

          dark:text-white

          ">

            Live Order Summary 🚚

          </h2>



          <p className="mt-4">

            👨‍🍳 Preparing: {stats.preparing}

          </p>



          <p>

            ✅ Delivered: {stats.delivered}

          </p>



          <p>

            📦 Total: {stats.totalOrders}

          </p>



        </div>



      </div>





    </main>


  );


}