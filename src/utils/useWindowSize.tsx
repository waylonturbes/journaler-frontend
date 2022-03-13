import { useState, useEffect } from "react";

function useWindowSize() {
  const isWindowClient: {} = window;
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function setSize() {
      setWindowSize(window.innerWidth);
    }

    if (isWindowClient) {
      window.addEventListener("resize", setSize);
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);

  return windowSize;
}

export default useWindowSize;
