import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Components/Header";
import UserContext from "../utils/UserContext";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("should toggle Login/Logout button text on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <UserContext.Provider value={{ loggedInUser: "Test User" }}>
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();

    // Simulate click
    fireEvent.click(loginButton);
    expect(loginButton).toHaveTextContent("Logout");

    // Simulate another click
    fireEvent.click(loginButton);
    expect(loginButton).toHaveTextContent("Login");
  });

  it("should render all menu items correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <UserContext.Provider value={{ loggedInUser: "Test User" }}>
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );

    // Check for Home link
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toBeInTheDocument();

    // Check for About Us link
    const aboutLink = screen.getByRole("link", { name: "About Us" });
    expect(aboutLink).toBeInTheDocument();

    // Check for Contact Us link
    const contactLink = screen.getByRole("link", { name: "Contact Us" });
    expect(contactLink).toBeInTheDocument();

    // Check for Cart link
    const cartLink = screen.getByRole("link", { name: /Cart/ });
    expect(cartLink).toBeInTheDocument();

    // Check for Online Status text
    expect(screen.getByText(/Online Status/)).toBeInTheDocument();

    // Check for username
    expect(screen.getByText("Test User")).toBeInTheDocument();
  });
});
