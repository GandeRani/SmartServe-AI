import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
  try {
    console.log("Starting menu fetch...");

    const menuItems = await prisma.menuItem.findMany({
      where: {
        available: true,
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        category: true,
        image: true,
        available: true,
      },
      orderBy: {
        id: "asc",
      },
    });

    console.log("Menu fetched:", menuItems.length);

    return NextResponse.json(
      {
        success: true,
        data: menuItems,
      },
      {
        status: 200,
      }
    );

  } catch (error: any) {

    console.error("MENU ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        type: error.name,
      },
      {
        status: 500,
      }
    );
  }
}