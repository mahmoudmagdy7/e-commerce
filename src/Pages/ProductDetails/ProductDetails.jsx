import React, { useEffect, useState } from "react";
import styles from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
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
  return <>{product ? <h2>{product.title}</h2> : ""}</>;
}
