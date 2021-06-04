import { Component } from "react";
import Card from "./Card";
class Home extends Component {
  state = {
    isLoading: false,
    data: {},
    dataOn: false,
  };
  componentDidMount = async () => {
    try {
      const res = await fetch("http://localhost:3001/products");
      if (res.ok) {
        const data = await res.json();
        this.setState({ data: data, dataOn: true });
        console.log(data);
      } else {
        alert(res.statusText);
      }
    } catch (error) {}
  };

  render() {
    return (
      <main>
        <div className="container mt-5 px-0 ">
          <div className="d-flex">
            <h1 className="mx-auto"> Our products</h1>
          </div>
          <div id="row" className="row">
            {this.state.dataOn && <Card data={this.state.data} />}
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
