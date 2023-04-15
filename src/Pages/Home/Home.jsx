import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import ItemsLoading from "./../../components/ItemsLoading";
import Categories from "../../components/Categories";

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
      {/* <header>
        <div className="container">header</div>
      </header> */}

      <section className="container my-5">
        <div className="row">
          <aside className="col-3 ">
            <Categories />
          </aside>

          <main className="col-lg-9 col-md-12 bg-white border-1 border rounded-4 ">
            <div className="row">
              {product ? (
                product.map((product, index) => {
                  return <ProductCard key={index} product={product} />;
                })
              ) : (
                <ItemsLoading />
              )}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
