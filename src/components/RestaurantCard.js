import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla
  } = props.resData?.info;
  return (
    <div data-testid="resCard" className="res-card m-4 p-4 w-55 bg-gray-50 rounded-lg hover:bg-gray-200">
      <div>
          <img className=" rounded-lg" alt="logo" src={CDN_URL + cloudinaryImageId} />
      </div>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{avgRating}</h3>
      <h3>{sla.slaString}</h3>
    </div>
  )

};
export default RestaurantCard;