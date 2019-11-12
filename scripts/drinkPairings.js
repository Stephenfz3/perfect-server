
const drinkPairings=[
    {
        id:1,
        name:"Beer",
        apetizers:[1,2,3],
        mainCourses:[4,5,6],
        desserts:[7,8,9],
        drinks:[10,11,12]
    },
    {
        id:2,
        name:"Soda",
        apetizers:[1,2,3],
        mainCourses:[4,5,6],
        desserts:[7,8,9],
        drinks:[10,11,12]
    },
    {
        id:3,
        name:"Wine",
        apetizers:[1,2,3],
        mainCourses:[4,5,6],
        desserts:[7,8,9],
        drinks:[10,11,12]
    },
    {
        id:4,
        name:"Cocktails",
        apetizers:[1,2,3],
        mainCourses:[4,5,6],
        desserts:[7,8,9],
        drinks:[10,11,12]
    },
]
module.exports=function(db)
{
db.DrinkPairing
  .remove({})
  .then(() => db.DrinkPairing.collection.insertMany(drinkPairings))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
}