import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo == null) return <Shimmer />;

  const {
    name,
    cuisines,
    areaName,
    costForTwoMessage,
    totalRatingsString,
    avgRating,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className=" text-gray-600 mb-1 break-words line-clamp-2 text-lg font-bold">
        cuisines:{cuisines.join(",")}| AreaName:{areaName} | {costForTwoMessage}{" "}
        | Total Ratings: {totalRatingsString} | Avg Rating : {avgRating}
      </p>
      {/* categories accordians  */}
      {categories.map((category, index) => (
        // controlled component restaurant menu parent is controlling restaurant category child . that is called lifting the state from child to parent
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
