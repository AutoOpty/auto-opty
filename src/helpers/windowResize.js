import { SiteContext } from "@/context/SiteContext";
import { useContext } from "react";

export const WindowResize = () => {
  const { setIsTablet } = useContext(SiteContext);
  if (window.innerWidth <= 1279) {
    setIsTablet(true);
  } else {
    setIsTablet(false);
  }
};

// export const windowResize = useCallback(() => {
//   if (window.innerWidth <= 1279) {
//     setIsTablet(true);
//   } else {
//     setIsTablet(false);
//   }
// }, [setIsTablet]);
