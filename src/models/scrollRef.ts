import { useRef } from 'react';

export default () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return {
    scrollRef,
  };
};
