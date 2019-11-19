import React from "./node_modules/react";
import Youtube from "./node_modules/react-youtube"

function Corousel(props) {
  return (
<div className="bd-example">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    
    <div className="carousel-inner">
      {props.result.map((item,index)=><div key={`slide-${index}`} className={`carousel-item ${index==0&&'active'}`}>
        <Youtube videoId={item.videoId} className="d-block w-100" alt="..."/>
          <h5>{item.item}</h5>
          <p>{item.description}</p>
      </div>)}

      <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
</div>
</div>
  );
}

export default Corousel;