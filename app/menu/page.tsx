"use client";

import { useState } from "react";
import { useCart } from "@/components/CartContext";


export default function MenuPage() {

  const { addToCart } = useCart();

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");


  const menuItems = [

    {
      name: "Chicken Burger",
      image: "/images/Burger.png",
      category: "Burger",
      price: "₹199",
      rating: "⭐⭐⭐⭐⭐",
      time: "15 min",
      description: "Juicy chicken burger with fresh vegetables"
    },

    {
      name: "Margherita Pizza",
      image: "/images/Pizza.png",
      category: "Pizza",
      price: "₹299",
      rating: "⭐⭐⭐⭐⭐",
      time: "20 min",
      description: "Classic cheese pizza with tomato sauce"
    },

    {
      name: "Cold Coffee",
      image: "/images/Cold coffee.png",
      category: "Drinks",
      price: "₹99",
      rating: "⭐⭐⭐⭐",
      time: "5 min",
      description: "Refreshing chilled coffee"
    },

    {
      name: "Pasta",
      image: "/images/Pasta.png",
      category: "Italian",
      price: "₹249",
      rating: "⭐⭐⭐⭐⭐",
      time: "18 min",
      description: "Creamy Italian pasta"
    },

    {
      name: "French Fries",
      image: "/images/French fries.png",
      category: "Snacks",
      price: "₹129",
      rating: "⭐⭐⭐⭐",
      time: "10 min",
      description: "Crispy golden french fries"
    },

    {
      name: "Chocolate Cake",
      image: "/images/Chocolate cake.png",
      category: "Dessert",
      price: "₹199",
      rating: "⭐⭐⭐⭐⭐",
      time: "8 min",
      description: "Soft chocolate dessert"
    }

  ];



  const categories = [
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
      category === "All" ||
      item.category === category;


    const searchMatch =
      item.name
      .toLowerCase()
      .includes(search.toLowerCase());


    return categoryMatch && searchMatch;

  });



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




      {/* Search */}

      <div className="flex justify-center mt-8">

        <input

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

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





      {/* Categories */}

      <div
        className="
        flex
        justify-center
        flex-wrap
        gap-4
        mt-8
        "
      >

        {categories.map((cat)=>(

          <button

            key={cat}

            onClick={()=>setCategory(cat)}

            className={`
            px-5
            py-2
            rounded-xl
            transition

            ${
              category === cat
              ?
              "bg-blue-600 text-white"
              :
              "bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            }

            `}

          >

            {cat}

          </button>

        ))}


      </div>






      {/* Menu Cards */}


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


        {filteredItems.map((item,index)=>(


          <div

            key={index}

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



              <p className="mt-2">

                {item.rating}

              </p>




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

                  {item.price}

                </span>



                <span>

                  ⏱ {item.time}

                </span>


              </div>





              <button

                onClick={()=>{

                  addToCart({

                    name:item.name,

                    price:item.price,

                    image:item.image

                  });

                  alert(`${item.name} added to cart`);

                }}

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


        ))}



      </section>



    </main>

  );

}