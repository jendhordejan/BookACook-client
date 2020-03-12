import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <image href="https://www.residentadvisor.net/images/events/flyer/2020/3/nl-0307-1363882-1574943-front.jpg" />
              {/* <rect width="100%" height="100%" fill="#777" /> */}
            </svg>
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>Sasha & John Digweed x World Fashion Centre Amsterdam</h1>
                <p>
                  In an ever-evolving electronic music landscape, Sasha and John
                  Digweed have managed to stay as relevant as ever. After
                  reuniting again in 2016 the duo has shown they’re still one of
                  the most desirable DJ Collaborations in the history of
                  electronic dance music. Bringing a mix of quality music and
                  mesmerizing performance, pleasing the crowd unlike anyone
                  else.
                </p>
                <p>
                  <a
                    class="btn btn-lg btn-primary"
                    href="/signup"
                    role="button"
                  >
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <image
                href="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F76835065%2F292660905640%2F1%2Foriginal.20191015-082137?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C77%2C1400%2C700&s=7a9a1f825b441f1e0a92a0675d414b4e"
                width="100%"
              />
              {/* <rect width="100%" height="100%" fill="#777" /> */}
            </svg>
            <div class="container">
              <div class="carousel-caption">
                <h1>React Summit Amsterdam 2020</h1>
                <p>THE BIGGEST REACT CONFERENCE WORLDWIDE</p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#" role="button">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <image
                href="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F91908595%2F399970749919%2F1%2Foriginal.20200211-092235?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=196%2C0%2C624%2C312&s=be2986c210a5365d619112395a71b2fa"
                width="100%"
              />
            </svg>
            <div class="container">
              <div class="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>
                  The Reliving pop-up market with second-hand and vintage
                  furniture and accessories
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#" role="button">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
