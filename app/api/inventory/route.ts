import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";


// GET ALL INVENTORY ITEMS

export async function GET() {
  try {

    const inventory = await prisma.inventory.findMany({
      orderBy: {
        id: "asc",
      },
    });


    return NextResponse.json(inventory);


  } catch (error: any) {

    console.error("GET INVENTORY ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch inventory",
        details: error.message,
      },
      {
        status: 500,
      }
    );

  }
}




// ADD NEW INVENTORY ITEM

export async function POST(
  request: Request
) {

  try {

    const body = await request.json();


    const item = await prisma.inventory.create({

      data: {

        name: body.name,

        quantity: Number(body.quantity),

        unit: body.unit,

        minStock: Number(body.minStock),

      },

    });


    return NextResponse.json(item, {
      status: 201,
    });



  } catch (error: any) {

    console.error("CREATE INVENTORY ERROR:", error);


    return NextResponse.json(
      {
        error: "Failed to create inventory item",
        details: error.message,
      },
      {
        status: 500,
      }
    );

  }

}