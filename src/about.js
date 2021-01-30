import React from "react";
import photo4 from "./images/photo4.jpg";

function About() {
  return (
    <div className="About">
      <div className="row">
        <div className="col-md-6 first-row col-md-offset-3">
          <h2>About Pizza</h2>
        </div>
      </div>
      <div className="row second-row">
        <div className="col-md-6 second-rowbox1">
          <img src={photo4} alt="pizza" className="imgfirst" />
        </div>
        <div className="col-md-6 second-rowbox2">
          <h3 className="second-rowbox2texttitle">Delicious Pizza</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
            cupiditate, ipsa iusto quod officiis. Minima voluptatem,
            consequuntur fugiat quos vel ut dicta cum hic iste ex sint earum
            tenetur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
            cupiditate, ipsa iusto quod officiis. Minima voluptatem,
            consequuntur fugiat quos vel ut dicta cum hic iste ex sint earum
            tenetur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
            cupiditate, ipsa iusto quod officiis. Minima voluptatem,
            consequuntur fugiat quos vel ut dicta cum hic iste ex sint earum
            tenetur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
            cupiditate, ipsa iusto quod officiis. Minima voluptatem,
            consequuntur fugiat quos vel ut dicta cum hic iste ex sint earum
            tenetur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
            cupiditate, ipsa iusto quod officiis. Minima voluptatem,
            consequuntur fugiat quos vel ut dicta cum hic iste ex sint earum
            tenetur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
