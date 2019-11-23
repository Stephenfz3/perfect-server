import React from "react";
import Youtube from "react-youtube"
import AddButton from "../Carlos/addButton";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import "../Carousel/Carousel.css"
import Detail from "../../Pages/MainPage/index"

function Corousel(props) {
  console.log("HERE" + props.result)




  return (
    <div>

      <MDBCol>
        <MDBCard className="card1" style={{ width: "50rem" }}>

          <MDBCardBody>
            <MDBCardTitle></MDBCardTitle>
            <MDBCardText>
              <div className="bd-example">
                


                  <div className="carousel-inner">
                    {props.result.map((item, index) =>



                      <div key={`slide-${index}`} className={`carousel-item ${index === props.currentSlide && 'active'}`}>

                        {console.log("It" + item.item)}

                        <Youtube videoId={item.videoId} className="d-block w-100" alt="..." />
                        <h5>{item.item}</h5>
                        <p>{item.description}</p>
                        
                        <AddButton onNext={props.onNext} next={props.next} id={item._id} value={item} addToCart={props.addToCart} />

                      </div>)}

                    <a onClick={props.onPrevious} role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next"  role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                      
                    </a>
                  </div>
               
              </div>
              <MDBBtn onClick={props.onPrevious} className="peach-gradient" >Previous</MDBBtn>
              <MDBBtn onClick={props.onNext} className="peach-gradient" >Next</MDBBtn>
              <MDBBtn className="peach-gradient" onClick={(event) => {props.next()}} >Next Category </MDBBtn>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

      </MDBCol>


    </div>


  );
}

export default Corousel;