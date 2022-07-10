import GlobalStyle from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import StopWatch from './StopWatch';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <StopWatch />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
