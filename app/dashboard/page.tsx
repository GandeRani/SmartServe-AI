export default function DashboardPage() {


  const stats = [
    {
      title: "Total Orders",
      value: "128",
      icon: "🍽️"
    },
    {
      title: "Average Waiting Time",
      value: "12 min",
      icon: "⏱️"
    },
    {
      title: "Inventory Alerts",
      value: "5",
      icon: "📦"
    },
    {
      title: "Today's Revenue",
      value: "₹24,500",
      icon: "💰"
    }
  ];



  return (

    <main className="min-h-screen p-10">


      <h1 className="text-4xl font-bold">
        Restaurant Dashboard 📊
      </h1>


      <p className="mt-3">
        AI-powered insights for restaurant operations.
      </p>



      <div className="grid md:grid-cols-4 gap-6 mt-10">


        {
          stats.map((stat,index)=>(

            <div
              key={index}
              className="card rounded-xl shadow p-6"
            >

              <div className="text-4xl">
                {stat.icon}
              </div>


              <h2 className="mt-4 font-semibold">
                {stat.title}
              </h2>


              <p className="text-3xl font-bold mt-2">
                {stat.value}
              </p>


            </div>

          ))
        }


      </div>




      <div className="grid md:grid-cols-2 gap-6 mt-10">


        <div className="card rounded-xl shadow p-6">

          <h2 className="text-2xl font-bold">
            AI Insights 🤖
          </h2>


          <p className="mt-4">
            🔥 Peak customer hours: 12 PM - 2 PM
          </p>

          <p>
            📈 Increase pizza preparation capacity
          </p>

          <p>
            ⚠️ Chicken inventory may run low today
          </p>


        </div>




        <div className="card rounded-xl shadow p-6">

          <h2 className="text-2xl font-bold">
            Order Status
          </h2>


          <p className="mt-4">
            🟢 Completed Orders: 86
          </p>

          <p>
            🟡 Preparing Orders: 24
          </p>

          <p>
            🔴 Delayed Orders: 18
          </p>


        </div>


      </div>


    </main>

  );

}