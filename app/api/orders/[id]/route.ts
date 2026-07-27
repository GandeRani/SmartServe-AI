import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";


// UPDATE ORDER STATUS

export async function PATCH(
  request: Request,
  context: {
    params: Promise<{ id: string }>
  }
) {

  try {


    const { id } = await context.params;


    const body = await request.json();


    console.log("UPDATE ID:", id);

    console.log("UPDATE BODY:", body);



    if(!body.status){

      return NextResponse.json(
        {
          error:"Status is required"
        },
        {
          status:400
        }
      );

    }



    const order = await prisma.order.update({

      where: {

        id: Number(id)

      },


      data: {

        status: body.status

      }


    });



    return NextResponse.json({

      message:"Order status updated",

      order

    });


  }


  catch(error:any){


    console.log(
      "PATCH ERROR:",
      error
    );


    return NextResponse.json(

      {
        error:error.message
      },

      {
        status:500
      }

    );


  }

}