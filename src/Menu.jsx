import { Cards } from "./Cards";

export function Menu({ array, handleLike, searchQuery }) {
  return (
    <div id="menu">
      <div className="row">
        <div className="col">
          <h3 className="">Ready for Testing</h3>
        </div>
      </div>
      <div className="row">
        <Cards
          array={array}
          handleLike={handleLike}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
}
