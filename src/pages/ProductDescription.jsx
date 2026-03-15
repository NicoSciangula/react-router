import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import SingleProductCard from "../components/SingleProductCard";

export default function ProductDescription() {
  const [singleProduct, setSingleProduct] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setSingleProduct(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <SingleProductCard products={singleProduct} />
    </>
  );
}
