import React from 'react';
import { SocketProvider } from './context/SocketContext';

import HomePage from './pages/Homepage';

export const BandNameApp = () => {
  return (
     <SocketProvider>
          <HomePage />
    </SocketProvider>
  )
}



