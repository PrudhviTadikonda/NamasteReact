import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData.info;
  return (
    <div className="flex">
      <div className="w-[250px] h-[350px] bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col">
        <img
          className="w-full h-[150px] object-cover rounded-t-lg"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <h3 className="font-bold py-4 text-xl">{name}</h3>
        <h4 className="text-sm text-gray-600 mb-1 break-words line-clamp-2">
          {cuisines.join(",")}
        </h4>
        <h4 className="text-sm text-gray-600 mb-1 break-words line-clamp-2">
          Rating :{avgRating} ⭐
        </h4>
        <h4 className="text-sm text-gray-600 mb-1 break-words line-clamp-2">
          Delivery Time:{sla.deliveryTime} minutes
        </h4>
        <h4 className="text-sm text-gray-600 mb-1 break-words line-clamp-2">
          {costForTwo}
        </h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded shadow-md">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
