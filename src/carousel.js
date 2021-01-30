import React from "react";
import photo1 from "./images/photo1.jpg";
import photo2 from "./images/photo2.jpg";

function Carousel() {
  return (
    <div className="Carousel">
      <div class="container-fluid">
        <div class="row">
          <div
            id="carousel-example-generic"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carousel-example-generic"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="2"
              ></li>
            </ol>

            <div class="carousel-inner carouselimg" role="listbox">
              <div class="item active">
                <img src={photo1} alt="pizza" />
              </div>
              <div class="item">
                <img src={photo2} alt="pizza" />
              </div>
              ...
            </div>

            <a
              class="left carousel-control"
              href="#carousel-example-generic"
              role="button"
              data-slide="prev"
            >
              <span
                class="glyphicon glyphicon-chevron-left"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="right carousel-control"
              href="#carousel-example-generic"
              role="button"
              data-slide="next"
            >
              <span
                class="glyphicon glyphicon-chevron-right"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
