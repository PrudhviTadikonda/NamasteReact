import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State variaable
  const [list, setList] = useState([]); //State variable

  //  const arr=useState(resList)   both are same
  // const [List,setList]=arr;

  // const list =[]  Normal JS variable

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9411723&lng=77.6213047&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <h1>
        {" "}
        looks like you are offline !! please check your internet connection !!{" "}
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return list.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center justify-between gap-4 px-4">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="w-44 px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Search food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="ml-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 hover:text-black transition duration-300"
            onClick={() => {
              const filteredRestaurant = list.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="user-box flex items-center gap-4 p-4  max-w-lg mx-auto">
          <label className="text-lg font-bold text-red-600">Username:</label>
          <input
            placeholder="Enter your username"
            className="flex-grow px-4 py-2 text-black border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 hover:text-black transition duration-300 ml-auto"
            onClick={() => {
              const filteredList = list.filter(
                (res) => res.info.avgRating > 4.4
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 m-4">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.4 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
