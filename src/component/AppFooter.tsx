import { Flex, Footer, Title } from '@mantine/core';
import React from 'react';

import { Locale } from 'src/locales';

const AppFooter = () => {
  const { t } = Locale();
  return (
    <Footer height={40} p='md'>
      <Flex
        mih={80}
        gap='md'
        justify='center'
        align='flex-start'
        direction='row'
        wrap='revert'
      >
        <Title order={6}>{t('app.footer.title')}</Title>
      </Flex>
    </Footer>
  );
};

export default React.memo(AppFooter);
