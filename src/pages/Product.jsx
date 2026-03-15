import axios from "axios";
import SingleProductCard from "../components/SingleProductCard";
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
        <div className="d-flex flex-wrap justify-content-center">
          {product.map((singleProduct) => (
            <SingleProductCard
              key={singleProduct.id}
              products={singleProduct}
              isDetail={false}
            />
          ))}
        </div>
      </section>
    </>
  );
}
