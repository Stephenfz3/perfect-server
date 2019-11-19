import React from "react";
import Youtube from "react-youtube"

function Corousel(props) {
  return (
<div className="bd-example">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1">grgergerg</li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">

      {/* first slide */}
      <div className="carousel-item active">
        <Youtube {...props} className="d-block w-100" alt="..."/> 
            <div className="carousel-caption d-none d-md-block">
            <h5>{props.item}</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
      </div>

      {/* second slide */}
      <div className="carousel-item">
        <Youtube {...props} className="d-block w-100" alt="..." onClick={props.onClick}/>
        <div className="carousel-caption d-none d-md-block">
        <h5>{props.item}</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      {/* third slide */}
      <div className="carousel-item">
        <img src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
        <h5>{props.item}</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
  );
}

export default Corousel;