import { render, screen } from "@testing-library/react";
import RestaurantCard from "../Components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render the reataurant card ", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("McDonald's");

  expect(name).toBeInTheDocument();
});
