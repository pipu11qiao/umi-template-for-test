import React, { useState, useRef } from 'react';
import { useScroll, useThrottleEffect } from 'ahooks';

type UseFloorRes<T> = {
  ref: React.RefObject<T>;
  scrollToIndex: (index: number) => void;
  index: number;
};

type UseFloorOptions = {
  selector: string;
  startOffest?: number;
  intervals?: number[];
  locationOffset: number;
};
export function getRange<T extends HTMLElement>(
  elRef: React.RefObject<T>,
  selector: string,
) {
  let range: number[] = [];
  if (elRef.current) {
    const contentEl = elRef.current;
    const areaEls = contentEl.querySelectorAll(
      selector,
    ) as unknown as HTMLDivElement[];
    let start = 0;
    areaEls.forEach((item, i) => {
      const height = item.offsetHeight;
      let cur = start + (i > 0 ? 24 : 0) + height;
      range.push(cur);
      start = cur;
    });
  }
  return range;
}

function useFloor<T extends HTMLElement>(
  options: UseFloorOptions,
): UseFloorRes<T> {
  const { selector, startOffest = 0, intervals = [], locationOffset } = options;
  const contentRef = useRef<T>(null);
  const scroll = useScroll(contentRef);
  const [floorIndex, setFloorIndex] = useState(0);
  useThrottleEffect(
    () => {
      if (contentRef.current) {
        const contentEl = contentRef.current;
        const areaEls = contentEl.querySelectorAll(selector) as unknown as T[];
        let range: number[] = getRange(contentRef, selector);
        let start = startOffest;
        areaEls.forEach((item, i) => {
          const height = item.offsetHeight;
          let cur = start + (intervals[i] || 0) + height;
          range.push(cur);
          start = cur;
        });
        let index = range.length - 1;
        for (let i = 0; i < range.length; i++) {
          if ((scroll?.top || 0) + locationOffset <= range[i]) {
            index = i;
            break;
          }
        }
        if (index !== floorIndex) {
          setFloorIndex(index);
        }
      }
    },
    [scroll],
    {
      wait: 50,
    },
  );
  function scrollToIndex(index: number) {
    if (contentRef.current) {
      let targetEl = contentRef.current.querySelectorAll(selector)[index];
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return {
    ref: contentRef,
    index: floorIndex,
    scrollToIndex,
  };
}

export default useFloor;
