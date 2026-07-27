import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";


// UPDATE INVENTORY

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    const { id } = await params;

    const body = await request.json();


    const updatedItem = await prisma.inventory.update({

      where: {
        id: Number(id),
      },


      data: {

        name: body.name,

        quantity: body.quantity,

        unit: body.unit,

        minStock: body.minStock,

      },

    });



    return NextResponse.json(updatedItem);



  } catch(error:any) {


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




// DELETE INVENTORY

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {


  try {


    const { id } = await params;



    const deletedItem = await prisma.inventory.delete({

      where:{
        id:Number(id)
      }

    });



    return NextResponse.json({

      message:"Inventory deleted successfully",

      deletedItem

    });



  } catch(error:any) {


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