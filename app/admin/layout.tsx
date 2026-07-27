import AdminSidebar from "@/components/AdminSidebar";


export default function AdminLayout({

children,

}:{

children:React.ReactNode;

}){


return(


<div>


<AdminSidebar />


<main className="
md:ml-64
">


{children}


</main>



</div>


);


}