"use client";

import { useEffect, useState } from "react";


export default function MenuPage() {


  const [menuItems,setMenuItems] = useState<any[]>([]);

  const [category,setCategory] = useState("All");

  const [search,setSearch] = useState("");




  useEffect(()=>{


    async function loadMenu(){


      try{


        const res = await fetch("/api/menu");

        const data = await res.json();

        setMenuItems(data);


      }
      catch(error){

        console.log(
          "Menu loading error",
          error
        );

      }


    }


    loadMenu();


  },[]);






  const categories=[

    "All",
    "Pizza",
    "Burger",
    "Drinks",
    "Italian",
    "Snacks",
    "Dessert"

  ];







  const filteredItems = menuItems.filter((item)=>{


    const categoryMatch =
      category==="All" ||
      item.category===category;



    const searchMatch =
      item.name
      .toLowerCase()
      .includes(
        search.toLowerCase()
      );



    return categoryMatch && searchMatch;


  });









  async function addToCart(item:any){


    try{


      const response = await fetch(
        "/api/cart",
        {

          method:"POST",

          headers:{

            "Content-Type":"application/json"

          },


          body:JSON.stringify({

            userId:1,

            menuId:item.id,

            quantity:1

          })


        }
      );




      if(response.ok){


        alert(
          `${item.name} added to cart 🛒`
        );


        // update navbar count immediately

        window.dispatchEvent(
          new Event("cartUpdated")
        );


      }
      else{


        alert(
          "Failed to add cart item"
        );


      }


    }
    catch(error){


      console.log(
        "Cart error",
        error
      );


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

        SmartServe Menu 🍽️

      </h1>





      <p

        className="
        text-center
        mt-4
        text-gray-600
        dark:text-gray-300
        "

      >

        Choose your favourite dishes

      </p>







      <div className="flex justify-center mt-8">


        <input


          value={search}


          onChange={(e)=>
            setSearch(e.target.value)
          }


          placeholder="Search food..."


          className="
          w-full
          md:w-96
          px-5
          py-3
          rounded-xl
          border
          bg-white
          dark:bg-gray-900
          text-gray-900
          dark:text-white
          "


        />


      </div>









      <div

        className="
        flex
        justify-center
        flex-wrap
        gap-4
        mt-8
        "

      >


        {
          categories.map((cat)=>(


            <button


              key={cat}


              onClick={()=>
                setCategory(cat)
              }


              className={`

              px-5
              py-2
              rounded-xl

              ${
                category===cat

                ?

                "bg-blue-600 text-white"

                :

                "bg-white dark:bg-gray-900 text-gray-900 dark:text-white"

              }

              `}


            >

              {cat}


            </button>


          ))
        }


      </div>









      <section

        className="
        grid
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-8
        mt-12
        "

      >



        {
          filteredItems.map((item)=>(


            <div


              key={item.id}


              className="
              bg-white
              dark:bg-gray-900
              rounded-2xl
              shadow-lg
              overflow-hidden
              hover:-translate-y-2
              transition
              "


            >




              <img


                src={item.image}


                alt={item.name}


                className="
                w-full
                h-48
                object-cover
                "


              />







              <div className="p-6">



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
                  mt-3
                  text-gray-600
                  dark:text-gray-300
                  "

                >

                  {item.description}

                </p>







                <div

                  className="
                  flex
                  justify-between
                  mt-4
                  "

                >


                  <span className="font-bold text-blue-600">

                    ₹{item.price}

                  </span>



                  <span>

                    {item.category}

                  </span>


                </div>







                <button


                  onClick={()=>
                    addToCart(item)
                  }


                  className="
                  mt-5
                  w-full
                  bg-blue-600
                  text-white
                  py-3
                  rounded-xl
                  hover:bg-blue-700
                  transition
                  "


                >

                  Add to Cart 🛒


                </button>




              </div>



            </div>



          ))
        }



      </section>





    </main>

  );


}