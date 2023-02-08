import { AppShell, ColorScheme, MantineProvider } from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';

import Home from '../view/Home';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const App = () => {
  const colorSchemeSystem = useColorScheme();
  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: 'darkTheme',
    defaultValue: colorSchemeSystem,
    getInitialValueInEffect: true,
  });

  return (
    <MantineProvider
      theme={{
        colorScheme: colorScheme,
        colors: {
          // override dark colors to change them for all components
          dark: [
            '#d5d7e0',
            '#acaebf',
            '#8c8fa3',
            '#666980',
            '#4d4f66',
            '#34354a',
            '#2b2c3d',
            '#1d1e30',
            '#0c0d21',
            '#01010a',
          ],
        },
      }}
      withGlobalStyles
    >
      <AppShell
        padding='md'
        layout='alt'
        navbarOffsetBreakpoint='sm'
        asideOffsetBreakpoint='sm'
        header={<AppHeader />}
        footer={<AppFooter />}
      >
        <Home />
      </AppShell>
    </MantineProvider>
  );
};

export default App;
