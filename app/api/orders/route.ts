import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";



// CREATE ORDER
export async function POST(request: Request) {


  try {


    const body = await request.json();


    const userId = Number(body.userId || 1);



    // Get cart items

    const cartItems = await prisma.cart.findMany({


      where:{


        userId:userId


      },


      include:{


        menu:true


      }


    });





    if(cartItems.length === 0){


      return NextResponse.json(


        {

          error:"Cart is empty"

        },


        {

          status:400

        }


      );


    }







    // Calculate total


    const total = cartItems.reduce(


      (sum,item)=>


        sum + item.menu.price * item.quantity,


      0


    );









    // Create order


    const order = await prisma.order.create({


      data:{


        userId:userId,


        total:total,


        status:"PLACED",



        items:{


          create:

          cartItems.map((item)=>(


            {


              menuId:item.menuId,


              quantity:item.quantity


            }


          ))


        }


      },



      include:{


        items:{


          include:{


            menu:true


          }


        }


      }


    });










    // Clear cart after order


    await prisma.cart.deleteMany({


      where:{


        userId:userId


      }


    });







    return NextResponse.json(


      {


        message:"Order placed successfully",


        order:order


      }


    );





  }



  catch(error:any){



    console.log(

      "ORDER CREATE ERROR:",

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











// GET ORDERS

export async function GET(){



  try{



    const userId = 1;





    const orders = await prisma.order.findMany({



      where:{


        userId:userId


      },




      include:{



        items:{



          include:{



            menu:true



          }


        }


      },




      orderBy:{



        createdAt:"desc"



      }



    });








    return NextResponse.json(orders);




  }




  catch(error:any){





    console.log(

      "FETCH ORDERS ERROR:",

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