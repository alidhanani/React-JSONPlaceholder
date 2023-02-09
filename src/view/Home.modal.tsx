import { Button, Modal, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { t } from 'i18next';

import { Post } from 'src/model';

interface ModelProps {
  formData: UseFormReturnType<Post>;
  status: boolean;
  onClose: () => void;
  onClick: () => void;
}

export const EditModal = (props: ModelProps) => {
  return (
    <Modal opened={props.status} onClose={props.onClose} title='Edit Form'>
      <>
        <TextInput
          {...props.formData.getInputProps('title')}
          label={t('app.form.title')}
          type='text'
          id={'title'}
          value={props.formData.values.title}
        />
        <TextInput
          {...props.formData.getInputProps('body')}
          label={t('app.form.post')}
          type='text'
          id={'body'}
          value={props.formData.values.body}
        />
        <Button
          size={'md'}
          variant={'outline'}
          color={'blue'}
          compact
          onClick={props.onClick}
        >
          {'Post'}
        </Button>
      </>
    </Modal>
  );
};
