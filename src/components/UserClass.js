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

    // console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "child did mount");

    const data = await fetch("https://api.github.com/users/prudhvitadikonda");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    // console.log(this.props.name + "child render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name : {name} </h2>
        <h3>Location: {location}</h3>
        <h3>Login: {login}</h3>
        <h3>Contact: @PrudhviTadikonda</h3>
      </div>
    );
  }
}

export default UserClass;
