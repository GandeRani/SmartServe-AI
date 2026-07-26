export default function Home() {

  const features = [
    {
      icon: "👨‍🍳",
      title: "AI Kitchen Assistant",
      text: "Automatically prioritize orders and help chefs reduce preparation time."
    },
    {
      icon: "📦",
      title: "Smart Inventory",
      text: "Predict stock requirements and prevent food wastage using AI."
    },
    {
      icon: "📊",
      title: "Business Intelligence",
      text: "Analyze revenue, customer trends, and restaurant performance."
    }
  ];


  return (

    <main className="min-h-screen bg-gray-100 dark:bg-gray-950">


      {/* Hero Section */}

      <section
        className="
        grid md:grid-cols-2
        gap-10
        items-center
        px-10
        py-24
        bg-gradient-to-br
        from-blue-700
        via-purple-600
        to-indigo-700
        "
      >


        {/* Left Content */}

        <div>


          <h1
            className="
            text-5xl
            md:text-6xl
            font-bold
            text-white
            leading-tight
            "
          >

            Smart Restaurant
            <br />
            Management
            <br />
            Powered by AI 🤖

          </h1>



          <p
            className="
            mt-6
            text-lg
            text-blue-100
            max-w-xl
            "
          >

            SmartServe AI helps restaurants automate kitchen operations,
            optimize inventory, and make data-driven decisions in real time.

          </p>




          <div className="mt-8 flex gap-5">


            <a
              href="/menu"
              className="
              bg-white
              text-blue-700
              px-7 py-3
              rounded-xl
              font-semibold
              hover:scale-105
              transition
              "
            >
              Explore Menu 🍽️
            </a>



            <a
              href="/dashboard"
              className="
              border
              border-white
              text-white
              px-7 py-3
              rounded-xl
              hover:bg-white
              hover:text-blue-700
              transition
              "
            >
              View Dashboard 📊
            </a>


          </div>


        </div>





        {/* AI Dashboard Preview */}

        <div
          className="
          bg-white/20
          backdrop-blur-lg
          rounded-3xl
          p-8
          shadow-2xl
          "
        >


          <div
            className="
            bg-white
            dark:bg-gray-900
            rounded-2xl
            p-6
            "
          >


            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              AI Restaurant Assistant
            </h2>


            <div className="mt-6 space-y-4">


              <div className="p-4 rounded-xl bg-blue-100 dark:bg-gray-800">

                🍔 Order #101

                <p className="text-sm">
                  Priority: HIGH
                </p>

              </div>



              <div className="p-4 rounded-xl bg-purple-100 dark:bg-gray-800">

                📦 Inventory Alert

                <p className="text-sm">
                  Chicken stock running low
                </p>

              </div>




              <div className="p-4 rounded-xl bg-green-100 dark:bg-gray-800">

                📈 Revenue Prediction

                <p className="text-sm">
                  +18% growth expected
                </p>

              </div>



            </div>


          </div>


        </div>


      </section>






      {/* Statistics */}

      <section className="grid md:grid-cols-3 gap-6 px-10 mt-16">


        <Stat number="10K+" text="Orders Managed"/>

        <Stat number="99%" text="AI Accuracy"/>

        <Stat number="24/7" text="Smart Monitoring"/>


      </section>






      {/* Features */}

      <section className="grid md:grid-cols-3 gap-6 p-10 mt-10">


        {
          features.map((feature,index)=>(

            <div
              key={index}
              className="
              bg-white
              dark:bg-gray-900
              rounded-2xl
              shadow-lg
              p-6
              hover:-translate-y-2
              transition
              "
            >

              <div className="text-4xl">
                {feature.icon}
              </div>


              <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">

                {feature.title}

              </h2>


              <p className="mt-3 text-gray-600 dark:text-gray-300">

                {feature.text}

              </p>


            </div>

          ))
        }


      </section>


    </main>

  );
}





function Stat(
  {
    number,
    text
  }:
  {
    number:string,
    text:string
  }
){

  return (

    <div
      className="
      bg-white
      dark:bg-gray-900
      rounded-2xl
      shadow
      p-8
      text-center
      "
    >

      <h2 className="text-4xl font-bold text-blue-600">
        {number}
      </h2>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {text}
      </p>

    </div>

  );

}