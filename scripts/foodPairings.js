
const foodPairings=[
    {
        id:1,
        name:"Pasta",
        apetizers:[1,2,3],
        mainCourses:[4,5,6],
        desserts:[7,8,9],
        drinks:[10,11,12]
    },
    {
        id:2,
        name:"Steak",
        apetizers:[1,2,3],
        mainCourses:[4,5,6],
        desserts:[7,8,9],
        drinks:[10,11,12]
    },
    {
        id:3,
        name:"Seafood",
        apetizers:[1,2,3],
        mainCourses:[4,5,6],
        desserts:[7,8,9],
        drinks:[10,11,12]
    },
    {
        id:4,
        name:"Chicken",
        apetizers:[1,2,3],
        mainCourses:[4,5,6],
        desserts:[7,8,9],
        drinks:[10,11,12]
    },
    {
        id:5,
        name:"Veggies",
        apetizers:[1,2,3],
        mainCourses:[4,5,6],
        desserts:[7,8,9],
        drinks:[10,11,12]
    }
]
module.exports=function(db)
{
db.FoodPairing
  .remove({})
  .then(() => db.FoodPairing.collection.insertMany(foodPairings))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
}