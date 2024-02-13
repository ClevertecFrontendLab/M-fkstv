import { useEffect, useState } from "react";

export const useIsMObile = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 460;
  const isTablet = width <= 834;
  const isDesktop = width > 834;

  return { isMobile, isTablet, isDesktop };
};