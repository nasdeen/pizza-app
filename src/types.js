import React from "react";
import photo5 from "./images/photo5.jpg";
import photo6 from "./images/photo6.jpg";
import photo7 from "./images/photo7.jpg";
import photo9 from "./images/photo9.jpg";

function Type() {
  return (
    <div className="Type">
      <div class="row third-row">
        <div class="col-md-6 col-md-offset-3">
          <h2>Pizza Types</h2>
        </div>
      </div>

      <div class="row fourth-row">
        <div class="col-sm-6 col-md-3">
          <div class="thumbnail">
            <img src={photo5} alt="pizza" class="img-responsive" />
            <div class="caption">
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

        <div class="col-sm-6 col-md-3">
          <div class="thumbnail">
            <img src={photo6} alt="pizza" class="img-responsive" />
            <div class="caption">
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

        <div class="col-sm-6 col-md-3">
          <div class="thumbnail">
            <img src={photo7} alt="pizza" class="img-responsive" />
            <div class="caption">
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

        <div class="col-sm-6 col-md-3">
          <div class="thumbnail">
            <img src={photo9} alt="pizza" class="img-four" />
            <div class="caption">
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
