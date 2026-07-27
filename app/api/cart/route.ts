import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";


// GET CART ITEMS

export async function GET() {

  try {

    const cart = await prisma.cart.findMany({

      include: {

        menu: true

      },

      orderBy: {

        id: "desc"

      }

    });


    return NextResponse.json(cart);


  } catch(error) {


    console.log(error);


    return NextResponse.json(

      {
        error:"Failed to fetch cart"
      },

      {
        status:500
      }

    );


  }

}






// ADD TO CART

export async function POST(
  request: Request
) {


  try {


    const body = await request.json();


    const userId = body.userId || 1;

    const menuId = body.menuId;

    const quantity = body.quantity || 1;



    // Check existing item

    const existingItem = await prisma.cart.findFirst({

      where: {

        userId:userId,

        menuId:menuId

      }

    });





    let cartItem;




    if(existingItem){


      // increase quantity

      cartItem = await prisma.cart.update({

        where: {

          id: existingItem.id

        },

        data: {

          quantity:
          existingItem.quantity + quantity

        }

      });



    }

    else{


      // create new

      cartItem = await prisma.cart.create({

        data: {

          userId:userId,

          menuId:menuId,

          quantity:quantity

        }

      });



    }




    return NextResponse.json(cartItem);



  }

  catch(error){


    console.log(
      "Cart POST error:",
      error
    );


    return NextResponse.json(

      {
        error:"Failed to add cart item"
      },

      {
        status:500
      }

    );


  }


}