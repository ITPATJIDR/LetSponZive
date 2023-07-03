import React, { useState, useEffect } from "react";

const Letsponsive = ({ component1, component2, onWidth }) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [windowHeight, setWindowHeight] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const checkSize = (onWidth) => {
    if (windowWidth <= Number(onWidth)) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      {checkSize(onWidth) ? <div>{component1}</div> : <div>{component2}</div>}
    </div>
  );
};

export default Letsponsive;