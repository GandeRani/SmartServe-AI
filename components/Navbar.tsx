"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useCart } from "@/components/CartContext";


export default function Navbar() {


  const { theme, setTheme } = useTheme();

  const { cart } = useCart();

  const [mounted, setMounted] = useState(false);



  useEffect(() => {

    setMounted(true);

  }, []);




  return (

    <nav
      className="
      sticky
      top-0
      z-50
      flex
      justify-between
      items-center
      px-8
      py-4
      bg-white/80
      dark:bg-gray-900/80
      backdrop-blur-lg
      shadow-md
      "
    >



      {/* Logo */}

      <Link
        href="/"
        className="
        flex
        items-center
        gap-2
        text-2xl
        font-bold
        text-gray-900
        dark:text-white
        "
      >

        🍽️ SmartServe AI

      </Link>





      {/* Navigation */}

      <div
        className="
        flex
        items-center
        gap-8
        "
      >



        <Link
          href="/"
          className="
          text-gray-700
          dark:text-gray-200
          hover:text-blue-600
          transition
          "
        >
          Home
        </Link>





        <Link
          href="/menu"
          className="
          text-gray-700
          dark:text-gray-200
          hover:text-blue-600
          transition
          "
        >
          Menu
        </Link>





        <Link
          href="/kitchen"
          className="
          text-gray-700
          dark:text-gray-200
          hover:text-blue-600
          transition
          "
        >
          Kitchen
        </Link>





        <Link
          href="/dashboard"
          className="
          text-gray-700
          dark:text-gray-200
          hover:text-blue-600
          transition
          "
        >
          Dashboard
        </Link>





        {/* Orders */}

        <Link
          href="/orders"
          className="
          text-gray-700
          dark:text-gray-200
          hover:text-blue-600
          transition
          "
        >
          Orders 📦
        </Link>







        {/* Cart */}

        <Link
          href="/cart"
          className="
          relative
          text-gray-700
          dark:text-gray-200
          hover:text-blue-600
          transition
          "
        >

          🛒 Cart


          {
            cart.length > 0 && (

              <span
                className="
                absolute
                -top-3
                -right-4
                bg-red-500
                text-white
                text-xs
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
                "
              >

                {cart.length}

              </span>

            )
          }


        </Link>







        {/* Login */}

        <button
          className="
          bg-blue-600
          text-white
          px-5
          py-2
          rounded-lg
          hover:bg-blue-700
          transition
          "
        >

          Login

        </button>







        {/* Dark Mode */}

        <button

          onClick={() =>
            setTheme(
              theme === "dark"
              ? "light"
              : "dark"
            )
          }

          className="
          px-4
          py-2
          rounded-lg
          bg-gray-900
          text-white
          dark:bg-white
          dark:text-black
          "

        >

          {
            mounted && theme === "dark"
            ? "☀️"
            : "🌙"
          }


        </button>



      </div>



    </nav>

  );

}