import React from "react";
import "../index.css";
import im1 from "../images/image1.jpg";
import im2 from "../images/image2.jpg";
import im3 from "../images/image3.jpg";
import im4 from "../images/image4.jpg";

const Home = () => {
  return (
    <div>
      <div class="d-flex flex-row card justify-content-between p-3 earn   mt-1">
        <div className="row text-center">
          <div className="col d-flex flex-column justify-content-center">
            <i class="far fa-user fa-2x text-danger"></i>
          </div>
          <div className="col">
            <span className="text-danger">***DTL</span> <br />
            <span>successful</span>
          </div>
        </div>

        <div>
          <p className="text-black-50">0.5 USDT</p>
        </div>
      </div>
      <div className=" p-2  mb-5 bg-light">
        <h1 className="text-black-50">Platform introduction :</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 pubs align-items-center p-0 m-0">
          <div className="col">
            <div>
              <img src={im1} alt="logo" />
              <span className="fs-4">Platform Profile</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
                amet consect ...
              </p>
            </div>
          </div>
          <div className="col">
            <div>
              <img src={im2} alt="logo" />
              <span className="fs-4">Platform Rules</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
                amet consect ...
              </p>
            </div>
          </div>
          <div className="col">
            <div>
              <img src={im3} alt="logo" />
              <span className="fs-4">Win-Win Corporation</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
                amet consect ...
              </p>
            </div>
          </div>
          <div className="col">
            <div>
              <img src={im4} alt="logo" />
              <span className="fs-4">Platform Profile</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
                amet consect ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
