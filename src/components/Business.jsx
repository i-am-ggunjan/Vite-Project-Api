import React, { Component } from "react";

export class Business extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: [],
      name: [],
      key: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((data) => {
        this.setState({
          detail: data,
        });
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.detail.map((value) => {
      if (value.name === this.state.name) {
        this.setState({
          key: value,
        });
      }
    });
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <>
        <section className="bg-gradient-to-b from-green-900 via-green-400 to-blue-900 h-[100vh]">
          <form
            onSubmit={this.handleSubmit}
            className="flex items-center justify-center flex-col pt-14"
          >
            <input
              onChange={this.handleName}
              list="conn"
              type="text"
              className="bg-slate-100 rounded-md px-5 py-1 text-pink-800 text-center"
            />
            <datalist id="conn">
              {this.state.detail.map((value) => {
                return (
                  <option value={value.name} key={value.id}>
                    {value.name}
                  </option>
                );
              })}
            </datalist>
            <br />
            <br />
            <button className="bg-teal-700 px-5 py-1 rounded-md text-white">
              Submit
            </button>
          </form>

          <section className="flex items-center justify-center mt-[100px] ">
            <article className="flex justify-center items-center flex-col gap-6 border-teal-700 bg-slate-100 p-10">
              <main className="flex gap-5 text-center">
                <div className="">
                  {/* <div className="">{this.state.key[0].address.street}</div> */}
                  <code className="italic ">{this.state.key.website}</code>
                </div>
                <div className="font-serif">
                  <div className="">{this.state.key.phone}</div>
                  <div className="">{this.state.key.username}</div>
                </div>
              </main>
              <main className="text-center">
                <div className="text-teal-700 font-mono">
                  {" "}
                  {this.state.key.name}
                </div>
                <code className="font-sans italic">{this.state.key.email}</code>
              </main>
            </article>
          </section>
        </section>
      </>
    );
  }
}

export default Business;
