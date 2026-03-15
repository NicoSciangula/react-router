import axios from "axios";
import SingleProduct from "../components/SingleProduct";
import {useEffect, useState} from "react";

export default function Product() {
  const [product, setProduct] = useState([]);
  function getProduct() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <section className="my-bg my-font-color mt-3 p-3">
        <h1 className="text-center">I nostri Prodotti</h1>
        <div></div>
      </section>
    </>
  );
}
