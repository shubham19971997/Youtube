import {useState,useEffect} from 'react';

export default function useScrollDirection() {
    const [isHidden, setIsHidden] = useState(false);
  
    useEffect(() => {
      // store the last scrolled Y to detect how fast users scroll pages
      let lastScrollY = window.pageYOffset
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset
        const goingDown = scrollY > lastScrollY
        const diff = 4
        // There are two cases that the header might want to change the state:
        // - when scrolling up but the header is hidden
        // - when scrolling down but the header is shown
        // stateNotMatched variable decides when to try changing the state
        const stateNotMatched = goingDown !== isHidden
        const scrollDownTooFast = scrollY - lastScrollY > diff
        const scrollUpTooFast = scrollY - lastScrollY <- diff
  
        const shouldToggleHeader = stateNotMatched && (scrollDownTooFast || scrollUpTooFast)
        if (shouldToggleHeader) {
          setIsHidden(goingDown)
        }
        lastScrollY = scrollY > 0 ? scrollY : 0
      };
  
      window.addEventListener("scroll", updateScrollDirection)
      return () => {
        window.removeEventListener("scroll", updateScrollDirection)
      }
    }, [isHidden]);
  
    return isHidden;
  }