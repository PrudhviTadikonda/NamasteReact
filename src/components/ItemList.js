import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div className="p-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center border-b-2 border-gray-200 py-4"
        >
          {/* Text Section */}
          <div className="ml-4 flex-1">
            <h3 className="font-semibold text-lg text-gray-800">
              {item.card.info.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              {item.card.info.description}
            </p>
            <span className="text-gray-800 font-medium mt-2 block">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          {/* Image Section */}
          <div className="relative w-32 h-32 flex-shrink-0">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-full object-cover rounded"
            />
            <button
              className="absolute bottom-2 right-2 bg-white text-black text-sm px-2 py-1 rounded shadow transition duration-300"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
