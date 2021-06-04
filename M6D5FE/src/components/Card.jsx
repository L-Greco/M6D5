import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="col-12 col-md-4 col-lg-3 h-100 my-1 ">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="${product.imageUrl}"
            className="card-img-top img-fluid"
            alt="picture of ${product.name}"
          />
          <div className="card-body">
            <ul>
              <li>
                Name:${"{"}product.name{"}"}
              </li>
              <li>
                Brand:${"{"}product.brand{"}"}
              </li>
              <li>
                Price:${"{"}product.price{"}"}$
              </li>
            </ul>
            <p className="card-text">
              {" "}
              <em> Description : </em>{" "}
            </p>
            <p
              className="card-text"
              style={{ height: "5rem", overflow: "auto" }}
            >
              ${"{"}product.description{"}"}
            </p>
            <button className="btn btn-info">Details! </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
