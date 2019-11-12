

// This file empties the menus collection and inserts the menus below



const menu = [
  {
    _id: 1,
    item: "Stella",
    category: "drink",
    subCategory: "Beer",
    description: "Stella Artois is a classic Belgian lager, golden in color with a floral, hop aroma, well-balanced fruity malty sweetness, crisp hop bitterness and a soft dry finish. All natural ingredients give Stella Artois a clean, crisp palate.",
    img:"",
    video: "",
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
    video: "",
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
    video: "",
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
    video: "",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 5,
    item: "Freemark Chardonnay",
    category: "drink",
    subCategory: "wine",
    description: "The 2016 Chardonnay is scented of baked pears, ripe apples and dried herbs with touches of cedar, and cinnamon toast. Full-bodied, rich and with a pleasantly oily texture, it is jam packed with ripe apple and toasty layers, finishing long.",
    img:"",
    video: "",
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
    video: "",
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
    video: "",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 8,
    item: "Charred Jalapeño Margarita",
    category: "drink",
    subCategory: "cocktail",
    description: "Hornitos reposado tequila, Ancho Reyes, Triple Sec, charred jalapeno and fresh lime",
    img:"",
    video: "",
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
    video: "",
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
    video: "",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 11,
    item: "BBQ Ribs + Cajun Chicken",
    category: "food",
    subCategory: "entrees",
    description: "Tender pork, braised low and slow plated with blackened full breast of chicken, garlic butter with warm potato salad, smoky bacon, coleslaw ",
    img:"",
    video: "",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 12,
    item: "Mediterranean Sea Bass",
    category: "food",
    subCategory: "entrees",
    description: "Pan seared with caramelized onion, potato, cauliflower, basil puree, pesto, sweet pepper broth ",
    img:"",
    video: "",
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
    video: "",
    date: new Date(Date.now()),
    price: 10
  },
  {
    _id: 14,
    item: "NYC Blueberry Cheesecake",
    category: "food",
    subCategory: "desert",
    description: "Fresh cheescake,cracker crust, whipped chantilly cream",
    video: "",
    img:"",
    date: new Date(Date.now()),
    price: 10
  },]
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
