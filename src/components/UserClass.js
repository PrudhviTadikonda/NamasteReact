import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        login: "dummy",
        avatar_url: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/prudhvitadikonda");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="bg-red-100 p-8 rounded-lg shadow-lg w-80 text-center mx-auto border-2 border-red-600">
        <img
          src={avatar_url}
          alt={`${name}'s Avatar`}
          className="w-24 h-24 mx-auto rounded-full border-4 border-black shadow-md"
        />
        <h2 className="text-2xl font-extrabold text-red-600 mt-4">
          {name} <span className="text-sm text-black">(Founder & CEO)</span>
        </h2>
        <p className="text-black font-semibold mt-1">Username: @{login}</p>
        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-black underline mt-4 inline-block"
        >
          Visit GitHub Profile
        </a>
        <div className="mt-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-black">
            Contact @PrudhviTadikonda
          </button>
        </div>
      </div>
    );
  }
}

export default UserClass;
