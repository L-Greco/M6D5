import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <main>
        <div className="container mt-5 px-0 ">
          <div id="row" className="row">
            <h1 className="mx-auto"> Our products</h1>
            <div className="col-12 col-md-4 col-lg-3 h-100 mt-5 ">
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
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
