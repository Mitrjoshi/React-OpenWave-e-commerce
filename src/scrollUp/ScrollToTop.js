import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const restoreScrollPosition = () => {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
      window.history.scrollRestoration = "auto";
    };
    restoreScrollPosition();
  }, [pathname]);

  return null;
}

export default ScrollToTop;
