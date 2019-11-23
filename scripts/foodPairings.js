
const foodPairings=[
  {
    _id:1,
    name:"Pasta",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWALeTtpuLp8jh5u4SxWLr6o7YDImUe4G34gK1C-o02aRI-20&s",
    apetizers:[1,2,3],
    mainCourses:[4,5,6],
    desserts:[7,8,9],
    drinks:[10,11,12]
},
{
    _id:2,
    name:"Steak",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgs1aEiMKKKO88ncfJoHYv8s5swZtHNAZtOanONstVt_HJeYu&s",
    apetizers:[3,2,1],
    mainCourses:[6,5,4],
    desserts:[7,8,9],
    drinks:[10,11,12]
},
{
    _id:3,
    name:"Seafood",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBqYF6L2hO9nCOKybiEoQ7tsUkv06iyYV_unDt146nFttFe2tow&s",
    apetizers:[1,2,3],
    mainCourses:[4,5,6],
    desserts:[7,8,9],
    drinks:[10,11,12]
},
{
    _id:4,
    name:"Chicken",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4M_0m_c6jz9yi5LbLNdKqUlUT4qTFHvE1zHBkyTaqd1iYVn_xg&s",
    apetizers:[1,2,3],
    mainCourses:[4,5,6],
    desserts:[7,8,9],
    drinks:[10,11,12]
},
{
    _id:5,
    name:"Veggies",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLj-S078o5xGZgpJdwsKV4NEM80MO3WqTtUmihYxUGdyN9MHESqA&s",
    apetizers:[1,2,3],
    mainCourses:[4,5,6],
    desserts:[7,8,9],
    drinks:[10,11,12]
}

]
module.exports=function(db)
{
  const foodPairings=[
    {
      _id:1,
      name:"Burgers & Sandwiches",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWALeTtpuLp8jh5u4SxWLr6o7YDImUe4G34gK1C-o02aRI-20&s",
      description:"burgers yumm",
      apetizers:[9,10,9],
      mainCourses:[11,12,15],
      desserts:[13,14],
      drinks:[1,2,3],
      moreApps:[10,9,10],
      moreDrinks:[4,5,6,7,8],
      moreMain:[16,17,18],
      moreDesserts:[14,13,14]
  },
  {
      _id:2,
      name:"Steak",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgs1aEiMKKKO88ncfJoHYv8s5swZtHNAZtOanONstVt_HJeYu&s",
      apetizers:[3,2,1],    
      description:"yay steaks",
      apetizers:[9,10,9],
      mainCourses:[11,12,15],
      desserts:[13,14],
      drinks:[1,2,3],
      moreApps:[10,9,10],
      moreDrinks:[4,5,6,7,8],
      moreMain:[16,17,18],
      moreDesserts:[14,13,14]
  },
  {
      _id:3,
      name:"Seafood",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBqYF6L2hO9nCOKybiEoQ7tsUkv06iyYV_unDt146nFttFe2tow&s",
      apetizers:[1,2,3],
      description:"seafood",
      apetizers:[9,10,9],
      mainCourses:[11,12,15],
      desserts:[13,14],
      drinks:[1,2,3],
      moreApps:[10,9,10],
      moreDrinks:[4,5,6,7,8],
      moreMain:[16,17,18],
      moreDesserts:[14,13,14]
  },
  {
      _id:4,
      name:"Chicken",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4M_0m_c6jz9yi5LbLNdKqUlUT4qTFHvE1zHBkyTaqd1iYVn_xg&s",
      apetizers:[1,2,3],
      description:"yay chicken",
      apetizers:[9,10,9],
      mainCourses:[11,12,15],
      desserts:[13,14],
      drinks:[1,2,3],
      moreApps:[10,9,10],
      moreDrinks:[4,5,6,7,8],
      moreMain:[16,17,18],
      moreDesserts:[14,13,14]
  },
  
  
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