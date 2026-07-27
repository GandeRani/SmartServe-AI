import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [
      totalOrders,
      totalSales,
      users,
      menuItems,
      pendingOrders,
      completedOrders,
    ] = await Promise.all([
      prisma.order.count(),

      prisma.order.aggregate({
        _sum: {
          total: true,
        },
      }),

      prisma.user.count(),

      prisma.menuItem.count(),

      prisma.order.count({
        where: {
          status: "Pending",
        },
      }),

      prisma.order.count({
        where: {
          status: "Completed",
        },
      }),
    ]);

    return NextResponse.json({
      totalOrders,
      totalSales: totalSales._sum.total ?? 0,
      users,
      menuItems,
      pendingOrders,
      completedOrders,
    });

  } catch (error: any) {
    console.error("Dashboard API Error:", error);

    return NextResponse.json(
      {
        error: "Dashboard data failed",
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}