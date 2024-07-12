import React, { useEffect, useState } from "react";
import OurKey from "./OurKey";
import OurKeyMob from "./OurKeyMob";

function OurKeyMain() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkIsMobile(); // Initial check

    window.addEventListener("resize", checkIsMobile); // Listen for resize events

    return () => {
      window.removeEventListener("resize", checkIsMobile); // Cleanup
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return <>{isMobile ? <OurKeyMob /> : <OurKey />}</>;
}

export default OurKeyMain;
