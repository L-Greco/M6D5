import { Component } from "react";
import Comment from "../Comments";
class Card extends Component {
  state = {
    showComments: false,
  };
  render() {
    return (
      <>
        {this.props.data.map((product) => (
          <div
            key={product._id}
            className="col-12 col-md-4 col-lg-3 h-100 my-1 "
          >
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={`${product.imgUrl}`}
                className="card-img-top img-fluid"
                alt="picture of ${product.name}"
              />
              <div className="card-body">
                <ul>
                  <li>Name:{product.name}</li>
                  <li>Brand:{product.band}</li>
                  <li>Price:{product.price}</li>
                  <li>Category:{product.category}</li>
                </ul>
                <p className="card-text">
                  {" "}
                  <em> Description : </em>{" "}
                </p>
                <p
                  className="card-text"
                  style={{ height: "5rem", overflow: "auto" }}
                >
                  {product.description}
                </p>

                <Comment
                  comments={product.comments}
                  showComments={this.state.showComments}
                />

                <button className="btn btn-info">Details! </button>
                <button
                  className="btn btn-primary mx-1"
                  onClick={() =>
                    this.state.showComments
                      ? this.setState({ showComments: false })
                      : this.setState({ showComments: true })
                  }
                >
                  {this.state.showComments ? "Hide" : "Show"}
                  Comments!{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Card;
