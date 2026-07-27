"use client";

import { useState } from "react";


export default function AddInventory() {


  const [name,setName] = useState("");
  const [quantity,setQuantity] = useState("");
  const [unit,setUnit] = useState("");
  const [minStock,setMinStock] = useState("");



  async function addItem(e:React.FormEvent){

    e.preventDefault();


    const res = await fetch("/api/inventory",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({

        name,
        quantity:Number(quantity),
        unit,
        minStock:Number(minStock)

      })

    });



    if(res.ok){

      alert("Inventory Added");

      window.location.reload();

    }


  }



  return (

    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mt-10">


      <h2 className="text-2xl font-bold mb-5">
        Add Inventory Item
      </h2>



      <form 
      onSubmit={addItem}
      className="grid gap-4"
      >


        <input

        className="bg-gray-800 p-3 rounded"

        placeholder="Item Name"

        value={name}

        onChange={(e)=>setName(e.target.value)}

        />



        <input

        className="bg-gray-800 p-3 rounded"

        placeholder="Quantity"

        type="number"

        value={quantity}

        onChange={(e)=>setQuantity(e.target.value)}

        />




        <input

        className="bg-gray-800 p-3 rounded"

        placeholder="Unit (kg, pcs)"

        value={unit}

        onChange={(e)=>setUnit(e.target.value)}

        />




        <input

        className="bg-gray-800 p-3 rounded"

        placeholder="Minimum Stock"

        type="number"

        value={minStock}

        onChange={(e)=>setMinStock(e.target.value)}

        />




        <button

        className="bg-blue-600 hover:bg-blue-700 p-3 rounded font-bold"

        >

        Add Item

        </button>



      </form>


    </div>


  );


}