function MyCard({ pname, price, desc }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{pname}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Rs: {price}
          </h6>
          <p className="card-text">{desc}</p>
          <a href="#" className="card-link">
            Buy Now!
          </a>
        </div>
      </div>
    </>
  );
}

export default MyCard;
