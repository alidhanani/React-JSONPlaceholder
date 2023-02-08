import { Grid, TextInput } from '@mantine/core';

import { Locale } from 'src/locales';

const BalanceDetailForm = () => {
  const { t } = Locale();
  return (
    <>
      <Grid gutter='xs' className='mb-3'>
        <Grid.Col span={12}>
          <TextInput
            label={t('balance.form.textbox.account_holder')}
            type='text'
            id={'accountholder'}
            disabled
          />
        </Grid.Col>
      </Grid>
      <Grid gutter='xs' className='mb-3'>
        <Grid.Col span={12}>
          <TextInput
            label={t('balance.form.textbox.balance')}
            type='text'
            id={'balance'}
            disabled
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default BalanceDetailForm;
