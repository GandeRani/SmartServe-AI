import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";


// ===============================
// GET ALL ORDERS (ADMIN)
// ===============================

export async function GET() {

  try {

    const orders = await prisma.order.findMany({

      include: {

        items: {

          include: {

            menu: true

          }

        },

        user: true

      },


      orderBy: {

        createdAt: "desc"

      }

    });



    return NextResponse.json(orders);


  } catch (error:any) {


    console.log(
      "Admin orders GET error:",
      error.message
    );


    return NextResponse.json(

      {
        error:"Failed to fetch orders"
      },

      {
        status:500
      }

    );

  }

}





// ===============================
// UPDATE ORDER STATUS
// ===============================


export async function PUT(
  request:Request
) {


  try {


    const body = await request.json();



    if(!body.id || !body.status){

      return NextResponse.json(

        {
          error:"Order id and status required"
        },

        {
          status:400
        }

      );

    }




    const updatedOrder = await prisma.order.update({

      where:{

        id:Number(body.id)

      },


      data:{

        status:body.status

      }


    });




    return NextResponse.json(updatedOrder);



  } catch(error:any){


    console.log(
      "Admin order update error:",
      error.message
    );


    return NextResponse.json(

      {
        error:"Failed to update order status"
      },

      {
        status:500
      }

    );


  }

}