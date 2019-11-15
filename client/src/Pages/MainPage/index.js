import React, { Component } from 'react';
import API from "../../utils/API";
class Detail extends Component {
  
  
state= {
  
}


// async componentDidMount() {
//   try {
//     const response = await fetch(`/api/foodpage/:id`);
//     const json = await response.json();
//     this.setState({ data: json });
//   } catch (error) {
//     console.log(error);
//   }


    async componentDidMount() {
      try 
      {
        let newState  = await this.props.location.state;
        this.setState({...newState, current: "Apps"})
        await this.state.desserts.map( app =>  (
             this.outside(app)
        ))
      } catch(err) {
          console.log(err)
        }

      }
      

      outside = (id) => {
        API.getDetails(id)
        .then(  res => console.log(res.data))
        .catch(err=>console.log(err))
      }

    
    render() 
    
    { 
        return ( 
             
            <div>
                <h1>MainPage</h1>
                <h2> {console.log("Main Page",this.state)}</h2>

            

            </div>
         );
    }
}
 
export default Detail;