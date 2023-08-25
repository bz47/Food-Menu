export function Cards({ array, handleLike }) {
  return (
    <>
      {array.map((i) => (
        <div className="col col-md mb-3 mb-sm-0" key={i.id}>
          <div className="card">
            <img src={i.image} alt="" className="card-img-top " />
            <div className="card-body">
              <h5 className="card-title">{i.name}</h5>
              <p className="card-text">{i.text}</p>
              <a onClick={handleLike} href="#" className="btn btn-primary">
                Add to Favorites
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
