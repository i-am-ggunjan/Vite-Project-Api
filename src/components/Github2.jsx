import React, { Component } from "react";

export class Github2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      naam: ["I-am-ggunjan"],
    };
  }
  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.naam}`).then((res) => {
      res.json().then((data) => {
        this.setState({});
        data: [data];
        console.log(data);
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleName = (e) => {
    this.setState({
      naam: e.target.value,
    });
  };
  render() {
    return (
      <>
        <section className="bg-gradient-to-b from-green-900 via-green-400 to-blue-900 h-[100vh]">
          <form
            onSubmit={this.handleSubmit}
            className="flex flex-col items-center gap-10 p-5"
          >
            <input
              className="rounded-md text-center py-1 font-serif"
              type="text"
              list="connect"
              placeholder="Write Name"
              onChange={this.handleName}
            />
            <button className="bg-teal-700 rounded-md  font-serif text-white px-7 py-1">
              Submit
            </button>
          </form>
          <br />

          {this.state.data.map((value) => {
            console.log(value);
            return (
              <div key={value.login}>
                <img src={value.avatar_url} alt={image} width="300px" />
                <h1>{value.login}</h1>
                <a href={value.html_url}>Go to profile</a>
              </div>
            );
          })}
        </section>
      </>
    );
  }
}

export default Github2;
