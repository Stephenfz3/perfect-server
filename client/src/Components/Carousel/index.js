import React from "react";
import Youtube from "react-youtube"

function Corousel(props) {
  return (
<div className="bd-example">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
<<<<<<< HEAD
      <li data-target="#carouselExampleCaptions" data-slide-to="0"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1">grgergerg</li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
=======
      <li data-target="1" data-slide-to="0" className="active"></li>
      <li data-target="1" data-slide-to="1"></li>
      <li data-target="1" data-slide-to="2"></li>
>>>>>>> dcf3442f57bd266093de2d7a33ce75aefc1e3bea
    </ol>
    
    <div className="carousel-inner">
<<<<<<< HEAD

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
=======
      {props.result.map((item,index)=><div key={`slide-${index}`} className={`carousel-item ${index===props.currentSlide&&'active'}`}>
        <Youtube videoId={item.videoId} className="d-block w-100" alt="..."/>
          <h5>{item.item}</h5>
          <p>{item.description}</p>
      </div>)}

      <a class="carousel-control-prev" onClick={props.onPrevious} role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>

  <a class="carousel-control-next" onClick={props.onNext} role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
>>>>>>> dcf3442f57bd266093de2d7a33ce75aefc1e3bea
  </div>
</div>
</div>
  );
}

export default Corousel;