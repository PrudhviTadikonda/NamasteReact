import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Component-specific logic can go here
  }

  render() {
    return (
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-red-600">About Us</h1>
          <p className="mt-4 text-lg text-gray-700">
            Discover more about our mission, values, and the people driving our
            vision.
          </p>
        </header>

        <section className="bg-white border-2 border-red-600 p-6 rounded-lg shadow-lg text-center w-3/4">
          <h2 className="text-2xl font-bold text-black">Welcome!</h2>
          <UserContext.Consumer>
            {(value) => (
              <h3 className="text-xl text-red-500 mt-2">
                Logged In User:{" "}
                <span className="font-bold">{value.loggedInUser}</span>
              </h3>
            )}
          </UserContext.Consumer>
        </section>

        <section className="mt-12">
          <UserClass name={"First"} location={"Texas"} />
        </section>
      </div>
    );
  }
}

export default About;
