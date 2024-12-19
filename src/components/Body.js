import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State variaable
  const [list, setList] = useState([]); //State variable

  //  const arr=useState(resList)   both are same
  // const [List,setList]=arr;

  // const list =[]  Normal JS variable

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9411723&lng=77.6213047&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return list.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          placeholder="Search food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const filteredRestaurant = list.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = list.filter((res) => res.info.avgRating > 4.3);
            setList(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((resturant, index) => (
          <RestaurantCard
            key={/*resturant.data.id or we can use index*/ index}
            resData={resturant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
