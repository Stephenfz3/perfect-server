

// This file empties the menus collection and inserts the menus below



const menu = [
  {
    _id: 1,
    item: "Stella",
    category: "drink",
    subCategory: "Beer",
    description: "Stella Artois is a classic Belgian lager, golden in color with a floral, hop aroma, well-balanced fruity malty sweetness, crisp hop bitterness and a soft dry finish. All natural ingredients give Stella Artois a clean, crisp palate.",
    img:"",
    videoId: "Gv1gV8LyKms",
    date: new Date(Date.now()), 
    price: 10
  },
  {
    _id: 2,
    item: "Amber Waves",
    category: "drink",
    subCategory: "Beer",
    description: "Amber Waves Amber Ale focuses on the malts, but has a nice balance of hop character. Expect a light body with a nice toasted malt characteristic and slight fruitiness.",
    img:"",
    videoId: "wH3IcPJdxAg",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 3,
    item: "Lake Sonoma",
    category: "drink",
    subCategory: "wine",
    description: "This Cabernet Sauvignon welcomes you with aromas of cedar, dark cherry compote, and dried tobacco leaves. Deliciously balanced and laced with flavors of blackberry pie, cinnamon, and allspice, this wine maintains approachable tannins and shows through to a savory finish.",
    img:"",
    videoId: "c0holnMELMU",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 4,
    item: "ARTEMIS Cabernet Sauvignon",
    category: "drink",
    subCategory: "wine",
    description: "The 2017 ARTEMIS Cabernet Sauvignon offers inviting aromas of ripe raspberry, boysenberry and dark cherry along with hints of cedar and spice. The mid-palate is pleasant and round with flavors of plum, dark chocolate, dried fruit and a touch of toasted oak. The finish is rich and lingering.",
    img:"",
    videoId: "-f1pWL5Lm6I",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 5,
    item: "Miraval",
    category: "drink",
    subCategory: "wine",
    description: "Made for the owners by the Perrin family of Château de Beaucastel in the Rhône Valley, this wine exhibits great sophistication, with rich caramel and strawberry fruit and spice.",
    img:"",
    videoId: "YvffBi5flGM",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 6,
    item: "Scarpetta Pinot Grigio",
    category: "drink",
    subCategory: "wine",
    description: "Scarpetta Pinot Grigio showcases some of the best sites in Friuli-Venezia Giulia for this aromatic varietal — starting with the light, gravely soils of the Grave region. This gives it a crisp, clean minerality. Additionally, 30% of our Pinot Grigio is planted on 'Ponca' soil in the Colli Orientali on steep hillsides. The combination of the Grave and Colli Orientali let us produce a wine which has body, bright acidity, and great minerality.",
    img:"",
    videoId: "twCOvRooi1A",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 7,
    item: "Earls Old Fashioned",
    category: "drink",
    subCategory: "cocktail",
    description: "Makers Mark Old fashioned with sweet demarera sugar topped of with an fresh orange peel and a maraschino cherry",
    img:"",
    videoId: "9TL6LF2Ked4",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 8,
    item: "Margarita",
    category: "drink",
    subCategory: "cocktail",
    description: "Don Julio blanco tequila, Triple Sec, and fresh lime",
    img:"",
    videoId: "4UwCVGohTFE",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 9,
    item: "Leroy's Crispy Ribs",
    category: "food",
    subCategory: "appetizer",
    description: "Earls famous dry ribs, savoury and seasoned with coarse salt and black pepper",
    img:"",
    videoId: "1WriDiybpUs",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 10,
    item: "Lobster Tostadas",
    category: "food",
    subCategory: "appetizer",
    description: "Sweet Atlantic lobster, avocado, jalapeño crema, pico de gallo",
    img:"",
    videoId: "qPJShXWJD1k",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 11,
    item: "BBQ Ribs",
    category: "food",
    subCategory: "entrees",
    description: "Tender pork, braised low and slow, plated with warm potato salad, smoky bacon, and coleslaw ",
    img:"",
    videoId: "AidcofT1iwg",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 12,
    item: "Scallop risotto",
    category: "food",
    subCategory: "entrees",
    description: "Pan seared with caramelized onion, potato, cauliflower, basil puree, pesto, sweet pepper broth ",
    img:"",
    videoId: "aud1X5t5PE4",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 13,
    item: "Sticky Toffee Chocolate Pudding",
    category: "food",
    subCategory: "desert",
    description: "Housemade warm chocolate cake drizzled with rich chocolate and toffee sauce, served with a scoop of vanilla gelato in a sugar candy basket",
    img:"",
    videoId: "Cn-X2Ti9Xj4",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 14,
    item: "Smore's Cheesecake",
    category: "food",
    subCategory: "desert",
    description: "Fresh cheescake,cracker crust, whipped chantilly cream and toasted marshmallows",
    videoId: "lKVtu-cJbpM",
    img:"",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 15,
    item: "Cheddar Burger",
    category: "food",
    subCategory: "desert",
    description: "Fresh burger made from real cows",
    videoId: "-jsadMXItuQ",
    img:"",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 16,
    item: "Crispy Chicken Sandwich",
    category: "food",
    subCategory: "desert",
    description: "Fresh chicken sandwich made from real turkeys",
    videoId: "ci2_XEeVGyQ",
    img:"",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 17,
    item: "6oz filet",
    category: "food",
    subCategory: "steak",
    description: "Yummy steak, kinda small",
    videoId: "lKVtu-cJbpM",
    img:"",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 18,
    item: "Ahi Tuna Poke Bowl",
    category: "food",
    subCategory: "seafood",
    description: "Fresh raw tuna that sits on a bed of mango, crispy white rice, and garnish with fresh radish coins",
    videoId: "-WZijflqDEg",
    img:"",
    date: new Date(Date.now()),
    price: 10
  },
]
;

module.exports=function(db)
{
  db.Menu
  .remove({})
  .then(() => db.Menu.collection.insertMany(menu))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
}
