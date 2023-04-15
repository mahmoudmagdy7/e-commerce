import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setcategories] = useState(null);
  async function gettingCategories() {
    try {
      const { data } = await axios.get(
        `https://route-ecommerce.onrender.com/api/v1/categories`
      );

      console.log(data);
      setcategories(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(function () {
    gettingCategories();
  }, []);
  return (
    <>
      <div className=" border-main rounded-4 bg-white position-sticky top-0 ">
        <div className="categories p-3 ">
          <h5 className=" text-uppercase">category</h5>
          <ul className=" list-unstyled text-muted ">
            {categories ? (
              categories.map((category) => {
                return (
                  <li className="fw-regular mt-2 ms-2 border-bottom border-1 w-75">
                    {category.name}
                  </li>
                );
              })
            ) : (
              <p className="card-text placeholder-glow placeholder-wave m-auto">
                <div className="placeholder col-5"></div>
                <div className="placeholder col-7"></div>
                <div className="placeholder col-3"></div>
                <div className="placeholder col-5"></div>
                <div className="placeholder col-6"></div>
                <div className="placeholder col-3"></div>
                <div className="placeholder col-6 "></div>
              </p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
