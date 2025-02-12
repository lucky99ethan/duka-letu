import React from "react";
import { Link } from "react-router-dom"; // Add this import
import CountUp from "react-countup";
// import '../assets/css/icofont.min.css';
// import '../assets/css/custom.css'; // Ensure custom CSS is imported
// import '../assets/css/icofont.min.css';

const subTitle = "Why Choose Us";
const title = "Become a Merchant";
const desc =
  "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
  {
    iconName: "icofont-users-alt-4",
    count: "12600",
    text: "Merchant Enrolled",
  },
  {
    iconName: "icofont-graduate-alt",
    count: "30",
    text: "Certified Courses",
  },
  {
    iconName: "icofont-notification",
    count: "100",
    text: "Rewards and GiftCards",
  },
];

const AboutUs = () => {
  return (
    <div className="instructor-section padding-tb style-2 section-bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row-g-4 justify-content-center align-items-center row-cols-md-2 row-cols-xl-3 row-cols-1">
            <div className="col">
              {countList.map((val, i) => (
                <div key={i} className="count-item">
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <div className="count-content">
                      <h2>
                        <span className="count">
                          <CountUp end={val.count} duration={3} />
                        </span>
                        <span>+</span>
                      </h2>
                      <p> {val.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col">
              <div className="instructor-content">
                <span className="subtitle">{subTitle}</span>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
                <Link to="/sign-up" className="lab-btn">
                  <span>{btnText}</span>
                </Link>
              </div>
            </div>

            <div className="col">
                <div className="instructor-thumb">
                    <img src="/src/assets/images/instructor/01.png" alt="instructor thumb" />

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
