import React, { Component } from "react";

export class Github1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      username: [],
      detail: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users").then((res) => {
      res.json().then((data) => {
        this.setState({ data: data });
      });
    });
  }

  handleName = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.data.filter((value) => {
      if (value.login === this.state.username) {
        this.setState({
          detail: value,
        });
      }
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
            <datalist id="connect">
              {this.state.data.map((value) => {
                return (
                  <option key={value.id} value={value.login}>
                    {value.login}
                  </option>
                );
              })}
            </datalist>
            <button className="bg-teal-700 rounded-md  font-serif text-white px-7 py-1">
              Submit
            </button>
          </form>

          <article className="flex items-center justify-center p-[50px]">
            <main className="flex flex-col gap-5">
              <img
                src={this.state.detail.avatar_url}
                alt=""
                className="h-[300px] outline-none"
              />
              <h2 className="bg-teal-700 font-serif text-slate-50 rounded-md text-center py-1">
                {this.state.detail.login}
              </h2>
              <a
                href={this.state.detail.html_url}
                className="bg-teal-700 text-slate-50 rounded-md text-center py-1 px-3 font-serif"
              >
                Go to Profile
              </a>
            </main>
          </article>
        </section>
      </>
    );
  }
}

export default Github1;
