// usePageTracking.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTracking = () => {
  const location = useLocation();
  useEffect(() => {
    if (process.env.REACT_APP_ENV === "production") {
      // track pageview with gtag / react-ga / react-ga4, for example:
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

export default usePageTracking;
