import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
export default function Home() {
  const [product, setproduct] = useState(null);
  async function getProducts() {
    try {
      let { data } = await axios.get(
        "https://route-ecommerce.onrender.com/api/v1/products"
      );
      setproduct(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getProducts();
  }, []);

  return (
    <>
      <header>
        <div className="container">header</div>
      </header>

      <section className="container">
        <div className="row">
          <aside className="col-3 ">
            <div className="border border-1 rounded-4 bg-white position-sticky top-0 ">
              <div className="categories p-3 ">
                <h5 className=" text-uppercase">category</h5>
                <ul className=" list-unstyled text-muted ">
                  <li className="fw-regular">Tablets</li>
                  <li className="fw-regular">PC</li>
                  <li className="fw-regular">Laptop</li>
                </ul>
              </div>
            </div>
          </aside>

          <main className="col-lg-9 col-md-12 bg-white border-1 border rounded-4 ">
            <div className="row">
              {product
                ? product.map((product, index) => {
                    return <ProductCard key={index} product={product} />;
                  })
                : ""}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
