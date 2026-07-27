import prisma from "../app/lib/prisma";


async function main() {

  await prisma.inventory.deleteMany();


  await prisma.inventory.createMany({

    data:[

      {
        name:"Cheese",
        quantity:5,
        unit:"kg",
        minStock:3
      },

      {
        name:"Chicken",
        quantity:2,
        unit:"kg",
        minStock:5
      },

      {
        name:"Tomato",
        quantity:1,
        unit:"kg",
        minStock:3
      },

      {
        name:"Flour",
        quantity:10,
        unit:"kg",
        minStock:5
      },

      {
        name:"Burger Buns",
        quantity:20,
        unit:"pcs",
        minStock:10
      }

    ]

  });


}


main()
.then(()=>{

 console.log("Inventory added successfully");

})
.catch((error)=>{

 console.log(error);

})
.finally(async()=>{

 await prisma.$disconnect();

});