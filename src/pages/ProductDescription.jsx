import axios from "axios";
import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import SingleProductCard from "../components/SingleProductCard";

export default function ProductDescription() {
  const [singleProduct, setSingleProduct] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.data) {
          console.warn("Prodotto non trovato, reinderizzo...");
          navigate("/product");
        } else {
          setSingleProduct(res.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <SingleProductCard products={singleProduct} />
    </>
  );
}
