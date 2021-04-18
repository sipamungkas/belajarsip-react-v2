import React from "react";
import "./DashboardNews.css";

export default function DashboardNews() {
  return (
    <>
      <section className="news">
        <div className="card">
          <h5 className="title">News</h5>
          <div className="news-image-container">
            <div
              id="carouselExampleIndicators"
              className="carousel slide rounded-10px"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner rounded-bottom-10px">
                <div className="carousel-item active">
                  <img
                    src="/assets/images/news-image-1.jpg"
                    className="d-block w-100"
                    alt="news 1"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>New update for front end development class sylabus!</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/images/news-image-1.jpg"
                    className="d-block w-100"
                    alt="news 1"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>New update for front end development class sylabus!</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/images/news-image-1.jpg"
                    className="d-block w-100"
                    alt="news 1"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>New update for front end development class sylabus!</h5>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
