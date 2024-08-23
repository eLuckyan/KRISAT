import React from "react";
import "./Home.scss";
import content1 from "../../Assets/Images/1088523.jpg"

const Home = () => {
  return (
    <>
      <div className="home-about">
        <div className="about-heading">
          <h2>About KRISAT</h2>  
        </div>
        <div className="about-content">
          <div className="content1">
            <div className="content-header">
              <img src={content1} alt="" className="image-container" />
              <h3>Infrastructure</h3>
            </div>
            <div className="content-content">
              <h5>
              Well designed infrastructure with sophisticated needs to cater your professionals
              </h5>
              <br />
              <p>
              We value the space required to provide hands on training to budding Agricultural Professionals. We manifest a pattern...
              </p>
              <button>
                Read more..
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
