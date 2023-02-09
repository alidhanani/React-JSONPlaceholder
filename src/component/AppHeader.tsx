import { ActionIcon, ColorScheme, Group, Header, Title } from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { IconMoonStars, IconSun } from '@tabler/icons';
import React from 'react';

import { Locale } from 'src/locales';

import { useStyle } from './AppHeader.style';

const AppHeader = () => {
  const { classes } = useStyle();
  const colorSchemeSystem = useColorScheme();
  const [value, setValue] = useLocalStorage<ColorScheme>({
    key: 'darkTheme',
    defaultValue: colorSchemeSystem,
    getInitialValueInEffect: true,
  });
  const { t } = Locale();
  return (
    <Header className={classes.header} fixed={false} height={70} p='xs'>
      <Group position='center'>
        <Group
          sx={{
            height: '100%',
            width: '50%',
          }}
          px={20}
          position='apart'
        >
          <Group position='left'>
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
