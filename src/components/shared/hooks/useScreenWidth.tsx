import { useEffect, useState } from "react";

const useScreenWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth < 786 ? true : false
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsMobile(width < 786 ? true : false);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, isMobile };
};

export default useScreenWidth;
