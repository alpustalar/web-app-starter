import { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';

type ScrollDirection = 'up' | 'down' | 'none';

export const useScrollDirection = (threshold = 20) => {
  const { y: scrollY } = useWindowScroll();
  const [direction, setDirection] = useState<ScrollDirection>('none');

  const lastScrollY = useRef(0);
  const accumulatedDiff = useRef(0);

  useEffect(() => {
    const diff = scrollY - lastScrollY.current;

    // Yön değiştiyse biriken farkı sıfırla
    if (
      (diff > 0 && accumulatedDiff.current < 0) ||
      (diff < 0 && accumulatedDiff.current > 0)
    ) {
      accumulatedDiff.current = 0;
    }

    accumulatedDiff.current += diff;

    if (scrollY <= 10) {
      setDirection('up');
      accumulatedDiff.current = 0;
    } else if (accumulatedDiff.current > threshold) {
      setDirection('down');
    } else if (accumulatedDiff.current < -threshold) {
      setDirection('none');
    }

    lastScrollY.current = scrollY;
  }, [scrollY, threshold]);

  return { direction, scrollY };
};
