import * as React from 'react';
import { Component, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import('./DefaultLayout'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path='*' element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
