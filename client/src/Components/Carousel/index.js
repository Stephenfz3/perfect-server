import React from "react";
import Youtube from "react-youtube"
import AddButton from "../Carlos/addButton";

function Corousel(props) {
  console.log("HEREeeeee"+props.result[0])
  return (
<div className="bd-example">
  <div id="carouselExampleCaptions" className="carousel" data-ride="">
    <ol className="carousel-indicators">
      <li data-target="1" data-slide-to="0" className="active"></li>
      <li data-target="1" data-slide-to="1"></li>
      <li data-target="1" data-slide-to="2"></li>
    </ol>
    
    <div className="carousel-inner">
      {props.result.map((item,index)=>



      <div key={`slide-${index}`} className={`carousel-item ${index===props.currentSlide&&'active'}`}>

{console.log("It"+item.item)}

        <Youtube videoId={item.videoId} className="d-block w-100" alt="..."/>
          <h5>{item.item}</h5>
          <p>{item.description}</p>
          <AddButton id={item._id} value={item} nextStep={props.nextStep} addToCart={props.addToCart} />
      </div>)}

      <a  onClick={props.onPrevious} role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>

  <a className="carousel-control-next" onClick={props.onNext} role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
</div>
</div>
  );
}

export default Corousel;