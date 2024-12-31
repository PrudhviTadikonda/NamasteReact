import Body from "../Components/Body";
import MOCK_DATA from "../mocks/mockResList.json";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock the global fetch API
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should render the Body component and search button", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  // Wait for the Search button to appear in the DOM
  await waitFor(() => {
    const searchBtn = screen.getByRole("button", { name: "Search" });
    expect(searchBtn).toBeInTheDocument();
  });
});
