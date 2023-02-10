import { Button, Card, Pagination, Table } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconEditCircle, IconTrash } from '@tabler/icons';
import { useState } from 'react';

import { Locale } from 'src/locales';
import { Post } from 'src/model';

import HomeForm from './Home.form';
import { EditModal } from './Home.modal';
import { useStyle } from './Home.style';

const HomeTable = () => {
  const { classes } = useStyle();
  const [editModal, setEditModal] = useState(false);
  const [editID, setEditID] = useState('0');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const storedPosts = localStorage.getItem('posts');
  const posts: Post[] = storedPosts ? JSON.parse(storedPosts) : [];
  const [sorted, setSorted] = useState(
    posts.sort((a, b) => parseInt(b.id) - parseInt(a.id))
  );
  const indexOfLastPost = currentPage * 5;
  const indexOfFirstPost = indexOfLastPost - 5;
  const currentPosts = sorted.slice(indexOfFirstPost, indexOfLastPost);
  const { t } = Locale();

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const formData = useForm<Post>({
    validate: (values) => {
      return {
        title: values.title.trim().length < 1 ? t('app.error.post') : null,
        body: values.body.trim().length < 2 ? t('app.error.body') : null,
      };
    },
    initialValues: {
      userId: '',
      id: '',
      title: '',
      body: '',
    },
    validateInputOnChange: true,
  });

  const onAdd = () => {
    if (!formData.validate().hasErrors) {
      const sendData: Post = {
        id: (sorted.length + 1).toString(),
        userId: sorted.length.toString(),
        title: formData.values.title,
        body: formData.values.body,
      };
      sorted.push(sendData);
      localStorage.setItem(
        'posts',
        JSON.stringify(sorted.sort((a, b) => parseInt(b.id) - parseInt(a.id)))
      );
    }
  };

  const onEdit = (title: string, body: string) => {
    const index = sorted.findIndex((value: Post) => value.id === editID);
    const data = sorted.find((value: Post) => value.id === editID);
    if (data) {
      const sendData: Post = {
        id: data.id,
        userId: data.userId,
        title: title,
        body: body,
      };
      sorted[index] = sendData;
    }
    formData.reset();
    setEditModal(false);
  };

  const deleteData = (id: string) => {
    const index = sorted.findIndex((value: Post) => value.id === id);
    sorted.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(sorted));
    window.location.reload();
    setSorted(sorted);
  };

  const tableHeader = (header: string[]) => {
    return (
      <thead>
        <tr color='primary'>
          {header?.map((item: string) => (
            <th key={'TableHeader' + item}>{item}</th>
          ))}
        </tr>
      </thead>
    );
  };

  const tableBody = () => {
    return currentPosts?.map((item, index) => (
      <tr color='light' key={index}>
        {[item.title, item.body].map((item: string) => (
          <td key={item}>{item}</td>
        ))}
        <Button.Group style={{ padding: '20px' }}>
          <Button
            size={'sm'}
            variant={'outline'}
            leftIcon={<IconEditCircle size={14} />}
            color={'indigo'}
            onClick={() => {
              setTitle(item.title);
              setBody(item.body);
              setEditModal(true);
              setEditID(item.id);
            }}
            style={{ width: '100px' }}
            compact
            type={'button'}
          >
            {t('app.table.body.button.edit')}
          </Button>
          <Button
            size={'sm'}
            variant={'outline'}
            leftIcon={<IconTrash size={14} />}
            color={'red'}
            compact
            style={{ width: '100px' }}
            onClick={() => deleteData(item.id)}
            type={'button'}
          >
            {t('app.table.body.button.delete')}
          </Button>
        </Button.Group>
      </tr>
    ));
  };

  return (
    <>
      <EditModal
        id={editID}
        status={editModal}
        onClose={() => setEditModal(!editModal)}
        onClick={(title, body) => onEdit(title, body)}
        title={title}
        body={body}
      />
      <HomeForm formData={formData} onClick={onAdd} />
      <Card
        shadow='sm'
        p='sm'
        radius='md'
        withBorder
        className={classes.card}
        key={'BalanceCard'}
      >
        <Card.Section key={'headerSection'}>
          <Table
            horizontalSpacing='lg'
            verticalSpacing='lg'
            striped
            highlightOnHover
            key={'viewTable'}
          >
            {tableHeader([
              t('app.table.header.title'),
              t('app.table.header.body'),
              t('app.table.header.action'),
            ])}
            <tbody key={'mainBody'}>{tableBody()}</tbody>
          </Table>
          <Pagination
            position='center'
            style={{ padding: '10px' }}
            styles={(theme) => ({
              item: {
                '&[data-active]': {
                  backgroundImage: theme.fn.gradient({
                    from: '#5B2D7D',
                    to: '#532f6b',
                    deg: 60,
                  }),
                },
              },
            })}
            page={currentPage}
            onChange={(value) => paginate(value)}
            total={posts.length ? Math.ceil(posts.length / 10) : 1}
          />
        </Card.Section>
      </Card>
    </>
  );
};

export default HomeTable;
