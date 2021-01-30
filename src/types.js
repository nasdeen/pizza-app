import React from "react";
import photo5 from "./images/photo5.jpg";
import photo6 from "./images/photo6.jpg";
import photo7 from "./images/photo7.jpg";
import photo9 from "./images/photo9.jpg";

function Type() {
  return (
    <div className="Type">
      <div className="row third-row">
        <div className="col-md-6 col-md-offset-3">
          <h2>Pizza Types</h2>
        </div>
      </div>

      <div className="row fourth-row">
        <div className="col-sm-6 col-md-3">
          <div className="thumbnail">
            <img src={photo5} alt="pizza" className="img-responsive" />
            <div className="caption">
              <h3>Vegetarian Pizza</h3>
              <p>
                Lorem ipsum dolor sit amet consectet ur adipisicing elit.
                Consequatur, sed! Enim omnis quo dolores excepturi aliquid
                aspernatur beatae expedita, corporis pariatur ipsum consectetur
                magnam atque laboriosam, impedit maiores ratione ad.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="thumbnail">
            <img src={photo6} alt="pizza" className="img-responsive" />
            <div className="caption">
              <h3>Pepperoni Pizza</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, sed! Enim omnis quo dolores excepturi aliquid
                aspernatur beatae expedita, corporis pariatur ipsum consectetur
                magnam atque laboriosam, impedit maiores ratione ad.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="thumbnail">
            <img src={photo7} alt="pizza" className="img-responsive" />
            <div className="caption">
              <h3>Cheese Pizza</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, sed! Enim omnis quo dolores excepturi aliquid
                aspernatur beatae expedita, corporis pariatur ipsum consectetur
                magnam atque laboriosam, impedit maiores ratione ad.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="thumbnail">
            <img src={photo9} alt="pizza" className="img-four" />
            <div className="caption">
              <h3>Boosu Pizza</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, sed! Enim omnis quo dolores excepturi aliquid
                aspernatur beatae expedita, corporis pariatur ipsum consectetur
                magnam atque laboriosam, impedit maiores ratione ad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Type;
