export function Cards({ array, handleLike }) {
  return (
    <>
      {array.map((i) => (
        <div className="col col-md mb-3 mb-sm-0" key={i.id}>
          <div className="card border-secondary border-2 ">
            <img
              loading="lazy"
              src={i.image}
              alt={i.name}
              className="card-img-top"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body" style={{ backgroundColor: "lightgrey" }}>
              <h5 className="card-title">{i.name}</h5>
              <p className="card-text">{i.text}</p>
              <a onClick={() => handleLike(i)} className="btn btn-primary">
                Add to Favorites
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
