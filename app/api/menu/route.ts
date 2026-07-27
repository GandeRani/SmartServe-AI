import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
  try {
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

    return NextResponse.json(
      menuItems,
      {
        status: 200,
      }
    );

  } catch (error: any) {
    console.error("Menu API Error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch menu",
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}