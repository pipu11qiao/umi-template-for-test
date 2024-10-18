import { useState } from 'react';

export default () => {
  const [errorIds, setErrorIds] = useState<string[]>([]);

  return {
    errorIds,
    setErrorIds,
  };
};
