import { useEffect, useState } from 'react';
import { RES_MENU } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  },[]);
  const fetchMenu = async () => {
    const data = await fetch(RES_MENU + resId);
    const jsonRes = await data.json();
    setResInfo(jsonRes.data);
  };
  return resInfo;
}
export default useRestaurantMenu;