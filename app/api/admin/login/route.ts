import {NextResponse} from "next/server";


export async function POST(
request:Request
){


const body = await request.json();



const adminPassword = "admin123";



if(body.password === adminPassword){


return NextResponse.json({

success:true

});


}



return NextResponse.json({

success:false

});


}