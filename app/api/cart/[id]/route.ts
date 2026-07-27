import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";


// DELETE CART ITEM

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id:string }> }
){

  try{


    const {id} = await context.params;



    const cartId = Number(id);



    const cartItem = await prisma.cart.findUnique({

      where:{
        id:cartId
      }

    });



    if(!cartItem){


      return NextResponse.json(

        {
          error:"Cart item not found"
        },

        {
          status:404
        }

      );


    }





    await prisma.cart.delete({

      where:{

        id:cartId

      }

    });





    return NextResponse.json(

      {
        message:"Item removed from cart"
      }

    );



  }
  catch(error:any){


    console.log(

      "DELETE ERROR:",
      error.message

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