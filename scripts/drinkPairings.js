
const drinkPairings=[
  {
    _id:1,
    name:"Beer",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzorUyrlMXXuIax4_NJ5Z5fp3DMSj64VjJ0H-niHmE9xubA5evcQ&s",
    apetizers:[1,2,3],
    mainCourses:[4,5,6],
    desserts:[7,8,9],
    drinks:[10,11,12]
},
{
    _id:2,
    name:"Soda",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgI10-kUWxfykWSf5iXGJW5tMkJoBGa860nX1HmDwHQCs8bZ7D&s",
    apetizers:[1,2,3],
    mainCourses:[4,5,6],
    desserts:[7,8,9],
    drinks:[10,11,12]
},
{
    _id:3,
    name:"Wine",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDt_id9sUQqgOV-D-dK1BkNX6w7lKq-gxoJLGJ0UZhsK1vTYfJW&s",
    apetizers:[1,2,3],
    mainCourses:[4,5,6],
    desserts:[7,8,9],
    drinks:[10,11,12]
},
{
    _id:4,
    name:"Cocktails",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDO2329cJnjjsqduzXxOlAeUudPjZew31kdM244ZWopMGw8JAgdQ&s",
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