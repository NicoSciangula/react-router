export default function SingleProduct({products}) {
  const {title, image, description, price, category} = products;

  return (
    <article className="p-3">
      <div
        className="card overflow-hidden my-product p-3"
        style={{width: "18rem", height: "26rem"}}>
        <img src={image} className="card-img-top my-img" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text my-description-product my-font-color">
            {description}
          </p>
          <div className="my-bg text-center">
            <span className="card-text pe-2 fw-bolder my-font-color">{`${price} $`}</span>
            <span className="card-text my-font-color">{category}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
