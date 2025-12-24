import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrolPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll',updatePosition)
    updatePosition();
    return window.removeEventListener('scrol',updatePosition)
  }, []);
  return scrolPosition
};

export default useScrollPosition;
