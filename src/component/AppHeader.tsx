import {
  ActionIcon,
  Burger,
  ColorScheme,
  Group,
  Header,
  MediaQuery,
  Title,
} from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { IconMoonStars, IconSun } from '@tabler/icons';
import React from 'react';

import { Locale } from 'src/locales';

import { useStyle } from './AppHeader.style';
import Toggle from './Toggle';

const AppHeader = () => {
  const { classes } = useStyle();
  const colorSchemeSystem = useColorScheme();
  const [value, setValue] = useLocalStorage<ColorScheme>({
    key: 'darkTheme',
    defaultValue: colorSchemeSystem,
    getInitialValueInEffect: true,
  });
  const { getToggle, setToggle } = Toggle();
  const { t } = Locale();
  return (
    <Header
      className={classes.header}
      fixed={false}
      height={70} // height is the required field so can't be moved to useStyleHeader
      p='xs'
    >
      <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
        <Burger
          opened={!getToggle()}
          onClick={() => setToggle(!getToggle())}
          size='sm'
          mr='xl'
        />
      </MediaQuery>
      <Group position='center'>
        <Group
          sx={{
            height: '100%',
            width: '50%',
          }}
          px={20}
          position='apart'
        >
          <Group position='center'>
            <Title className={classes.title} align='center' order={2}>
              {t('app.header.title')}
            </Title>
          </Group>
          <ActionIcon
            variant='outline'
            color={value === 'dark' ? 'yellow' : 'blue'}
            title={'Color'}
            onClick={() =>
              value === 'dark' ? setValue('light') : setValue('dark')
            }
          >
            {value === 'dark' ? (
              <IconSun size={18} />
            ) : (
              <IconMoonStars size={18} />
            )}
          </ActionIcon>
        </Group>
      </Group>
    </Header>
  );
};

export default React.memo(AppHeader);
