import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default function SingleProductCard({products, isDetail}) {
  const {title, image, description, price, category, id} = products;
  const navigate = useNavigate();

  return (
    <>
      <article className="p-3 d-flex justify-content-center align-items-start">
        <div
          className="card overflow-hidden p-3"
          style={{width: "18rem", height: "100%"}}>
          <img src={image} className="card-img-top my-img" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p
              className={`card-text ${isDetail === false ? "my-description-product" : "d-block"} my-font-color`}>
              {description}
            </p>
            <div className="my-bg text-center">
              <span className="card-text pe-2 fw-bolder my-font-color">{`${price} $`}</span>
              <span className="card-text my-font-color">{category}</span>
            </div>
          </div>
          {isDetail === false ? (
            <Link to={`/product/${id}`} className="btn btn-primary">
              View More
            </Link>
          ) : (
            <Link to="/product" className="btn btn-primary">
              Torna alla Lista
            </Link>
          )}
        </div>
      </article>
      {isDetail === false ? (
        ""
      ) : (
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-success"
            onClick={() => navigate(`/product/${Number(id) - 1}`)}>
            Indietro
          </button>
          <button
            className="btn btn-success"
            onClick={() => navigate(`/product/${Number(id) + 1}`)}>
            Avanti
          </button>
        </div>
      )}
    </>
  );
}
