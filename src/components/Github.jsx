import React, { Component } from "react";

export class Github extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users`).then((res) => {
      res.json().then((data) => {
        console.log(data);
        this.setState({ data: data });
      });
    });
  }

  render() {
    return (
      <>
        <section className="flex items-center justify-between gap-10 flex-wrap">
          {this.state.data.map((value) => {
            return (
              <article
                key={value.id}
                className="bg-emerald-400 p-5 w-[300px] grow flex flex-col gap-2 text-center"
              >
                <img src={value.avatar_url} className="" />
                <h2 className="bg-emerald-500 text-slate-50 px-5 rounded-md">
                  {value.login}
                </h2>
                <a
                  href={value.html_url}
                  className="bg-teal-700 text-slate-50 px-5 rounded-md"
                >
                  Go to Profile
                </a>
              </article>
            );
          })}
        </section>
      </>
    );
  }
}

export default Github;
