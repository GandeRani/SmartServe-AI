"use client";

import { useState } from "react";


export default function AssistantPage(){


  const [message,setMessage] = useState("");

  const [loading,setLoading] = useState(false);


  const [chat,setChat] = useState<any[]>([

    {
      role:"ai",
      text:"Hello 👋 I am SmartServe AI Assistant. Ask me about orders, revenue, popular items, or inventory."
    }

  ]);






  async function sendMessage(){


    if(!message.trim()) return;



    const userMessage = message;



    setChat((prev)=>[

      ...prev,

      {
        role:"user",
        text:userMessage
      }

    ]);



    setMessage("");

    setLoading(true);





    try{


      const response = await fetch(

        "/api/assistant",

        {

          method:"POST",

          headers:{

            "Content-Type":"application/json"

          },

          body:JSON.stringify({

            message:userMessage

          })

        }

      );






      const data = await response.json();





      setChat((prev)=>[


        ...prev,


        {

          role:"ai",

          text:data.reply || "No response available"

        }


      ]);




    }

    catch(error){



      setChat((prev)=>[


        ...prev,


        {

          role:"ai",

          text:"❌ Unable to connect with AI Assistant."

        }


      ]);



      console.log(
        "Assistant error:",
        error
      );



    }


    finally{


      setLoading(false);


    }




  }









  return(


    <main

    className="

    min-h-screen

    bg-gray-100

    dark:bg-gray-950

    pt-24

    px-10

    pb-10

    ">


      <h1

      className="

      text-5xl

      font-bold

      text-center

      dark:text-white

      ">

        🤖 SmartServe AI Assistant

      </h1>







      <div

      className="

      max-w-3xl

      mx-auto

      mt-10

      bg-white

      dark:bg-gray-900

      rounded-3xl

      shadow-xl

      p-6

      ">






        <div

        className="

        h-96

        overflow-y-auto

        space-y-4

        ">


        {


          chat.map((item,index)=>(



            <div

            key={index}

            className={

              item.role==="user"

              ?

              "text-right"

              :

              "text-left"

            }

            >




              <span

              className={

                item.role==="user"

                ?

                "inline-block bg-blue-600 text-white p-3 rounded-xl"

                :

                "inline-block bg-gray-200 dark:bg-gray-800 dark:text-white p-3 rounded-xl"

              }

              >


                {item.text}



              </span>




            </div>



          ))



        }





        {

          loading &&

          <div className="text-left">


            <span className="

            inline-block

            bg-gray-200

            dark:bg-gray-800

            dark:text-white

            p-3

            rounded-xl

            ">

              🤖 Thinking...

            </span>


          </div>


        }



        </div>









        <div

        className="

        flex

        gap-3

        mt-6

        ">


          <input


          value={message}


          onChange={(e)=>

            setMessage(e.target.value)

          }


          onKeyDown={(e)=>{


            if(e.key==="Enter"){

              sendMessage();

            }


          }}


          placeholder="Ask AI about restaurant..."


          className="

          flex-1

          p-3

          border

          rounded-xl

          dark:bg-gray-800

          dark:text-white

          "



          />







          <button


          onClick={sendMessage}


          disabled={loading}


          className="

          bg-blue-600

          text-white

          px-6

          rounded-xl

          font-bold

          disabled:opacity-50

          "


          >


            Send


          </button>






        </div>






      </div>






    </main>


  );


}