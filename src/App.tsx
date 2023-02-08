import { AppShell } from '@mantine/core';

import AppHeader from './AppHeader';
import Home from './Home';

const App = () => {
  return (
    <AppShell
      padding='md'
      layout='alt'
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      header={<AppHeader />}
    >
      <Home />
    </AppShell>
  );
};

export default App;
