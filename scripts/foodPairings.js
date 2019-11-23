
const foodPairings=[
  {
    _id:1,
    name:"Burgers & Sandwiches",
    image:"https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/classic-burgers-u.jpg?itok=lq9oRO3h",
    description:"View different sandwiches",
    apetizers:[9,10,11],
    mainCourses:[4,5,6],
    desserts:[7,8,9],
    drinks:[10,11,12]
},
{
    _id:2,
    name:"Steak",
    image:"https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2017/06/main/steak_3.jpg?itok=R_ZQfX-H",
    apetizers:[3,2,1],    
    description:"View dishes that contain steak",
    mainCourses:[6,5,4],
    desserts:[7,8,9],
    drinks:[10,11,12]
},
{
    _id:3,
    name:"Seafood",
    image:"https://www.chicagotribune.com/resizer/Is-gr729eXu8rkMLB2aB0tgNn2c=/800x531/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/G5HNSLBA4ZCZZGIW5A4CF55IP4.jpg",
    apetizers:[1,2,3],
    description:"View dishes that contain seafood",
    mainCourses:[4,5,6],
    desserts:[7,8,9],
    drinks:[10,11,12]
},
{
    _id:4,
    name:"Chicken",
    image:"https://previews.123rf.com/images/lenyvavsha/lenyvavsha1510/lenyvavsha151000190/46106232-gourmet-food-chicken-general-tso-s-with-rice-onions-and-broccoli-close-up-on-a-plate-horizontal.jpg",
    apetizers:[1,2,3],
    description:"View dishes that contain chicken",
    mainCourses:[4,5,6],
    desserts:[7,8,9],
    drinks:[10,11,12]
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