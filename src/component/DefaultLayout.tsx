import { AppShell, ColorScheme, MantineProvider } from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';

import { useRequest } from 'src/service';
import Home from 'src/view/Home';

import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const App = () => {
  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: 'darkTheme',
    defaultValue: useColorScheme(),
    getInitialValueInEffect: true,
  });
  const { getPosts } = useRequest();

  useEffect(() => {
    getPosts().then((value) => {
      localStorage.setItem('posts', JSON.stringify(value));
    });
  }, []);

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
