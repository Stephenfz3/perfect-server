import React, { Component } from 'react';
import List from "./list";
import Cart from "./cart";
import ReactPlayer from 'react-player';
import Menu from './menu';
import Detail from "../../Pages/MainPage"

class ShoppingCart extends Component {




  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      videos: [{ url: "https://www.youtube.com/watch?v=GMpyIQD_Yd0" },
      { url: "https://www.youtube.com/watch?v=ERX6yz_-ZcA" },
      { url: "https://www.youtube.com/watch?v=AdlIi8jw8fM" },
      ],
      videoIndex: 0,
      menu: [
        {
          item: "Stella",
          category: "drink",
          subCategory: "Beer",
          description: "Stella Artois is a classic Belgian lager, golden in color with a floral, hop aroma, well-balanced fruity malty sweetness, crisp hop bitterness and a soft dry finish. All natural ingredients give Stella Artois a clean, crisp palate.",
          img: "",
          video: "",
          date: new Date(Date.now())
        },
        {
          item: "Amber Waves",
          category: "drink",
          subCategory: "Beer",
          description: "Amber Waves Amber Ale focuses on the malts, but has a nice balance of hop character. Expect a light body with a nice toasted malt characteristic and slight fruitiness.",
          img: "",
          video: "",
          date: new Date(Date.now())
        },
        {
          item: "Lake Sonoma",
          category: "drink",
          subCategory: "wine",
          description: "This Cabernet Sauvignon welcomes you with aromas of cedar, dark cherry compote, and dried tobacco leaves. Deliciously balanced and laced with flavors of blackberry pie, cinnamon, and allspice, this wine maintains approachable tannins and shows through to a savory finish.",
          img: "",
          video: "",
          date: new Date(Date.now())
        },
        {
          item: "ARTEMIS Cabernet Sauvignon",
          category: "drink",
          subCategory: "wine",
          description: "The 2017 ARTEMIS Cabernet Sauvignon offers inviting aromas of ripe raspberry, boysenberry and dark cherry along with hints of cedar and spice. The mid-palate is pleasant and round with flavors of plum, dark chocolate, dried fruit and a touch of toasted oak. The finish is rich and lingering.",
          img: "",
          video: "",
          date: new Date(Date.now())
        },
        {
          item: "Freemark Chardonnay",
          category: "drink",
          subCategory: "wine",
          description: "The 2016 Chardonnay is scented of baked pears, ripe apples and dried herbs with touches of cedar, and cinnamon toast. Full-bodied, rich and with a pleasantly oily texture, it is jam packed with ripe apple and toasty layers, finishing long.",
          img: "",
          video: "",
          date: new Date(Date.now())
        },
        {
          item: "Scarpetta Pinot Grigio",
          category: "drink",
          subCategory: "wine",
          description: "Scarpetta Pinot Grigio showcases some of the best sites in Friuli-Venezia Giulia for this aromatic varietal — starting with the light, gravely soils of the Grave region. This gives it a crisp, clean minerality. Additionally, 30% of our Pinot Grigio is planted on 'Ponca' soil in the Colli Orientali on steep hillsides. The combination of the Grave and Colli Orientali let us produce a wine which has body, bright acidity, and great minerality.",
          img: "",
          video: "",
          date: new Date(Date.now())
        },
        {
          item: "Earls Old Fashioned",
          category: "drink",
          subCategory: "cocktail",
          description: "Makers Mark Old fashioned with sweet demarera sugar topped of with an fresh orange peel and a maraschino cherry",
          img: "",
          video: "",
          date: new Date(Date.now())
        },
        {
          item: "Charred Jalapeño Margarita",
          category: "drink",
          subCategory: "cocktail",
          description: "Hornitos reposado tequila, Ancho Reyes, Triple Sec, charred jalapeno and fresh lime",
          img: "",
          video: "",
          date: new Date(Date.now())
        },
        {
          item: "Leroy's Crispy Ribs",
          category: "food",
          subCategory: "appetizer",
          description: "Earls famous dry ribs, savoury and seasoned with coarse salt and black pepper",
          img: "",
          video: "",
          date: new Date(Date.now())
        },
        {
          item: "Lobster Tostadas",
          category: "food",
          subCategory: "appetizer",
          description: "Sweet Atlantic lobster, avocado, jalapeño crema, pico de gallo",
          img: "",
          video: "",
          date: new Date(Date.now())
        },
        {
          item: "BBQ Ribs + Cajun Chicken",
          category: "food",
          subCategory: "entrees",
          description: "Tender pork, braised low and slow plated with blackened full breast of chicken, garlic butter with warm potato salad, smoky bacon, coleslaw ",
          img: "",
          video: "",
          date: new Date(Date.now())
        },
        {
          item: "Mediterranean Sea Bass",
          category: "food",
          subCategory: "entrees",
          description: "Pan seared with caramelized onion, potato, cauliflower, basil puree, pesto, sweet pepper broth ",
          img: "",
          video: "",
          date: new Date(Date.now())
        },
        {
          item: "Sticky Toffee Chocolate Pudding",
          category: "food",
          subCategory: "desert",
          description: "Housemade warm chocolate cake drizzled with rich chocolate and toffee sauce, served with a scoop of vanilla gelato in a sugar candy basket",
          img: "",
          video: "",
          date: new Date(Date.now())
        },
        {
          item: "NYC Blueberry Cheesecake",
          category: "food",
          subCategory: "desert",
          description: "Fresh cheescake,cracker crust, whipped chantilly cream",
          video: "",
          img: "",
          date: new Date(Date.now())
        },]

    }
  }

  removeFromCart = (index) => {
    const cart = [...this.state.cart]
    cart.splice(index, 1)
    this.setState({ cart })
  }

  addToCart = (item) => {
    const cart = [...this.state.cart, item]
    this.setState({ cart })
    this.props.next();
    
  }

  handleClick = e => {
    if (!e.target.id) {
      const videoIndex = 0;

      this.setState({
        videoIndex
      });
    }
    const videoIndex = e.target.id

    this.setState({
      videoIndex
    });
  };

  render() {

    console.log( "state.menu", this.state.menu );

    const video = this.state.videos[this.state.videoIndex].url;
    return <div>
      <div id="container">

          <Menu menu={this.state.menu}/>;
          
        <List addToCart={this.addToCart} handleClick={this.handleClick} />
        {/* <ReactPlayer url={video} playing /> */}
        <Cart items={this.state.cart} removeFromCart={this.removeFromCart} />
      </div>
    </div>
  }
  ;
}

export default ShoppingCart;
