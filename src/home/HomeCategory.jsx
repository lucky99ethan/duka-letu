import React from "react";
import { Link } from "react-router-dom"; // Add this import
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "src/assets/images/category/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    imgUrl: "src/assets/images/category/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: "src/assets/images/category/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: "src/assets/images/category/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl: "src/assets/images/category/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: "src/assets/images/category/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];
const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        {/* Section header */}
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        {/*  section Card */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
            {categoryList.map((val, i) => (
              <div key={i} className="col">
                <Link to="/shop" className="category-item">
                  <div className="category-inner">
                    {/* Image thumbnail*/}
                    <div className="category-thumb">
                      <img src={val.imgUrl} alt="" />
                    </div>
                    {/* Content*/}
                    <div className="category-content">
                      <div className="cate-icon">
                        <i className={val.iconName}></i>
                      </div>
                      <Link to="/shop">
                        <h6>{val.title}</h6>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* btn get started*/}
        <div className="text-center mt-5">
          <Link to="/shop" className="lab-btn">
            <span>{btnText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
