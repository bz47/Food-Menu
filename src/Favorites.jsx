export default function Favorites({ favorite, handleUnlike }) {
  return (
    <>
      <div className="holder">
        <h3>Favorites</h3>
        <div id="favorites">
          {favorite.map((i) => (
            <div
              className="col col-md mb-3 mb-sm-0"
              key={self.crypto.randomUUID()}
            >
              <div className="card border-secondary border-2">
                <img src={i.image} alt="" className="card-img-top " />
                <div className="card-body">
                  <h5 className="card-title">{i.name}</h5>
                  <p className="card-text">{i.text}</p>
                  <a
                    onClick={() => handleUnlike(i.id)}
                    className="btn btn-primary"
                  >
                    Remove
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
