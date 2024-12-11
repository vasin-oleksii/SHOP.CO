import { useEffect, useState } from "react";

const useScreenWidth = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth < 786 ? true : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786 ? true : false);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile };
};

export default useScreenWidth;
