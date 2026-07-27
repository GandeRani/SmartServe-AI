import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
  try {
    const menu = await prisma.menuItem.findMany({
      where: {
        available: true,
      },
    });

    return NextResponse.json(menu);

  } catch (error) {
    console.error("Menu fetch error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch menu",
      },
      {
        status: 500,
      }
    );
  }
}