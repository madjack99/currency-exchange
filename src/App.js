import React from 'react';
import { Provider } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import Exchange from './Exchange';

import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Exchange />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
