import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData.info;
  return (
    <div className="res-container">
      <div className="res-card">
        <img className="card-img" src={CDN_URL + cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(" ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
