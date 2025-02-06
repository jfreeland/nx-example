import { Route, Routes } from 'react-router-dom';

import '@nx-example/shared/header';

import { CartCartPage } from '@nx-example/cart/cart-page';

// test

export const App = () => {
  return (
    <>
      <nx-example-header />
      <Routes>
        <Route path="/cart" element={<CartCartPage />} />
      </Routes>
    </>
  );
};

export default App;
