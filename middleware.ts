import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {


  const pathname = request.nextUrl.pathname;



  // Allow admin login page
  if(pathname === "/admin/login"){

    return NextResponse.next();

  }




  const adminAuth =
    request.cookies.get("adminAuth");




  const protectedRoutes = [
    "/admin",
    "/dashboard/inventory",
    "/dashboard/analytics"
  ];



  const isProtected =
    protectedRoutes.some(

      (route)=>
        pathname.startsWith(route)

    );





  if(isProtected && !adminAuth){


    return NextResponse.redirect(

      new URL(
        "/admin/login",
        request.url
      )

    );


  }





  return NextResponse.next();


}





export const config = {

  matcher:[

    "/admin/:path*",
    "/dashboard/inventory/:path*",
    "/dashboard/analytics/:path*"

  ]

};