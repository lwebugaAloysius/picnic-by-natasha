import { useState, useEffect, useRef } from "react";

export function useIsInView(thresh = 0.5) {
  const [isInView, setIsInView] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionObserverOptions = {
      threshold: thresh,
    };

    const sectionObserver = new IntersectionObserver(
      (entries, sectionObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            setIsInView(true);
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      sectionObserverOptions,
    );

    sectionObserver.observe(sectionRef.current);
  }, []);

  return [sectionRef, isInView];
}
