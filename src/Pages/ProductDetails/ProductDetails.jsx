import React, { useEffect, useState } from "react";
import styles from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Path from "./../../components/Path";
import Loading from "./../../components/Loading";
import Categories from "../../components/Categories";
export default function ProductDetails() {
  const { id } = useParams();

  const [product, setproduct] = useState(null);

  async function getSpecificProduct(id) {
    try {
      const { data } = await axios.get(
        `https://route-ecommerce.onrender.com/api/v1/products/${id}`
      );

      setproduct(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getSpecificProduct(id);
  });
  return (
    <>
      <Path />

      {product ? (
        <div className="container">
          <div className="row  rounded-4 mb-3 px-3 py-3">
            <div className="col-lg-9 bg-white col-md-12 border-main rounded-4 py-3">
              <div className="row  rounded-4">
                <div className="col-md-6">
                  <figure className="row justify-content-center">
                    <img
                      src={product.imageCover}
                      alt=""
                      className="w-75 col-12 "
                    />
                    <figure className="d-flex col-12 justify-content-center">
                      {product.images
                        ? product.images.map((image) => {
                            return (
                              <img
                                src={image}
                                style={{
                                  height: 100 + "px",
                                }}
                                alt="product cover"
                                className="mt-3 mx-1"
                              />
                            );
                          })
                        : ""}
                    </figure>
                  </figure>
                </div>
                <div className="col-md-6 border-start border-1 ps-lg-4 ps-md-4">
                  <h3 className="fs-4 fw-bold text-main mt-5">
                    {product.title}
                  </h3>
                  <p className="text-muted">{product.description}</p>
                  {/* --------------- product main details------------- */}
                  <div>
                    <h4 className="border-bottom border-1 pb-2">Details</h4>
                    <div className="d-flex justify-content-between">
                      <div className="price">
                        <p className="mb-1">price</p>
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
                      <div>
                        <p className="mb-1">In stock</p>
                        <span className="in-stock fw-bolder">
                          {product.quantity}
                        </span>
                      </div>
                    </div>

                    <p className="mb-1">
                      Brand : {product.brand.name}
                      <img
                        src={product.brand.image}
                        style={{ height: 50 + "px" }}
                        alt=""
                        className="p-0"
                      />
                    </p>
                    <p className="mb-1">Category : {product.category.name}</p>
                    <p className="mb-1 py-3">
                      <i className="fas fa-star text-sec "></i>
                      {product.ratingsAverage}
                    </p>
                  </div>

                  <div className="actions border-top border-1 pt-3 mt-3 d-flex align-items-center">
                    <div className="btn-group border border-1">
                      <button type="button" className="border-0 p-2 bg-main">
                        -
                      </button>
                      <input
                        type="text"
                        value="1"
                        className="text-center border-0"
                      />
                      <button type="button" className="border-0 p-2 bg-main">
                        +
                      </button>
                    </div>
                    <button className="bg-main border-0 rounded-1 p-2 ms-2">
                      Add to cart
                    </button>
                    <button className="btn border-1 border ms-2">
                      <i className="fa-regular fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <aside className="col-md-3">
              <Categories />
            </aside>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
