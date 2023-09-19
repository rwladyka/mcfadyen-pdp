import { useEffect, useState } from 'react';

const useViewPort = () => {
  const [deviceSize, setDeviceSize] = useState(window.innerWidth);

  useEffect(() => {
    const resizeWindow = () => setDeviceSize(window.innerWidth);

    window.addEventListener('resize', resizeWindow);

    return () => window.removeEventListener('resize', resizeWindow);
  });

  return {
    deviceSize,
    setDeviceSize,
    isMobile: deviceSize < 1024,
  };
};

export { useViewPort };
