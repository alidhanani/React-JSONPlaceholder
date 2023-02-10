import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import create from 'zustand';

import App from './component/App';

const store = create();
const StoreContext = createContext({});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
