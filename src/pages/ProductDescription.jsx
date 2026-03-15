import axios from "axios";
import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import SingleProductCard from "../components/SingleProductCard";

export default function ProductDescription() {
  const [singleProduct, setSingleProduct] = useState(null);
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
      {singleProduct ? (
        <SingleProductCard products={singleProduct} />
      ) : (
        <div className="m-4 d-flex justify-content-center">
          <div className="my-loader"></div>
        </div>
      )}
    </>
  );
}
