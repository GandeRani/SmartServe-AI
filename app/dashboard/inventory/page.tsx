"use client";

import { useEffect, useState } from "react";

type InventoryItem = {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  minStock: number;
};


export default function InventoryPage() {


  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);


  const [form, setForm] = useState({

    name: "",
    quantity: 0,
    unit: "",
    minStock: 0

  });



  async function fetchInventory(){

    try{

      const res = await fetch("/api/inventory");

      const data = await res.json();

      setInventory(data);

    }

    catch(error){

      console.log(error);

    }

    finally{

      setLoading(false);

    }

  }




  useEffect(()=>{

    fetchInventory();

  },[]);






  async function addInventory(){


    if(!form.name || !form.unit){

      alert("Please fill all fields");

      return;

    }



    await fetch("/api/inventory",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify(form)

    });



    setForm({

      name:"",
      quantity:0,
      unit:"",
      minStock:0

    });


    setShowForm(false);


    fetchInventory();


  }







  async function deleteInventory(id:number){


    const confirmDelete = confirm(
      "Delete this inventory item?"
    );


    if(!confirmDelete)
      return;



    await fetch(`/api/inventory/${id}`,{

      method:"DELETE"

    });


    fetchInventory();


  }







  const lowStock = inventory.filter(

    item => item.quantity <= item.minStock

  );








  if(loading){

    return(

      <main className="
      min-h-screen 
      bg-gray-950 
      text-white 
      flex 
      items-center 
      justify-center
      ">

        <h1 className="text-3xl font-bold">
          Loading Inventory...
        </h1>


      </main>

    );

  }







  return(


    <main
    className="
    min-h-screen
    bg-gray-950
    text-white
    pt-24
    px-6
    md:px-10
    pb-20
    md:ml-64
    "
    >




      <h1 className="
      text-4xl
      font-bold
      mb-8
      ">

        Inventory Dashboard

      </h1>






      <button

      onClick={()=>setShowForm(!showForm)}

      className="
      bg-blue-600
      hover:bg-blue-700
      px-5
      py-3
      rounded-lg
      mb-8
      "

      >

        + Add Inventory

      </button>







      {
        showForm && (


          <div className="
          bg-gray-900
          rounded-xl
          p-6
          mb-10
          border
          border-gray-800
          ">


            <h2 className="
            text-2xl
            font-bold
            mb-5
            ">

              Add New Item

            </h2>





            <input

            className="
            bg-gray-800
            p-3
            rounded
            w-full
            mb-4
            "

            placeholder="Item name"

            value={form.name}

            onChange={
              e=>setForm({
                ...form,
                name:e.target.value
              })
            }

            />






            <input

            className="
            bg-gray-800
            p-3
            rounded
            w-full
            mb-4
            "

            type="number"

            placeholder="Quantity"

            value={form.quantity}

            onChange={
              e=>setForm({
                ...form,
                quantity:Number(e.target.value)
              })
            }

            />






            <input

            className="
            bg-gray-800
            p-3
            rounded
            w-full
            mb-4
            "

            placeholder="Unit (kg, pcs)"

            value={form.unit}

            onChange={
              e=>setForm({
                ...form,
                unit:e.target.value
              })
            }

            />







            <input

            className="
            bg-gray-800
            p-3
            rounded
            w-full
            mb-5
            "

            type="number"

            placeholder="Minimum Stock"

            value={form.minStock}

            onChange={
              e=>setForm({
                ...form,
                minStock:Number(e.target.value)
              })
            }

            />





            <button

            onClick={addInventory}

            className="
            bg-green-600
            hover:bg-green-700
            px-5
            py-3
            rounded-lg
            "

            >

              Save Item

            </button>



          </div>


        )
      }









      <div className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-6
      mb-10
      ">



        <div className="bg-gray-900 p-6 rounded-xl">

          <p className="text-gray-400">
            Total Items
          </p>

          <h2 className="text-5xl font-bold mt-3">

            {inventory.length}

          </h2>

        </div>






        <div className="bg-gray-900 p-6 rounded-xl">

          <p className="text-gray-400">
            Low Stock
          </p>


          <h2 className="
          text-5xl
          font-bold
          mt-3
          text-red-400
          ">

            {lowStock.length}

          </h2>

        </div>






        <div className="bg-gray-900 p-6 rounded-xl">

          <p className="text-gray-400">
            Status
          </p>


          <h2 className="
          text-5xl
          font-bold
          mt-3
          text-green-400
          ">

            Active

          </h2>


        </div>



      </div>









      <div className="
      bg-gray-900
      rounded-xl
      p-6
      overflow-x-auto
      ">


        <h2 className="
        text-2xl
        font-bold
        mb-6
        ">

          Current Inventory

        </h2>





        <table className="w-full">


          <thead>


            <tr className="
            border-b
            border-gray-700
            text-gray-400
            ">


              <th className="p-4 text-left">
                Name
              </th>


              <th className="p-4 text-left">
                Quantity
              </th>


              <th className="p-4 text-left">
                Unit
              </th>


              <th className="p-4 text-left">
                Status
              </th>


              <th className="p-4 text-left">
                Action
              </th>



            </tr>


          </thead>





          <tbody>


          {
            inventory.length===0 ?


            <tr>

              <td 
              colSpan={5}
              className="
              text-center
              py-10
              text-gray-400
              "
              >

                No Inventory Found

              </td>


            </tr>



            :



            inventory.map(item=>(


              <tr

              key={item.id}

              className="
              border-b
              border-gray-800
              hover:bg-gray-800
              "

              >



                <td className="p-4">

                  {item.name}

                </td>




                <td className="p-4">

                  {item.quantity}

                </td>





                <td className="p-4">

                  {item.unit}

                </td>





                <td className="p-4">


                {
                  item.quantity <= item.minStock ?


                  <span className="text-red-400 font-bold">

                    Low Stock

                  </span>


                  :


                  <span className="text-green-400 font-bold">

                    Good

                  </span>


                }


                </td>






                <td className="p-4">


                  <button

                  onClick={()=>deleteInventory(item.id)}

                  className="
                  bg-red-600
                  hover:bg-red-700
                  px-4
                  py-2
                  rounded
                  "

                  >

                    Delete

                  </button>


                </td>



              </tr>


            ))

          }



          </tbody>



        </table>



      </div>





    </main>


  );


}