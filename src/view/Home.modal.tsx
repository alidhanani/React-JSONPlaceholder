import { Button, Modal, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { t } from 'i18next';

import { Post } from 'src/model';

interface ModelProps {
  id: string;
  status: boolean;
  onClose: () => void;
  onClick: (title: string, body: string) => void;
}

export const EditModal = (props: ModelProps) => {
  const storedPosts = localStorage.getItem('posts');
  const posts: Post[] = storedPosts ? JSON.parse(storedPosts) : [];
  const post = posts.find((value) => value.id === props.id);
  const formData = useForm<Post>({
    validate: (values) => {
      return {
        title: values.title.trim().length < 1 ? 'Title cant be empty' : null,
        body: values.body.trim().length < 2 ? 'Post cant be empty' : null,
      };
    },
    initialValues: {
      userId: '',
      id: '',
      title: post ? post.title : '',
      body: post ? post.body : '',
    },
    validateInputOnChange: true,
  });

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
          {...formData.getInputProps('title')}
          label={t('app.form.title')}
          type='text'
          id={'title'}
        />
        <TextInput
          {...formData.getInputProps('body')}
          label={t('app.form.post')}
          type='text'
          id={'body'}
        />
        <Button
          size={'md'}
          variant={'outline'}
          color={'blue'}
          compact
          onClick={() => {
            props.onClick(formData.values.title, formData.values.body);
          }}
          style={{
            marginTop: '20px',
            width: '100px',
            float: 'right',
            marginRight: '18px',
          }}
        >
          {'Post'}
        </Button>
      </>
    </Modal>
  );
};
