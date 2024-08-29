import '../styles/globals.css'; // Correct path based on your directory structure

import { Provider } from 'react-redux';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }: { Component: React.FC; pageProps: any }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
