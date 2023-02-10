import { Button, Modal, TextInput, Title } from '@mantine/core';
import { t } from 'i18next';
import { useLayoutEffect, useState } from 'react';

interface ModelProps {
  id: string;
  title: string;
  body: string;
  status: boolean;
  onClose: () => void;
  onClick: (title: string, body: string) => void;
}

export const EditModal = (props: ModelProps) => {
  const [formTitle, setFormTitle] = useState(props.title);
  const [formBody, setFormBody] = useState(props.body);

  useLayoutEffect(() => {
    setFormTitle(props.title);
    setFormBody(props.body);
  }, [props.title, props.body]);

  return (
    <Modal
      opened={props.status}
      onClose={props.onClose}
      title={
        <Title align='center' order={2}>
          Edit Form
        </Title>
      }
    >
      <>
        <TextInput
          label={t('app.modal.title')}
          type='text'
          id={'title'}
          defaultValue={props.title}
          onChange={(event) => setFormTitle(event.currentTarget.value)}
        />
        <TextInput
          label={t('app.modal.post')}
          type='text'
          id={'body'}
          defaultValue={props.body}
          onChange={(event) => setFormBody(event.currentTarget.value)}
        />
        <Button
          size={'md'}
          variant={'outline'}
          color={'blue'}
          compact
          onClick={() => {
            props.onClick(formTitle, formBody);
          }}
          style={{
            marginTop: '20px',
            width: '100px',
            float: 'right',
            marginRight: '18px',
          }}
        >
          {t('app.form.button')}
        </Button>
      </>
    </Modal>
  );
};
