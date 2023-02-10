import { Button, Grid, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

import { Locale } from 'src/locales';
import { Post } from 'src/model';

import { useStyle } from './Home.style';

interface HomeFormProps {
  formData: UseFormReturnType<Post>;
  onClick: () => void;
}

const HomeForm = (props: HomeFormProps) => {
  const { t } = Locale();
  const { classes } = useStyle();
  return (
    <>
      <Grid gutter='xs' className='mb-3'>
        <Grid.Col span={12}>
          <TextInput
            {...props.formData.getInputProps('title')}
            label={t('app.form.title')}
            type='text'
            id={'title'}
            className={classes.form}
          />
        </Grid.Col>
      </Grid>
      <Grid gutter='xs' className='mb-3'>
        <Grid.Col span={12}>
          <TextInput
            {...props.formData.getInputProps('body')}
            label={t('app.form.post')}
            type='text'
            id={'post'}
            className={classes.form}
          />
        </Grid.Col>
      </Grid>
      <Grid gutter='sm' className='mb-1' style={{ width: '96%' }}>
        <Grid.Col span={12}>
          <Button
            size={'md'}
            variant={'outline'}
            color={'blue'}
            compact
            onClick={props.onClick}
            style={{
              marginTop: '20px',
              width: '100px',
              float: 'right',
              marginRight: '18px',
            }}
          >
            {t('app.form.button')}
          </Button>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default HomeForm;
