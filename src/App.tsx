import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './routes'
import Providers from './shared/providers'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Toaster position="top-center" reverseOrder={false} />
        <AppRoutes />
      </Providers>
    </BrowserRouter>
  );
}

export default App
