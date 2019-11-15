import React, { Component } from 'react';
import API from "../../utils/API";

class Detail extends Component {
  
  
state= {
  
}

    async componentDidMount() {
        let newState  = await this.props.location.state;
      this.setState({...newState, current: "Apps"})
      await this.state.desserts.map(app=>  (
          this.outside(app)
      ))
      }

      outside = (id) => {
        API.getDetails(id)
          .then(res=> console.log(res.data))
          .catch(err=>console.log(err))
      }

      // TEST code to be deleted
    //   getDetails = () => {
    //       let detailID = [...this.state.desserts]
    //     detailID.map((detail,index)=>(
    //         API.getDetails(detail)
    //         .then(res=>console.log(res.data))
    //         .catch(err=>console.log(err))
    //     )} 
    //   }
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