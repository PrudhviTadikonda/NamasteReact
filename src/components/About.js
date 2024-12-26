import react from "react";
import UserClass from "./UserClass";

class About extends react.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    //  console.log("parent did mount");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>This is About us page </h1>
        <UserClass name={"First"} location={"Texas"} />
      </div>
    );
  }
}

export default About;
