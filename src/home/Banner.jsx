"use client";
import React, { useState } from "react";
import productData from "../products.json";
import SelectedCategory from "../components/SelectedCategory";

const title = <h2> Search Your One From Thousand of Products</h2>;
const desc = "We have the largest collection of products";
const bannerList = [
  {
    iconName: " icofont icofont-rocket",
    text: "Fast Delivery",
  },
  {
    iconName: " icofont icofont-headphone-alt-2",
    text: "24/7 Support",
  },
  {
    iconName: " icofont icofont-money",
    text: "Secure Payment",
  },
];
const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSearch = (e) => {
    console.log(e.target.value);
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    //filter products based on search
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return ( 
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select={"all"}/>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search your product"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
