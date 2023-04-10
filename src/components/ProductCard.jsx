import React, { useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  let rate = product.ratingsAverage;
  function getRating() {
    // console.log(rate);
    // console.log(product.ratingsAverage);
    let productRate = "rate";
    if (rate < 2) {
      productRate = `
  <i class=" fas fa-star text-main"></i>
  <i class="fa-regular fa-star text-main"></i>
  <i class="fa-regular fa-star text-main"></i>
  <i class="fa-regular fa-star text-main"></i>
  <i class="fa-regular fa-star text-main"></i>
  
  
  `;
    } else if (rate >= 2 && rate < 3) {
      productRate = `
  <i class=" fas fa-star text-main"></i>
  <i class=" fas fa-star text-main"></i>
  <i class="fa-regular fa-star text-main"></i>
  <i class="fa-regular fa-star text-main"></i>
  <i class="fa-regular fa-star text-main"></i>
  
  `;
      // <span>(${product.ratingsAverage})</span>
    } else if (rate >= 3 && rate < 4) {
      productRate = `
  <i class=" fas fa-star text-main"></i>
  <i class=" fas fa-star text-main"></i>
  <i class=" fas fa-star text-main"></i>
  <i class="fa-regular fa-star text-main"></i>
  <i class="fa-regular fa-star text-main"></i>
  
  `;
    } else if (rate === 4) {
      productRate = `
  <i class=" fas fa-star text-main"></i>
  <i class=" fas fa-star text-main"></i>
  <i class=" fas fa-star text-main"></i>
  <i class=" fas fa-star text-main"></i>
  <i class="fa-regular fa-star text-main"></i>
  
  `;
    } else {
      productRate = `
  <i class=" fas fa-star text-main"></i>
  <i class=" fas fa-star text-main"></i>
  <i class=" fas fa-star text-main"></i>
  <i class=" fas fa-star text-main"></i>
  <i class=" fas fa-star text-main"></i>
  
  `;
    }
    return productRate;
  }

  return (
    <>
      <div className="col-lg-4 col-xl-3 col-md-6 p-3">
        <Link
          to={`/product-details/${product.id}`}
          className="text-decoration-none"
        >
          <div className="product-card bg-white rounded-4 overflow-hidden border border-1 position-relative">
            {product.priceAfterDiscount ? (
              <div className="discount-badge"></div>
            ) : (
              ""
            )}
            <figure>
              <img src={product.imageCover} alt="" className="w-100" />
            </figure>
            <div className="card-body px-3 pb-2">
              <h6 className="text-main">{product.category.name}</h6>
              <p className="mb-2">
                {product.title.split(" ").slice(0, 2).join(" ")}. . .
              </p>
              <div className="rate d-flex">
                {$(this).html(getRating())}
                {product.ratingsAverage}
              </div>
              <div className="price mt-2">
                {product.priceAfterDiscount ? (
                  <>
                    <span className="after-discount fw-bolder me-2">
                      ${product.priceAfterDiscount}
                    </span>
                    <span className="main-price text-decoration-line-through text-muted">
                      ${product.price}
                    </span>
                  </>
                ) : (
                  <span className="after-discount fw-bolder me-2">
                    ${product.price}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}