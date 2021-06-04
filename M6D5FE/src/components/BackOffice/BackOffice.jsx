import { Component } from "react";
import "./backOffice.css";
class BackOffice extends Component {
  state = {
    product: {
      name: "",
      brand: "",
      category: "",
      imgUrl: "",
      price: "",
      description: "",
    },
    isLoading: false,
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.product);
  };

  handleChange = (e) => {
    let id = e.target.id;
    this.setState({
      product: {
        ...this.state.product,
        [id]: e.target.value,
      },
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-4 mt-5 mx-auto">
              <h1>Backoffice</h1>
              <h2 id="h2" className="d-none text-muted">
                {" "}
                <em>(Editing Mode)</em>{" "}
              </h2>
              <form onSubmit={this.submitHandler}>
                <div className="form-group">
                  <label htmlFor="productName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={this.state.product.name}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="brand">Brand</label>
                  <input
                    type="text"
                    className="form-control"
                    id="brand"
                    value={this.state.product.brand}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="brand">category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    value={this.state.product.category}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="brand">Img Url</label>
                  <input
                    type="url"
                    className="form-control"
                    id="imgUrl"
                    value={this.state.product.imgUrl}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={this.state.product.price}
                    onChange={this.handleChange}
                    required
                  />
                  <small className="form-text ">
                    {" "}
                    <em> Price in dollars</em>{" "}
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={this.state.product.description}
                    onChange={this.handleChange}
                    rows={3}
                    required
                  />
                </div>
                <span>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </span>
                <span>
                  <button
                    type="button"
                    // onClick={}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BackOffice;
